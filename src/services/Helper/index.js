import React from 'react'

/**
* Convert date to readable date
* @param {String} Date
* @return {String} formatted date
*/
module.exports.formatDate = (date) => {
    const d = new Date(date)
    return d.toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})
}

/**
* Convert date to readable date including time
* @param {String} Date
* @return {String} formatted date
*/
module.exports.formatPreciseDate = (date) => {
    const d = new Date(date)
    return d.toLocaleDateString('en-US', 
            {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit'})
}

/**
* Organize errors for display in the admin panel
* @param {Array} Errors
* @return {JSXElement} List
*/
module.exports.displayErrors = (errors) => {
    return(errors.map((err, i) => { return <li key={i}>{err}</li> }))
}