const { db } = require('../models/tanks');
const mytanks = require('../models/tanks');

const resolvers = {
    Query: {
        hello: () => {
            return `Hello World`;
        },
        getAllTanks: async () => {
            const result = await mytanks.find({});
            return result;
        },
        getTank: async (_, args) => {
            const result = await mytanks.findById(args.id);
            return result;
        },
        getTanksByCountry: async (_, args) => {
            const result = await mytanks.find({ country: args.countryName });
            console.log(args.countryName)
            return {
                countryName: args.countryName,
                tanks: result
            }
        }
    }
}
module.exports = resolvers;

// {_id, _countryId: '1',country: '', name: '', fullname: '', servedYear: '', type: '' }

// db.mytanks.insertMany([
//     { _countryId: 0, country }
// ])