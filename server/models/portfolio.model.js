const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//  For the web portfolio, there are several pieces of information that
//need to be recorded: Contact info, education, work experience, aspirations,
//coding languages, interests, etc.

//Contact Information Schema 
const websiteSchema = new mongoose.Schema({
    websiteName: {
        type: String,
        default: ''
    },
    url: {
        type: String,
        default: ''
    }
});

const contactSchema = new mongoose.Schema({
    firstName: {
        type: String, 
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    websites : [websiteSchema]
}, {timestamps: true});

//Education Schema

const educationSchema = new mongoose.Schema({
    institution: {
        type: String,
        default: '',
        required: [true, 'Please enter the institution name.']
    },
    level: {
        type: String,
        default: '',
        required: [true, 'Please enter the highest level achieved.']
    },
    institutionState: {
        type: String,
        default: '',
        required: [true, 'Please enter the state.']
    },
    dateStarted: {
        type: String,
        default: ''
    },
    dateFinished: {
        type: String,
        default: ''
    }
}, {timestamps: true});

//Work Experience Schema

const workSchema = new mongoose.Schema({
    company: {
        type: String,
        default: '',
        required: [true, 'Please enter the company name.']
    },
    companyLocation: {
        type: String,
        default: '',
        required: [true, 'Please enter the company location.']
    },
    position: {
        type: String,
        default: ''
    },
    dateStarted: {
        type: String,
        default: ''
    },
    dateFinished: {
        type: String,
        default: ''
    },
    jobDescription: {
        type: String,
        default: ''
    }
}, {timestamps: true});

//User Schema
const languageSchema = new mongoose.Schema({
    language: {
        type: String,
        default: ''
    }
}, {timestamps: true});

const userSchema = new mongoose.Schema({
    contactInfo: {contactSchema},
    workExp: [workSchema],
    education: [educationSchema],
    aspirations:{
        type: String
    },
    profSum:{
        type: String
    },
    languages: [languageSchema]
}, {timestamps: true});


module.exports.User = mongoose.model('User', userSchema);