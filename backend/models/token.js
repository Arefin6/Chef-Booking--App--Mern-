import  mongoose  from 'mongoose'

const tokenSchema = mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "Chef",
		unique: true,
	},
	token: { type: String, required: true },
	createdAt: { type: Date, default: Date.now, expires: 3600 },
});


const token  = mongoose.model('token',tokenSchema)

export default token;