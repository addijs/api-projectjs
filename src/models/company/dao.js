const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    description: {
        type: String,
    }
});

module.exports = mongoose.model('Company', CompanySchema);