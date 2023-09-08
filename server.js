const http = require('http');
const https = require('https');
const express = require('express');
const mysql = require('mysql');
const dotenv = require("dotenv").config();
let fs = require("fs");

var server = http.createServer(app);
var app = express();

const port = process.env.PORT || 3000;

// Create a MySQL database connection
const db = mysql.createConnection({
  host: process.env.DSY_ADMIN_DB_HOST,      // Replace with your MySQL host
  user: process.env.DSY_ADMIN_DB_USERNAME,  // Replace with your MySQL username
  password: process.env.DSY_ADMIN_DB_PASSWORD, // Replace with your MySQL password
  database: process.env.DSY_ADMIN_DB_NAME  // Replace with your MySQL database name
});

console.log("DB ->",db);
console.log("port ->",port);


db.connect(err => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL database');
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });