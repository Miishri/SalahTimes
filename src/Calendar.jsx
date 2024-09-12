
export default function Calendar({hijriCalendar, georgianCalendar}) {

    return (
        <div className="calendar">
            <div>{hijriCalendar}</div>
            <div>{georgianCalendar}</div>
        </div>
    )
}