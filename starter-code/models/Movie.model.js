const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String
  },
  plot: {
    type: String
  }
  //  stars: {
  //    type: mongoose.SchemaTypes.ObjectId,
  //    ref: "Celebrity"
  //  }
})

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie 