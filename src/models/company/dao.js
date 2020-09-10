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

CompanySchema.methods.toJSON = function() {
 const obj = this.toObject();
 delete obj._id;
 delete obj._v;
    
 return obj;
}

module.exports = mongoose.model('Company', CompanySchema);
