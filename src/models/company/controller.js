const Comp = require('./dao');

module.exports = {
    async createComp(req, res) {
        const company = await Comp.create(req.body);
        return res.json(company);
    },

    async getAll(req,res) {
        const data = await Comp.find();
        return res.json(data);
    }
}