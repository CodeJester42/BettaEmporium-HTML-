const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://mrnealfernandez:GURyHIrxPkL7c2ko@cluster0.lhjb6bt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = client;