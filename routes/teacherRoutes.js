const express = require("express");

const router = express.Router();

const {
  createTeacher,
  getTeachers,
  updateTeacher,
  deleteTeacher,
} = require("../controllers/teacherController");

router.post("/", createTeacher);

router.get("/", getTeachers);

router.put("/:id", updateTeacher);

router.delete("/:id", deleteTeacher);

module.exports = router;