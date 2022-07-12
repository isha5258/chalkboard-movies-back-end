import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
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
