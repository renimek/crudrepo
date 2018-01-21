const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: String,
	str: Number,
	int: Number,
	agi: Number,
	type: String
});

module.exports = mongoose.model('Boots', userSchema );