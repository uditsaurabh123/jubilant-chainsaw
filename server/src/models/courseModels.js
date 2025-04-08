const { Schema, model } = require("dynamoose")
const dynamoose = require("dynamoose")
var AWS = require('aws-sdk');

var dd = new AWS.DynamoDB({ 'region': 'us-east-1' });
const commentSchema = new Schema({
    commentId: {
        type: String,

    },
    userId: {
        type: String,

    },
    text: {
        type: String,

    },
    createdAt: { type: Date, default: Date.now }
})

const chapterSchema = new Schema({
    chapterId: {
        type: String,

    },
    title: {
        type: String,

    },
    content: {
        type: String,

    },
    comments: { type: Array, schema: [commentSchema] },
    video: {
        type: String,

    },
    createdAt: { type: Date, default: Date.now }
})

const sectionSchema = new Schema({
    sectionId: {
        type: String,

    },
    sectionTitle: {
        type: String,

    },
    description: {
        type: String,

    },
    chapters: { type: Set, schema: [chapterSchema] },
    createdAt: { type: Date, default: Date.now }
})

const courseRatings = new Schema({
    ratingId: { type: Number, },
    userId: { type: String, },
    rating: { type: Number, },
    createdAt: { type: Date, default: Date.now }
})

const courseSchema = new Schema({
    courseTitle: { type: String, },
    courseDescription: { type: String, },
    coursePrice: { type: Number, },
    isPublished: { type: Boolean, },
    discount: { type: Number, },
    courseContent: { type: Set, schema: [chapterSchema] },
    educator: { type: String, },
    enrolledStudents: { type: Set, schema: [String] },
    courseRatings: { type: Set, schema: [courseRatings] },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    courseThumbnail: { type: String, },
})


const Course = dynamoose.model('Course', courseSchema);
const CourseRating = dynamoose.model('CourseRatings', courseRatings);
const Section = dynamoose.model('SectionSchema', sectionSchema);
const Chapter = dynamoose.model('ChapterSchema', chapterSchema);

module.exports = { Course, CourseRating, Section, Chapter }