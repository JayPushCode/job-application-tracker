require('dotenv').config();

const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;  // Use env PORT if set, else fallback

const hbs = exphbs.create({ helpers });

const sess = {
  secret: process.env.SESSION_SECRET || 'fallback-secret',
  cookie: {
    maxAge: 2 * 60 * 60 * 1000,  // 2 hours
    // secure: true, // Uncomment if using HTTPS
    httpOnly: true,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Application is now running on port ${PORT}`);
      if (!process.env.PORT) {
        console.warn("Warning: Environment variable PORT is not set, using default port 3001");
      } else {
        console.log("Environment variable PORT is set.");
      }
    });
  })
  .catch(error => {
    console.error("An error occurred while starting the application:", error);
    process.exit(1);
  });
