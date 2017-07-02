/**
* Convert date to readable date
* @param {string} Date
*/
module.exports.formatDate = (date) => {
    const d = new Date(date)
    return d.toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})
}