const {User} = require('../models/portfolio.model');

module.exports = {
    createUser : (req, res) => {
        const {contactInfo, workExp, education, aspirations, profSum, languages} = req.body
        User.create({
            contactInfo,
            workExp,
            education,
            aspirations,
            profSum,
            languages
        })
            .then(resume => res.json(resume))
            .catch(err => res.json(err))
    }
}