import React, { useState, useEffect } from 'react'
import SideBar from '../../components/side-bar/SideBar';
import "./turnos.css"
import { Calendar, dateFnsLocalizer, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useForm } from "react-hook-form";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextInput from 'react-autocomplete-input';
import 'react-autocomplete-input/dist/bundle.css';
import { db } from "../../DB/firebase";
import { addHours } from 'date-fns';


/* const locales = {
    "en-US": require("date-fns/locale/en-US"),
}; */
/* const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
}); */


require("moment/locale/es.js")
const localizer = momentLocalizer(moment);

const Turnos = () => {

    const [startDate, setStartDate] = useState(new Date());

    const [events, setEvents] = useState([]);
    const [pacientes, setPacientes] = useState([]);
    const [nombreSelector, setnombreSelector] = useState("");
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    let NombrePaciente = []
    for (let i = 0; i < pacientes.length; i++) {
        NombrePaciente.push(pacientes[i].nombre);
    }
    let opciones = NombrePaciente

    let endDate = new Date()
    endDate.setHours(startDate.getHours(), startDate.getMinutes() + 29)

    const onSubmit = data => {
        console.log(watch("datoPaciente"));
        const data2 = {
            title: nombreSelector,
            start: String(startDate),
            end: String(endDate)
        }
        db.collection("eventos").doc().set(data2);
        console.log(data2);
    };


    useEffect(() => {
        db.collection("eventos").onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setEvents(docs);
        });

        db.collection("pacientes").onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setPacientes(docs);
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


                <Calendar localizer={localizer} events={events}
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