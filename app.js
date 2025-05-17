const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const localRoutes = require("./routes/locateRoutes");
const timerRoutes = require("./routes/timerRoutes");
const app = express();

app.use(
    cors({
        origin:["http://localhost:5173","http://127.0.0.1:5173"],
        credentials: true,
    })
)
app.use(express.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use("/locate", localRoutes);
app.use("/timer", timerRoutes);


app.listen(3000,()=>{
    console.log("Listening to port 3000");
})