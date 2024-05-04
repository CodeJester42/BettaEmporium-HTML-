const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb+srv://mrnealfernandez:eVi6kqf58uzKrnYS@cluster0.vtkwqsa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = client;