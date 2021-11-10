import React, { useState, useEffect } from "react";
import SideBar from "../../components/side-bar/SideBar";
import "./turnos.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { db } from "../../DB/firebase";
import { toast } from 'react-toastify'

require("moment/locale/es.js");
const localizer = momentLocalizer(moment);

const Turnos = () => {
    let rolUsuario = localStorage.getItem("rolUser");
    let turnosProfesional = [];
    const [startDate, setStartDate] = useState(new Date());
    const [turnos, setTurnos] = useState([]);
    const [pacientes, setPacientes] = useState([]);
    const [medicos, setMedicos] = useState([]);


    const onSubmit = () => {
        var pacienteSelect = document.getElementById("pacientesSelect");
        var medicoSelect = document.getElementById("MedicoSelect");

        if (rolUsuario === "1") {
            let flag = false
            pacientes.map((datapaciente) => {
                if ((datapaciente.nombre + " " + datapaciente.apellido) === pacienteSelect.value) {
                    let nuevoTurno = {
                        title: pacienteSelect.value,
                        start: String(startDate),
                        end: String(startDate),
                        pacienteId: datapaciente.id,
                        medicoNombre: medicoSelect.value,
                        profesionalId: localStorage.getItem("dataD"),
                    };
                    flag = true
                    db.collection("turnos").doc().set(nuevoTurno);
                    toast('Se agregó el turno correctamente', { type: 'success', autoClose: 3000 })
                }
            })
            if (flag == false) {
                toast("Debe elegir un paciente y medico valido", { type: 'default', autoClose: 3000 });
            }
        }
        else {
            let flag = false
            pacientes.map((datapaciente) => {
                if ((datapaciente.nombre + " " + datapaciente.apellido) === pacienteSelect.value) {

                    medicos.map((datamedico) => {
                        if ((datamedico.nombre + " " + datamedico.apellido) === medicoSelect.value) {

                            let nuevoTurno = {
                                title: pacienteSelect.value,
                                start: String(startDate),
                                end: String(startDate),
                                pacienteId: datapaciente.id,
                                profesionalId: datamedico.id,
                                medicoNombre: medicoSelect.value,
                            };
                            flag = true
                            db.collection("turnos").doc().set(nuevoTurno);
                            toast('Se agregó el turno correctamente', { type: 'success', autoClose: 3000 })
                        }
                    })
                }
            })
            if (flag == false) {
                toast("Debe elegir un paciente y medico valido", { type: 'default', autoClose: 3000 });
            }
        }
    };

    const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);

        return currentDate.getTime() < selectedDate.getTime();
    };

    useEffect(() => {
        db.collection("turnos").onSnapshot((querySnapshot) => {
            const turnos = [];
            querySnapshot.forEach((doc) => {
                turnos.push({ ...doc.data(), id: doc.id });
            });
            for (let i = 0; i < turnos.length; i++) {
                turnos[i].start = new Date(turnos[i].start);
                turnos[i].end = new Date(turnos[i].end);
            }

            if (rolUsuario === "2" || rolUsuario === "3") {
                setTurnos(turnos);
            }
            if (rolUsuario === "1") {
                turnosProfesional = []
                turnos.map((dataturnosmedico) => {

                    if (dataturnosmedico.profesionalId === localStorage.getItem("dataD")) {
                        turnosProfesional.push(dataturnosmedico)
                    }

                })
                setTurnos(turnosProfesional);
            }
        });


        db.collection("users").onSnapshot((querySnapshot) => {
            let medicos = [];
            querySnapshot.forEach((doc) => {
                medicos.push({ ...doc.data(), id: doc.id });
            });

            let medicosArray = [];
            for (let i = 0; i < medicos.length; i++) {
                if (medicos[i].rol === 1) {
                    medicosArray.push(medicos[i]);
                }
            }
            setMedicos(medicosArray)
            medicosArray.map((data) => {
                var option = document.createElement("option"); //Creamos la opcion
                option.innerHTML = data.nombre + " " + data.apellido; //Metemos el texto en la opción
                document.getElementById("MedicoSelect").appendChild(option); //Metemos la opción en el select
            })
        }
        );
    },
        []);

    useEffect(() => {
        db.collection("pacientes").onSnapshot((querySnapshot) => {
            const pacientes = [];
            querySnapshot.forEach((doc) => {
                pacientes.push({ ...doc.data(), id: doc.id });
            });
            setPacientes(pacientes);
            let arrayPacientes = [];
            if (rolUsuario === "1") {

                pacientes.map((data) => {
                    if (data.profesionalId === localStorage.getItem("dataD")) {
                        var option = document.createElement("option"); //Creamos la opcion
                        option.innerHTML = data.nombre + " " + data.apellido; //Metemos el texto en la opción
                        document.getElementById("pacientesSelect").appendChild(option); //Metemos la opción en el select
                    }
                })
            }
            else {
                pacientes.map((data) => {
                    var option = document.createElement("option"); //Creamos la opcion
                    option.innerHTML = data.nombre + " " + data.apellido; //Metemos el texto en la opción
                    document.getElementById("pacientesSelect").appendChild(option); //Metemos la opción en el select
                })
            }
        });
    }, [])


    const SelectMedicoBloquear = () => {
        if (rolUsuario === "1") {
            return (
                <select class="form-select" aria-label="Default select example" id="MedicoSelect" disabled
                >
                    <option selected>Seleccione un Medico</option>
                </select>
            )
        }
        else {
            return (
                <select class="form-select" aria-label="Default select example" id="MedicoSelect"
                >
                    <option selected>Seleccione un Medico</option>
                </select>)
        }
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-10 pt-5 pr-5 pb-5">
                    <h2 className="tituloPerfil padding-responsive text-muted">Turnos</h2>
                    <form>
                        <div className="row ml-4">
                            <div className="col-md-3">
                                <label for="exampleInputEmail1" className="form-label">
                                    Paciente
                                </label>
                                <select class="form-select" aria-label="Default select example" id="pacientesSelect"
                                >
                                    <option selected>Seleccione un Paciente</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <label for="exampleInputEmail1" className="form-label">
                                    Médico
                                </label>
                                {SelectMedicoBloquear()}
                            </div>
                            <div className="col-md-3">
                                <label for="exampleInputEmail1" className="form-label">
                                    Fecha
                                </label>
                                <DatePicker className="form-control text-center DatePicker"
                                    showTimeSelect
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    minDate={new Date()}
                                    filterTime={filterPassedTime}
                                />
                            </div>
                            <div className="col-md-3">
                                <label>&nbsp;</label>
                                <br></br>
                                <div className="row responsive-agregar-turno">
                                    <button type="button" className="btn btn-primary" onClick={() => onSubmit()}>
                                        Agregar Turno
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>

                    <Calendar
                        className="calendar"
                        localizer={localizer}
                        events={turnos}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: 600, margin: "36px" }}
                        messages={{
                            next: "sig",
                            previous: "ant",
                            today: "Hoy",
                            month: "Mes",
                            week: "Semana",
                            day: "Día",
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Turnos;
