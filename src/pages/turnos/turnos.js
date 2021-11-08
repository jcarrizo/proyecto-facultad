import React, { useState, useEffect } from "react";
import SideBar from "../../components/side-bar/SideBar";
import "./turnos.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useForm } from "react-hook-form";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextInput from "react-autocomplete-input";
import "react-autocomplete-input/dist/bundle.css";
import { db } from "../../DB/firebase";
import { toast } from 'react-toastify'

require("moment/locale/es.js");
const localizer = momentLocalizer(moment);

const Turnos = () => {
    const [startDate, setStartDate] = useState(new Date());

    const [turnos, setTurnos] = useState([]);
    const [pacientes, setPacientes] = useState([]);
    const [medicos, setMedicos] = useState([]);

    const [nombreSelectorPaciente, setnombreSelectorPaciente] = useState("");
    const [nombreSelectorMedico, setnombreSelectorMedico] = useState("");

    const {
        handleSubmit,
        formState: { errors },
    } = useForm();

    let nombrePaciente = [];
    for (let i = 0; i < pacientes.length; i++) {
        nombrePaciente.push(pacientes[i].nombre + " " + pacientes[i].apellido);
    }
    let opcionesPacientes = nombrePaciente;


    let nombreMedico = [];
    for (let i = 0; i < medicos.length; i++) {
        nombreMedico.push(medicos[i].nombre + " " + medicos[i].apellido);
    }
    let opcionesMedicos = nombreMedico;

    const onSubmit = (data) => {
        if (nombreSelectorPaciente != "") {
            if (rolUsuario === "medico" || nombreSelectorMedico !== "") {
                let nuevoTurno = {
                    title: nombreSelectorPaciente,
                    start: String(startDate),
                    end: String(startDate),
                    profesionalId: localStorage.getItem("dataD"),
                };
                if (rolUsuario !== "medico") {
                    for (let i = 0; i < medicos.length; i++) {
                        if (medicos[i].nombre + " " + medicos[i].apellido + " " === nombreSelectorMedico) {
                            nuevoTurno.profesionalId = medicos[i].id;
                        }
                    }
                }
                db.collection("turnos").doc().set(nuevoTurno);
                setnombreSelectorPaciente("");
                toast('Se agregó el turno correctamente', { type: 'success', autoClose: 3000 })
            } else {
                toast("No se pueden ingresar campos vacios", { type: 'default', autoClose: 3000 });
            }
        }
    };

    let rolUsuario = localStorage.getItem("rolUser");
    let IdUsuario = localStorage.getItem("dataD");
    let turnosProfesional = [];

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
                turnosProfesional = [];
                turnos.map((data) => {
                    if (data.profesionalId === IdUsuario) {
                        turnosProfesional.push(data);
                    }
                });
                setTurnos(turnosProfesional);
            }
        });

        db.collection("pacientes").onSnapshot((querySnapshot) => {
            const pacientes = [];
            querySnapshot.forEach((doc) => {
                pacientes.push({ ...doc.data(), id: doc.id });
            });
            setPacientes(pacientes);
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
        }
        );
    },
        []);

    return (
        <div>
            <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>

                <div className="col-md-10 pt-5 pr-5 pb-5">
                    <h2 className="tituloPerfil padding-responsive text-muted">Turnos</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row ml-4">
                            <div className="col-md-3">
                                <label for="exampleInputEmail1" className="form-label">
                                    Paciente
                                </label>
                                <TextInput
                                    trigger={[""]}
                                    className="form-control fixed"
                                    options={opcionesPacientes}
                                    onSelect={(datoss) => {
                                        setnombreSelectorPaciente(datoss);
                                    }}
                                />
                            </div>

                            <div className="col-md-3">
                                <label for="exampleInputEmail1" className="form-label">
                                    Médico
                                </label>
                                <TextInput
                                    trigger={[""]}
                                    className="form-control fixed"
                                    options={opcionesMedicos}
                                    onSelect={(datoss) => {
                                        setnombreSelectorMedico(datoss);
                                    }}
                                />
                            </div>

                            <div className="col-md-3">
                                <label for="exampleInputEmail1" className="form-label">
                                    Fecha
                                </label>
                                <DatePicker className="form-control text-center"
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
                                    <button type="submit" className="btn btn-primary">
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
