import React, { useState } from 'react'
import SideBar from '../../components/side-bar/SideBar';
import "./turnos.css"

import { Calendar, dateFnsLocalizer, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2021, 9, 0),
        end: new Date(2021, 9, 0),
    },
    {
        title: "Vacation",
        start: new Date(2021, 9, 7),
        end: new Date(2021, 9, 10),
    },
    {
        title: "Conference",
        start: new Date(),
        end: new Date(),
    },
];


const Turnos = () => {
    return (<div>
        <div className="row">
            <div className="col-2">
                <SideBar></SideBar>
            </div>

            <div className="col-10 pt-5 pr-5 pb-5">
                <Calendar localizer={localizer} events={events}
                    startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} messages={{
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