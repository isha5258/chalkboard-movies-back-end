import mongoose from 'mongoose'

const Schema = mongoose.Schema


const movieSchema = new Schema({
  title: String,
  poster_path: String,
  overview: String,
  release_date: String,
}, {
  timestamps: true
})

const profileSchema = new Schema({
  email: {type: String, required: true, lowercase: true, unique: true},
  name: String,
  photo: String,
  movie: [movieSchema],
  //Need to look into why referenced schema is not working
  // {type: Schema.Types.ObjectId, ref: 'Movie'}
},{
    timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
