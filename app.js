const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const localRoutes = require("./routes/locateRoutes");
const timerRoutes = require("./routes/timerRoutes");
const scoreRoutes = require("./routes/scoreRoutes")
const app = express();

app.use(
    cors({
        origin:["http://localhost:5173","http://127.0.0.1:5173","https://waldoapi-r65s.onrender.com","https://waldo-app.onrender.com"],
        credentials: true,
    })
)
app.use(express.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use("/locate", localRoutes);
app.use("/timer", timerRoutes);
app.use("/score", scoreRoutes);

app.listen(3000,()=>{
    console.log("Listening to port 3000");
})