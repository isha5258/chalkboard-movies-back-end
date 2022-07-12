import { Profile } from '../models/profile.js'


function index(req, res) {
  Profile.find({})
  .then(profiles => res.json(profiles))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function addMovie(req, res) {
  Profile.findById(req.user.profile)
  .then(profile => {
    console.log(req.body)
    profile.movie.push(req.body)
    profile.save()
    .then(updateProfile => {
      res.json(updateProfile)
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

export { 
  index,
  addMovie, 
}
