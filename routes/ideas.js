// get('/api/v1/ideas) - get all ideas from db
// get('/api/v1/ideas/:id) - get the specific idea with id from db
// post('/api/v1/idea) - post a new idea
// patch('/api/v1/idea/:id) - edit specific idea
// delete('/api/v1/idea/:id) - delete specific idea

const express = require("express");
const router = express.Router();

const {
  getAllIdeas,
  createIdea,
  getSingleIDea,
  updateIdea,
  deleteIdea,
} = require("../controllers/ideas");

router.get("/", getAllIdeas);
router.post("/", createIdea);
router.get("/:id", getSingleIDea);
router.patch("/:id", updateIdea);
router.delete("/:id", deleteIdea);

module.exports = router;
