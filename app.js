const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const StudentController = require('./controllers/studentController');

const tourController = require('./controllers/addTourController');

mongoose.connect('mongodb+srv://ghulam:7Z9XL5H2izvoJyC3@cluster0.ektfh.mongodb.net/natures?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(
       () => { console.log('Connected to DB successfully'); }
    ).catch(
       () => { console.log('Connection to DB failed'); }
    )

// get function
// app.get('/', (req, res) => {
//     res.status(200);
//     res.json({"message": "Hello for server"});
// })
// crete router
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const router = express.Router();
app
    .route('/tour')
    .get(tourController.saveTour)
// app.get('/', saveTour);
// // post function with id as param
// app.get('/tours/:id', (req, res) => {
//     console.log(req.params);
//     res.status(200).send('Param data');
// })


app
  .route('/student')
  .get(StudentController.getAllStudent)
  .post(StudentController.addStudent)

app
  .route('/student/:rollNumber')
	.patch(StudentController.updateStudent)
	.delete(StudentController.deleteStudent)

module.exports = app;
// 7Z9XL5H2izvoJyC3