
const { query } = require('express');
const mongoose = require('mongoose');
// const { request } = require('../app');
const Student = require('../models/studentModel');

// save student to DB
exports.addStudent = (req, res) => {
  console.log(req.body);
  Student.create(req.body).then(
    (value) => {
			res.status(200).send({
				status: 'success',
				data: value
			});
		}
  ).catch(
		(value) => {
			res.status(401).send({
				status: 'failed',
				message: value.message
			})
		}
	);
	
}


  
// update student details
exports.updateStudent = (req, res) => {
	const rollNumber = req.params.rollNumber;
	Student.findOneAndUpdate({rollNo: rollNumber}, req.body, {new: true})
		.then(
			(value) => {
				res.status(200).send({
					status: "success",
					data: value
				})
			}
		)
		.catch((value) => {
			res.status(401).send({
				status: 'failed',
				message: value.message
			})
		});
}

	
// get all student
exports.getAllStudent = (req, res) => {
	Student.find().then(
		(value) => {
			res.status(200).send({
				status: "success",
				data: value
			})
		}).catch(
		(value) => {
			res.status(401).send({
				status: 'failed',
				message: value.message
			})
		});
}

// delete a student
exports.deleteStudent = (req, res) => {
	const rollNumber = req.params.rollNumber;
	Student.findOneAndDelete({rollNo: rollNumber})
		.then(
			(value) => {
				res.status(200).send({
					status: "success"
				})
			}
		)
		.catch((value) => {
			res.status(401).send({
				status: 'failed',
				message: value.message
			})
		});
}

// sort function
// sortingQuery(query, res) {
// 	const sortParams = res.params.sort;
// 	return query.sort(sortParam);
// }