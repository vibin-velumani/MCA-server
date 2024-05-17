const mongoose = require('mongoose');

// Replace 'your-database-name' with your actual database name
const dbURI = 'mongodb+srv://vibin04v:vibin@cluster0.nao0uqd.mongodb.net/?retryWrites=true&w=majority';

// Create a function to connect to the database
const connectToDatabase = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB: ', error);
  }
};

module.exports = connectToDatabase;
