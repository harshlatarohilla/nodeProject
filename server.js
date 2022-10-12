const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
let morgan = require("morgan");
const useRoute = require("./routes/user");

//middleware
app.use(morgan("dev"));
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/api/user", useRoute);

app.use("/", express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/admin/login.html");
// });

// app.use(function (req, res, next) {
//   return res.status(200).json({ ok: "home route, server.js " });
// });

app.listen(80, () => {
  console.log("app running on http://locahost:80");
});
