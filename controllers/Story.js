const Story = require("../Model/story")

const getStories = async (req, res) => {
  try {
    const stories = await Story.find();
    res.status(200).send(stories);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "An error occurred while retrieving stories" });
  }
};

const getStoryById = async (req , res ) => {

    const currentStoryId = parseInt(req.params.storyID )
    console.log(currentStoryId)
    try{
      const query = Story.where({ storyId: currentStoryId});
      console.log(query)
      const currentStory = await query.findOne();
      res.status(200).send(currentStory)

    }catch(error){
        console.log(error)
        res.status(500).send({message:`An error occured while retreiving story #${currentStoryId}`})
    }
    
  
}

  const createStory = async (req, res) => {

    const story = await new Story({
      content: req.body.content,
      hebrewContent: req.body.hebrewContent,
      ageGroup: req.body.ageGroup,
      language:req.body.language,
      art: req.body.art,
    });
  
    try {
      const result = await story.save();
      //const newStory = await Story.findById(result._id).select('content ageGroup storyId');
      const query = Story.where({ _id: result._id});
      const newStory = await query.findOne();

      res.status(200).send(newStory);
    } catch (error) {
      console.log("error with create new story");
      console.log({error})
      res.status(500).send(error);
    }
  };

  const getStoryByObjectId = async (req , res)=> {
   
    const currentStoryId = req.params.storyID 
    console.log(currentStoryId)
    try{
      
      const newStory = await Story.findById(currentStoryId);
      console.log('new Story: ', newStory)
      res.status(200).send(newStory);
    }catch {
      console.log("error with get object id");
      console.log({error})
      res.status(500).send(error);
    }
    

  }
  
  module.exports = {
    getStories,
    createStory,
    getStoryById,
    getStoryByObjectId
  };
  