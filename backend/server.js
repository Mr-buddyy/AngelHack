// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const port = process.env.PORT || 5000;

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// // Define a schema and model for your form data
// const formSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   location: String,
//   latitude: Number,
//   longitude: Number,
//   image: String,
// });

// const FormData = mongoose.model('FormData', formSchema);

// // Route to handle form submissions
// app.post('/submit', async (req, res) => {
//   try {
//     const formData = new FormData(req.body);
//     await formData.save();
//     res.status(200).send('Form data saved successfully');
//   } catch (error) {
//     res.status(500).send('Error saving form data');
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
