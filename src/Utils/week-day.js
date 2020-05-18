/**
 * Computes the week number, from 0 to 6 where 0 is monday.
 */
export function getWeekDay(dayNumber, monthNumber, yearNumber) {
    const dayWhereSundayIsZero = new Date(yearNumber, monthNumber, dayNumber).getDay();

    if (dayWhereSundayIsZero == 0)
        return 6;

    return dayWhereSundayIsZero - 1;
}
