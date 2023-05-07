const model = require("../models/ideas");

const getAllIdeas = async (req, res) => {
  try {
    const allIdeas = await model.find();
    res.status(200).json(allIdeas);
  } catch (error) {
    res.status(500).json(erro);
  }
};

const createIdea = async (req, res) => {
  try {
    const createIdeas = await model.create(req.body);
    res.status(200).json(createIdeas);
  } catch (error) {
    res.status(500).json(error);
  }
};
const getSingleIDea = async (req, res) => {
  try {
    const { id } = req.params;
    const anIdea = await model.findOne({ _id: id });
    res.status(200).json(anIdea);
  } catch (error) {
    res.status(404).json(error);
  }
};

const updateIdea = async (req, res) => {
  try {
    const { id } = req.params;
    const ideaIpdate = await model.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!ideaIpdate) {
      res.status(404).json({ msg: `There is no Idea with ID: ${id}` });
    }

    res.status(200).json(ideaIpdate);
  } catch (error) {}
};
const deleteIdea = async (req, res) => {
  try {
    const { id } = req.params;
    const ideaDelete = await model.findByIdAndDelete({ _id: id });
    if (!ideaDelete) {
      res.status(404).json({ msg: `There is no Idea with ID: ${id}` });
    }

    res.status(200).json(ideaDelete);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = {
  getAllIdeas,
  createIdea,
  getSingleIDea,
  updateIdea,
  deleteIdea,
};
