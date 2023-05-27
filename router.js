const router = require("express").Router();
const {getStories, createStory, getStoryById, getStoryByObjectId  } = require("./controllers/Story")

router.get("/", (req, res) => {
  res.send("Growing Pains");
});

router.get("/stories", getStories)

router.get("/stories/story/:storyID", getStoryById )

router.get("/stories/object/:storyID", getStoryByObjectId )

router.post("/stories", createStory);



module.exports = router;
