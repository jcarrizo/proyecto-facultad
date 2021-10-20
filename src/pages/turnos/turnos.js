import React, { useState, useEffect } from 'react'
import SideBar from '../../components/side-bar/SideBar';
import "./turnos.css"
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useForm } from "react-hook-form";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextInput from 'react-autocomplete-input';
import 'react-autocomplete-input/dist/bundle.css';
import { db } from "../../DB/firebase";



require("moment/locale/es.js")
const localizer = momentLocalizer(moment);

const Turnos = () => {

    const [startDate, setStartDate] = useState(new Date());

    const [turnos, setTurnos] = useState([]);
    const [pacientes, setPacientes] = useState([]);
    const [nombreSelector, setnombreSelector] = useState("");
    const { handleSubmit, formState: { errors } } = useForm();

    let nombrePaciente = []
    for (let i = 0; i < pacientes.length; i++) {
        nombrePaciente.push(pacientes[i].nombre);
    }
    let opciones = nombrePaciente


    const onSubmit = data => {
        const nuevoTurno = {
            title: nombreSelector,
            start: String(startDate),
            end: String(startDate)
        }
        db.collection("turnos").doc().set(nuevoTurno);
    };


    useEffect(() => {
        db.collection("turnos").onSnapshot((querySnapshot) => {
            const turnos = [];
            querySnapshot.forEach((doc) => {
                turnos.push({ ...doc.data(), id: doc.id });
            });
            for (let i = 0; i < turnos.length; i++) {
                turnos[i].start = new Date(turnos[i].start)
                turnos[i].end = new Date(turnos[i].end)
            }
            setTurnos(turnos);
        });

        db.collection("pacientes").onSnapshot((querySnapshot) => {
            const pacientes = [];
            querySnapshot.forEach((doc) => {
                pacientes.push({ ...doc.data(), id: doc.id });
            });
            setPacientes(pacientes);
        });

    }, [])




    return (<div>
        <div className="row">
            <div className="col-2">
                <SideBar></SideBar>
            </div>

            <div className="col-10 pt-5 pr-5 pb-5">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row ml-4">
                        <div className="col">
                            <label for="exampleInputEmail1" className="form-label">Paciente</label>
                            <TextInput className="form-control fixed" options={opciones} onSelect={(datoss) => { setnombreSelector(datoss) }} />
                        </div>


                        <div className="col">
                            <label for="exampleInputEmail1" className="form-label">Fecha</label>
                            <DatePicker
                                showTimeSelect
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}

                            />
                        </div>

                        <div className="col d-flex align-items-center mt-3" >
                            <button type="submit" className="btn btn-primary">Agregar Turno</button>
                        </div>
                    </div>

                </form>


                <Calendar localizer={localizer} events={turnos}
                    startAccessor="start" endAccessor="end" style={{ height: 800, margin: "50px" }} messages={{
                        next: "sig",
                        previous: "ant",
                        today: "Hoy",
                        month: "Mes",
                        week: "Semana",
                        day: "Día",
                    }} />
            </div>
        </div>
    </div>)
}

export default Turnos;