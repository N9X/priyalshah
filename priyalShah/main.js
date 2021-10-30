const moment = require('moment');

// The newer import statement will also work
// import moment from 'moment'

const now = moment().format('MMMM Do YYYY, h:mm:ss a');

console.log(now);
