const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	firstname: {
		type: String,
		default: "",
	},
	lastname: {
		type: String,
		default: "",
  },
  facebookId: String,
	// username and password will be taking care by passport
	admin: {
		type: Boolean,
		default: false,
	},
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
