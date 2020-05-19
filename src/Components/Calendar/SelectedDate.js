import { getWeekDay } from '../../Utils/week-day.js';

/**
 * Immutable class representing a calendar widget's selected date.
 */
export default class SelectedDate {

    constructor(dayNumber, monthNumber, yearNumber) {
        this.dayNumber = dayNumber;
        this.monthNumber = monthNumber;
        this.yearNumber = yearNumber;
    }

    static fromDate(date) {
        return new SelectedDate(date.getDate(), date.getMonth(), date.getFullYear());
    }

    static today() {
        return SelectedDate.fromDate(new Date());
    }

    previousMonth() {
        let date = new Date(this.yearNumber, this.monthNumber - 1, this.dayNumber);
        return SelectedDate.fromDate(date);
    }

    nextMonth() {
        let date = new Date(this.yearNumber, this.monthNumber + 1, this.dayNumber);
        return SelectedDate.fromDate(date);
    }

    previousWeek() {
        let date = new Date(this.yearNumber, this.monthNumber, this.dayNumber - 7);
        return SelectedDate.fromDate(date);
    }

    nextWeek() {
        let date = new Date(this.yearNumber, this.monthNumber, this.dayNumber + 7);
        return SelectedDate.fromDate(date);
    }

    previousDay() {
        let date = new Date(this.yearNumber, this.monthNumber, this.dayNumber - 1);
        return SelectedDate.fromDate(date);
    }

    nextDay() {
        let date = new Date(this.yearNumber, this.monthNumber, this.dayNumber + 1);
        return SelectedDate.fromDate(date);
    }

    /**
     * Returns an array of 7 * 5 days, including all of the days of
     * this month and a few of the surroundings one.
     */
    days() {
        // TODO: clean up all this

        let n = numberOfDaysInMonth(this.monthNumber, this.yearNumber);

        const days = [];

        // First, add all days in the same week before the start of the first day.
        const previousMonthN = numberOfDaysInMonth(this.monthNumber - 1, this.yearNumber);
        const previousMonthtoAdd = getWeekDay(this.dayNumber, this.monthNumber, this.yearNumber) - 2;

        const lastMonthDate = new Date(this.yearNumber, this.monthNumber - 1);
        const nextMonthDate = new Date(this.yearNumber, this.monthNumber + 1);

        for (var i = previousMonthN - previousMonthtoAdd + 1; i <= previousMonthN; i++)
            days.push({
                yearNumber: lastMonthDate.getFullYear(),
                monthNumber: lastMonthDate.getMonth(),
                dayNumber: i,
            });

        // Add the days of the current month
        for (var i = 1; i <= n; i++) {
            days.push({
                yearNumber: this.yearNumber,
                monthNumber: this.monthNumber,
                dayNumber: i,
            });
        }

        // And then, add the remaining days
        var i = 1;

        while (days.length < 7 * 5) {
            days.push({
                yearNumber: nextMonthDate.getFullYear(),
                monthNumber: nextMonthDate.getMonth(),
                dayNumber: i,
            });
            i += 1;
        }

        // Clamp the array : there might be more if there is >= 30 days
        return days.slice(0, 7 * 5);
    }

    week() {
        let date = new Date(this.yearNumber, this.monthNumber, this.dayNumber);

        // Go back to monday
        let weekDay = getWeekDay(this.dayNumber, this.monthNumber, this.yearNumber);
        date.setDate(date.getDate() - weekDay);

        const days = [];
        for (var i = 0; i < 7; i++) {
            days.push({
                yearNumber: date.getFullYear(),
                monthNumber: date.getMonth(),
                dayNumber: date.getDate(),
            });
            date.setDate(date.getDate() + 1);
        }

        return days;
    }

}

function numberOfDaysInMonth(monthNumber, yearNumber) {
    return new Date(yearNumber, monthNumber + 1, 0).getDate();
}
