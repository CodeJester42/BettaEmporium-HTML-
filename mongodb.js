const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb+srv://mrnealfernandez:eVi6kqf58uzKrnYS@cluster0.vtkwqsa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the MongoDB cluster
module.exports = client;