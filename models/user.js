const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	// username: {
	// 	type: String,
	// 	required: true,
	// 	unique: true,
	// },
	// password: {
	// 	type: String,
	// 	required: true,
	// },
	// username and password will be taking care by passport
	admin: {
		type: Boolean,
		default: false,
	},
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
