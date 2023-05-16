const mongoose = require("mongoose");

const StorySchema = new mongoose.Schema({
  content: {
    type: String,
  },
  hebrewContent: {
    type: String,
  },
  art: {
    type: String,
  },
  ageGroup: {
    type: String,
  },
  language: {
    type: String,
  },
  audioFIleName: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// StorySchema.pre("save", function (next) {
//   var story = this;
//   Story.find({}, function (err, stories) {
//     if (err) throw err;
//     story.sno = stories.length + 1;
//     next();
//   });
// });

module.exports = mongoose.model("Story", StorySchema);