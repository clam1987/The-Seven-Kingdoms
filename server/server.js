const express = require("express");
const app = express();
//     userRoutes = require("./routes/user");

// require("./config/connection");    
// app.use(require("./middleware"));
// app.use("/users", userRoutes);

app.listen(process.env.PORT || 3001);