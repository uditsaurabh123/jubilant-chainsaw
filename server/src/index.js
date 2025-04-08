const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const helmet = require("helmet")
const morgan = require("morgan")
const dynamoose = require("dynamoose")
const courseController = require("./controllers/courseControllers")
const { DynamoDB } = require("aws-sdk")
const { Schema } = dynamoose
const { v4: uuidv4 } = require("uuid")

dotenv.config()

const isProduction = process.env.NODE_ENV === "production"

// Create new DynamoDB instance
const ddb = new dynamoose.aws.ddb.DynamoDB({
    "credentials": {
        "accessKeyId": "AKID",
        "secretAccessKey": "SECRET"
    },
    "region": "us-east-1"
});

// Set DynamoDB instance to the Dynamoose DDB instance
dynamoose.aws.ddb.set(ddb);
dynamoose.aws.ddb.local('http://localhost:8000');

//console.log(process.env)

if (!isProduction) {
    //dynamose.aws.ddb.local()
}
const app = express()
const PORT = process.env.PORT || 5000
const CORS_ORIGIN = process.env.CORS_ORIGIN || "*"
const CORS_CREDENTIALS = process.env.CORS_CREDENTIALS || true


// Configure Dynamoose to connect to the local DynamoDB instance

app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())


app.get("/", (req, res, next) => {
    return res.json({
        message: "Welcome to the API",
    })
})
app.use("/api/courses", courseController)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
