


const getAllIdeas = (req, res) => {
  res.send("Ideas");
};

const createIdea = (req,res) =>{
    res.send('Create Idea')
}
const getSingleIDea = (req, res) => {
  res.send("Single Idea");
};

const updateIdea = (req, res) => {
  res.send("Updating Idea");
};
const deleteIdea = (req, res) => {
  res.send("Deleting Idea");
};

module.exports = { getAllIdeas,createIdea,getSingleIDea,updateIdea,deleteIdea };
