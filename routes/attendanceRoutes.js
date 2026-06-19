const express = require("express");

const router = express.Router();

const {
  markAttendance,
  getAttendance,
  updateAttendance,
  deleteAttendance,
} = require("../controllers/attendanceController");

router.post("/", markAttendance);

router.get("/", getAttendance);

router.put("/:id", updateAttendance);

router.delete("/:id", deleteAttendance);

module.exports = router;