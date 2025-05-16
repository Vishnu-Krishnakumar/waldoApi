const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const localRoutes = require("./routes/locateRoutes");
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use("/locate", localRoutes);


app.listen(3000,()=>{
    console.log("Listening to port 3000");
})