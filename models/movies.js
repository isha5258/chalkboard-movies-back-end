import mongoose from 'mongoose'

const movieSchema = new mongoose.Schema({
  title: String,
  poster_path: String,
  overview: String,
  release_date: String,
}, {
  timestamps: true
})

const Movie = mongoose.model('Movie', movieSchema)

export {
  Movie
}