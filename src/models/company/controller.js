const Comp = require('./dao');

module.exports = {
    // async createComp(req, res) {
    //     const company = await Comp.create(req.body);
    //     return res.json(company);
    //     const json = req.body;
    //     for(let x = 1; x <= 8; x++){
    //         await Comp.create(json[x]);
    //     }
    //     return res.send('Success');
    // },

    async getAll(req,res) {
        const data = await Comp.find();
        return res.json(data);
    }
}