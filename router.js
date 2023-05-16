const router = require("express").Router();
const {getStories, createStory, getStoryById } = require("./controllers/Story")

router.get("/", (req, res) => {
  res.send("Growing Pains");
});

router.get("/", ()=> {
  return '<h1> Growing Pains Root </h1>'
})
router.get("/stories", getStories)

router.get("/stories/story/:storyID", getStoryById )

router.post("/stories", createStory);



module.exports = router;
