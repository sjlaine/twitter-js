const express = require('express');
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const app = express(); // creates an instance of an express application
app.listen(3000);
app.use('/', routes);
app.use(volleyball);

// app.use((req, res, next) => {
//   process.stdout.write(`${req.method} ${req.path}\n`);
//   next();
// })

// app.use('/special/*', (req, res, next) => {
//   process.stdout.write(`You've entered the special area.\n`);
//   next();
// })


// const data = {
//   title: 'testTitle',
//   people: [{ name: 'Aaron' },
//   { name: 'Sarah' }
//   ]
// };
// nunjucks.configure('views');
// nunjucks.render('index.html', data, (err, render)=>{if (err) throw err
//   process.stdout.write(render + '\n')});

// app.set('view engine', 'html'); // have res.render work with html files
// app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
// nunjucks.configure('views', { noCache: true });

// app.get('/', (req, res) => {res.render('index.html', data)})
