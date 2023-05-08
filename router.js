const router = require("express").Router();
const {getStories, createStory, getStoryById } = require("./api/controllers/Story")

router.get("/", (req, res) => {
  res.send("Growing Pains");
});

router.get("/stories", getStories)

router.get("/stories/story/:storyID", getStoryById )

router.post("/stories", createStory);



module.exports = router;
