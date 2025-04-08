const express = require("express")
const CourseRating = require("../models/courseModels");

const app = express();

app.get("/", (req, res) => {
    return res.json({ "message": "Welcome Backend API courses" })
})


app.post("/", async (req, res) => {
    console.log(req.body)
    const course = new CourseRating()
    await course.save()
    return res.json({ "message": "course has been saved successfully" })
})

module.exports = app