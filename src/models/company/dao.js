const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    name: {
        type: String,
    },
    address: {
        type: String,
    },
    logo: {
        type: String,
    },
    site: {
        type: String,     
    },
    phone: {
        type: String
    }
});

module.exports = mongoose.model('Company', CompanySchema);