// import npm libraries
const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
// import folders
const routes = require("./controllers");
const helpers = require("./utils/helper");

// NoSQL connection with sequelize
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// use express server
const app = express();
const PORT = process.env.PORT || 3001;

// set up handlebars
const hbs = exphbs.create({ helpers });

// middleware 
const sess = {
  secret: "Super secret secret",
   httpOnly: true,
   cookie: {
    maxAge: 300000,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// use middleware
app.use(session(sess));

// setup handlebars engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now Listening"));
});
