var createError = require("http-errors");
const http = require("http");
require("dotenv").config();
var express = require("express");
const { sequelize } = require("./models/index");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
//var articulosRouter= require("./routes/Articulos");
const PORT = process.env.PORT || 9000;
const hostname = "127.0.0.1";

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//app.use("/", indexRouter);
//app.use("/users", usersRouter);

//app.use("/api", articulosRouter);

//RUTAS PRODUCTOS
app.use("/api/productos", require("./routes/productos"));
//RUTAS VENTAS
app.use("/api/ventas", require("./routes/ventas"));
//RUTAS DETALLESVENTAS
app.use("/api/detallesVentas", require("./routes/detallesVentas"));
//RUTAS USUARIOS
app.use("/api/usuarios", require("./routes/usuarios"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
/*const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});*/

app.listen(PORT, hostname, () => {
  //con true crea los modelos automaticamente
  /*sequelize.sync({force:true}).then(()=> {
      console.log("sucess");

  }).catch(
    (error)=> {
      console.log("error", error);
  }
  );*/
  console.log(`Server running at http://${hostname}:${PORT}/`);
  sequelize.sync().then(() => {
    console.log("Se ha establecido la conexión");
  });
});

module.exports = app;
