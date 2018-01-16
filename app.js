const express = require( 'express' );
const volleyball = require( 'volleyball' );
const app = express(); // creates an instance of an express application
app.listen(3000);

// app.use((req, res, next) => {
//   process.stdout.write(`${req.method} ${req.path}\n`);
//   next();
// })

// app.use('/special/*', (req, res, next) => {
//   process.stdout.write(`You've entered the special area.\n`);
//   next();
// })

app.use(volleyball);
