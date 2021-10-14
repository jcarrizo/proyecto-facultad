import React, { useState } from 'react'
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

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log("empieza");
    console.log(startDate);
    let replica = startDate
    replica.setHours(23, 59)
    let newDateObj = replica
    console.log("termina");
    console.log(newDateObj);

    const events = [
        {
            title: "jesus chupala",
            allDay: true,
            start: new Date(startDate),
            end: new Date(newDateObj),
        },
        {
            title: "Vacation",
            start: new Date(),
            end: new Date(),
        },
        {
            title: "Conference",
            start: new Date(),
            end: new Date(),
        },
    ];

    let handleColor = (time) => {
        return time.getHours() > 12 ? "text-success" : "text-error";
    };
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
                            <TextInput className="form-control fixed" options={["juan", "mauricio", "jesus", "ElAgucho"]} />
                        </div>


                        <div className="col">
                            <label for="exampleInputEmail1" className="form-label">Fecha</label>
                            <DatePicker
                                showTimeSelect
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                timeClassName={handleColor}

                            />
                        </div>

                        <div className="col d-flex align-items-center mt-3" >
                            <button type="submit" className="btn btn-primary">Submit</button>
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