const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const cursadasRouter = require("./routes/cursadas");
const cursosRouter = require("./routes/cursos");
const investigacionesRouter = require("./routes/investigaciones");
const investigacionRouter = require("./routes/investigacion");
const consultoriasRouter = require("./routes/consultorias");
const docentesRouter = require("./routes/docentes");
const perfilRouter = require("./routes/docentes");
const registroRouter = require("./routes/registro");
const personasRouter = require("./routes/personas");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);
app.use("/cursadas", cursadasRouter);
app.use("/cursos", cursosRouter);
app.use("/investigaciones", investigacionesRouter);
app.use("/innvestigacion", investigacionRouter);
app.use("/consultorias", consultoriasRouter);
app.use("/docentes", docentesRouter);
app.use("/perfil", perfilRouter);
app.use("/resgistro", registroRouter);
app.use("/personas", personasRouter);

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

module.exports = app;
