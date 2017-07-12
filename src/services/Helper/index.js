import React from 'react'

/**
* Convert date to readable date
* @param {String} Date
*/
module.exports.formatDate = (date) => {
    const d = new Date(date)
    return d.toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})
}


/**
* Organize errors for display in the admin panel
* @param {Array} Errors
* @return {JSXElement} List
*/
module.exports.displayErrors = (errors) => {
    return(errors.map((err, i) => { return <li key={i}>{err}</li> }))
}