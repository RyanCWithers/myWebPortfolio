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
    dateStarted: {
        type: Date,
        default: '2000-01-01'
    },
    dateFinished: {
        type: Date,
        default: '2000-01-01'
    }
}, {timestamps: true})