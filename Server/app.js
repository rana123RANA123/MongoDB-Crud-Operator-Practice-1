const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const userRoutes = require('./src/routes/userRoutes')
app.use("/", userRoutes)

mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection;

db.on("error", (error) => {
    console.log("Mongodb error : ", error);
});

db.once("open", () => {
    console.log("Mongodb connected sucessfully!");
    const port = process.env.PORT;
    app.listen(port, () => {
        console.log(`server is running on ${port} port`);
    });
});
