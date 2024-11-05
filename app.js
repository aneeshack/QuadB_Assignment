const express = require('express');
const session = require('express-session');
const controller = require('./Controller/controller')
const path = require('path');
require('dotenv').config();
const { sequelize } = require('./Models/Ticker')
const app =express()

app.use(session({
    secret: 'session-secret', 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
}));

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')));
app.get('/',controller.fetchData)

sequelize.sync()
  .then(() => {
    console.log('Database synced successfully.');
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });