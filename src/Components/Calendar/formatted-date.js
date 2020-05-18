/**
 * Gets the formatted date as the server returns it for the occupancies.
 * @param {*} date JS date oject.
 */
export function getFormattedDate(date) {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');

    return day + '-' + month + '-' + year;
}
