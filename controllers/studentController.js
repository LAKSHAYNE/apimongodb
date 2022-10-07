const students = require("../models/studentSchema");

exports.insert = async (req, res) => {
  try {
    //console.log(req.body);
    const student = new students({
      name: req.body.name,
      class: req.body.class,
      section: req.body.section,
      feePaid: req.body.feePaid,
      attendencePer: req.body.attendencePer,
      roolNo: req.body.rollno,
    });
    const pod = await student.save();
    return res.status(200).json("student inserted");
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server Error", err: err.message });
  }
};

exports.updatestu = async (req, res) => {
  try {
    const student = await students.find({ rollno: req.query.rollno });
    if (!student) {
      return res.status(404).json({
        message: "No student with that ID",
      });
    } else {
      await students.findOneAndUpdate(
        { rollno: req.query.rollno },
        { $set: req.body }
      );
      res.status(200).json({
        message: "Your student details has been updated",
      });
    }
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      message: "Server Error",
    });
  }
};

exports.deletestu = async (req, res) => {
  //console.log(req.query.rollno);
  students
    .deleteOne({ roolNo: req.query.rollno })
    .then(function () {
      return res.status(200).json({ massage: "student deleted" }); // Success
    })
    .catch(function (error) {
      console.log(error); // Failure
    });
};
