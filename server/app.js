const express = require('express');
const clc = require('cli-color');
const morgan = require('morgan');
const cors = require('cors');
const error_handler = require('./middlewares/errorHandler');
const path = require('path');
require('dotenv').config();

const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200,
  })
);

if (isDev) {
  app.use(morgan(':date[clf] - :method :url :status - :response-time ms'));
}

app.get('/api', function (req, res) {
  res.json({ ok: true });
});

// ROUTES
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));
app.use('/api/project', require('./routes/project'));

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.use(error_handler);

app.listen(PORT, () => {
  if (isDev) {
    process.stdout.write(clc.erase.screen);
    process.stdout.write(clc.move.top);
  }

  console.log('Server Online');
  console.log(`Puerto ${PORT}`);
});
