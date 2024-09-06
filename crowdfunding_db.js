const mysql = require('mysql2');

// connection to the database
const connection = mysql.createConnection({
  host: 'localhost',    
  user: 'root',         
  password: '123@com', 
  database: 'crowdfunding_db'    
});

// error
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database!');
});