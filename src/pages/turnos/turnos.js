import React from 'react'
import SideBar from '../../components/side-bar/SideBar';
import "./turnos.css"
import { Inject, Day, Week, Month, Agenda, ScheduleComponent, Resize, DragAndDrop } from "@syncfusion/ej2-react-schedule"

import { L10n } from "@syncfusion/ej2-base";

L10n.load({
    pt: {
        schedule: {
            day: "Dia",
            week: "Semana",
            workWeek: "Semana de trabalho",
            month: "Mês",
            agenda: "Agenda",
            weekAgenda: "Agenda da semana",
            workWeekAgenda: "Agenda da Semana de Trabalho",
            monthAgenda: "Agenda do mês",
            today: "Hoje",
            noEvents: "Sem eventos",
            emptyContainer: "Não há eventos agendados para este dia.",
            allDay: "Dia todo",
            start: "Começar",
            end: "Fim",
            more: "Mais",
            close: "Fechar",
            cancel: "Cancelar",
            noTitle: "(Sem título)",
            delete: "Excluir",
            deleteEvent: "Este evento",
            deleteMultipleEvent: "Excluir vários eventos",
            selectedItems: "Itens selecionados",
            deleteSeries: "Série inteira",
            edit: "Editar",
            editSeries: "Série inteira",
            editEvent: "Este evento",
            createEvent: "Crio",
            subject: "Sujeito",
            addTitle: "Adicionar título",
            moreDetails: "Mais detalhes",
            save: "Salve ",
            editContent: "Como você gostaria de alterar o compromisso na série?",
            deleteContent: "Tem certeza de que deseja excluir este evento?",
            deleteMultipleContent:
                "Tem certeza de que deseja excluir os eventos selecionados?",
            newEvent: "Novo evento",
            title: "Título",
            location: "Localização",
            description: "Descrição",
            timezone: "Fuso horário",
            startTimezone: "Iniciar fuso horário",
            endTimezone: "Fuso horário final",
            repeat: "Repetir",
            saveButton: "Salve ",
            cancelButton: "Cancelar",
            deleteButton: "Excluir",
            recurrence: "Recorrência",
            wrongPattern: "O padrão de recorrência não é válido.",
            seriesChangeAlert:
                "Deseja cancelar as alterações feitas em instâncias específicas desta série e associá-las à série inteira novamente?",
            createError:
                "A duração do evento deve ser menor que a frequência com que ele ocorre. Diminua a duração ou altere o padrão de recorrência no editor de eventos de recorrência.",
            sameDayAlert:
                "Duas ocorrências do mesmo evento não podem ocorrer no mesmo dia.",
            editRecurrence: "Editar recorrência",
            repeats: "Repete",
            alert: "Alerta",
            startEndError: "A data final selecionada ocorre antes da data de início.",
            invalidDateError: "O valor da data inserida é inválido.",
            blockAlert:
                "Os eventos não podem ser agendados dentro do intervalo de tempo bloqueado.",
            ok: "Está bem",
            yes: "sim",
            no: "Não",
            occurrence: "Ocorrência",
            series: "Series",
            previous: "Anterior",
            next: "Próximo",
            timelineDay: "Dia da linha do tempo",
            timelineWeek: "Semana da Linha do Tempo",
            timelineWorkWeek: "Semana de trabalho da linha do tempo",
            timelineMonth: "Mês da linha do tempo",
            timelineYear: "Ano da Linha do Tempo",
            editFollowingEvent: "Eventos seguintes",
            deleteTitle: "Excluir evento",
            editTitle: "Editar evento",
            beginFrom: "Começar de",
            endAt: "Termina em"
        },
        recurrenceeditor: {
            none: "Nenhum",
            daily: "Diariamente",
            weekly: "Semanal",
            monthly: "Por mês",
            month: "Mês",
            yearly: "Anual",
            never: "Nunca",
            until: "Até",
            count: "Contagem",
            first: "Primeiro",
            second: "Segundo",
            third: "Terceiro",
            fourth: "Quarto",
            last: "Último",
            repeat: "Repetir",
            repeatEvery: "Repita cada",
            on: "Repetir em",
            end: "Fim",
            onDay: "Dia",
            days: "Dias)",
            weeks: "Semana (s)",
            months: "Mês (es)",
            years: "Anos)",
            every: "cada",
            summaryTimes: "tempo (s)",
            summaryOn: "em",
            summaryUntil: "até",
            summaryRepeat: "Repete",
            summaryDay: "dias)",
            summaryWeek: "semana (s)",
            summaryMonth: "mês (es)",
            summaryYear: "anos)",
            monthWeek: "Mês Semana",
            monthPosition: "Posição do mês",
            monthExpander: "Expansor do mês",
            yearExpander: "Expansor do ano",
            repeatInterval: "Intervalo de repetição"
        },
        calendar: {
            today: "Hoje"
        }
    }
});

const Turnos = () => {
    return (<div>
        <div className="row">
            <div className="col-2">
                <SideBar></SideBar>
            </div>

            <div className="col-10">
                <ScheduleComponent>
                    <Inject services={[Day, Week, Month, Agenda, Resize, DragAndDrop]}></Inject>
                </ScheduleComponent>
            </div>
        </div>
    </div>)
}

export default Turnos;