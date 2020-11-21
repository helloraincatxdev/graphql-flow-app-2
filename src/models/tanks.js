const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    country: String,
});
const mytanks = mongoose.model('mytanks', schema);

module.exports = mytanks;