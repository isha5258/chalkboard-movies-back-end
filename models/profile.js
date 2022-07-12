import mongoose, { Schema } from 'mongoose'

const profileSchema = new mongoose.Schema({
  email: {type: String, required: true, lowercase: true, unique: true},
  name: String,
  photo: String,
  Movie: {type: Schema.Types.ObjectId, ref: 'Movie'}
},{
    timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
