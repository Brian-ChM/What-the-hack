// Placeholder to host a component
const Hours = () => {

    const currentDay = new Date().getDay();

    const hours = {
        weekday: "10 a.m. - 4 p.m.",
        weekend: "9 a.m. - 8 p.m."
    }

    const isWeekend = currentDay == 0 || currentDay == 6;
    const todayHours = isWeekend ? hours.weekend : hours.weekday;

    return (
        <p>Today's hours: {todayHours}</p>
    )
}

export default Hours;