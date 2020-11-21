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
        }
    }
}
module.exports = resolvers;