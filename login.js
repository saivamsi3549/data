const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mssql');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const connectionString = "server=localhost;Database=login;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server}";
const query = " Select * from UserRegistration";

sql.query(connectionString, query, (err, rows) => {
  if (err) {
    res.status(err['code']).send(err);
    console.log(err);
  
  } 
  else 
  {
    console.log("connected")
  }
});
 



app.get('/', (req, res) => {
  res.send(`

    <!DOCTYPE html>
    <html>
    <head>
      
    <title > Welcome To Login Form  </title>
    <style>
    @import url('https://fonts.googleapis.com/css?family=Montserrat|Quicksand');

*{
    font-family: 'quicksand',Arial, Helvetica, sans-serif;
    box-sizing: border-box;
}

body{
    background:#fff;
}

.form-modal{
    position:relative;
    width:450px;
    height:auto;
    margin-top:4em;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow:0 3px 20px 0px rgba(0, 0, 0, 0.1)
}

.form-modal button{
    cursor: pointer;
    position: relative;
    text-transform: capitalize;
    font-size:1em;
    z-index: 2;
    outline: none;
    background:#fff;
    transition:0.2s;
}

.form-modal .btn{
    border-radius: 20px;
    border:none;
    font-weight: bold;
    font-size:1.2em;
    padding:0.8em 1em 0.8em 1em!important;
    transition:0.5s;
    border:1px solid #ebebeb;
    margin-bottom:0.5em;
    margin-top:0.5em;
}

.form-modal .login , .form-modal .signup{
    background:#57b846;
    color:#fff;
}

.form-modal .login:hover , .form-modal .signup:hover{
    background:#222;
}

.form-toggle{
    position: relative;
    width:100%;
    height:auto;
}

.form-toggle button{
    width:50%;
    float:left;
    padding:1.5em;
    margin-bottom:1.5em;
    border:none;
    transition: 0.2s;
    font-size:1.1em;
    font-weight: bold;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
}

.form-toggle button:nth-child(1){
    border-bottom-right-radius: 20px;
}

.form-toggle button:nth-child(2){
    border-bottom-left-radius: 20px;
}

#login-toggle{
    background:#57b846;
    color:#ffff;
}

.form-modal form{
    position: relative;
    width:90%;
    height:auto;
    left:50%;
    transform:translateX(-50%);  
}

#login-form , #signup-form{
    position:relative;
    width:100%;
    height:auto;
    padding-bottom:1em;
}

#signup-form{
    display: none;
}


#login-form button , #signup-form button{
    width:100%;
    margin-top:0.5em;
    padding:0.6em;
}

.form-modal input{
    position: relative;
    width:100%;
    font-size:1em;
    padding:1.2em 1.7em 1.2em 1.7em;
    margin-top:0.6em;
    margin-bottom:0.6em;
    border-radius: 20px;
    border:none;
    background:#ebebeb;
    outline:none;
    font-weight: bold;
    transition:0.4s;
}

.form-modal input:focus , .form-modal input:active{
    transform:scaleX(1.02);
}

.form-modal input::-webkit-input-placeholder{
    color:#222;
}


.form-modal p{
    font-size:16px;
    font-weight: bold;
}

.form-modal p a{
    color:#57b846;
    text-decoration: none;
    transition:0.2s;
}

.form-modal p a:hover{
    color:#222;
}


.form-modal i {
    position: absolute;
    left:10%;
    top:50%;
    transform:translateX(-10%) translateY(-50%); 
}

.fa-google{
    color:#dd4b39;
}

.fa-linkedin{
    color:#3b5998;
}

.fa-windows{
    color:#0072c6;
}

.-box-sd-effect:hover{
    box-shadow: 0 4px 8px hsla(210,2%,84%,.2);
}

@media only screen and (max-width:500px){
    .form-modal{
        width:100%;
    }
}

@media only screen and (max-width:400px){
    i{
        display: none!important;
    }
}
    </style>
    </head>
    <body>
      <form action="/login" method="post">
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" type="text/css" >
          <title>Sign In/Sign Up Page</title>
          <style>

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form-container {
  width: 500px;
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px #ccc;
  text-align: center;
}

form {
  margin-top: 30px;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button[type="submit"] {
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  background-color: #4CAF50;
  color: #fff;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #3E8E41;
}

          </style>
        </head>
        <body>
          <div class="form-container">
          <form action="/login" method="post">
              <h1>Sign In</h1>
              <input type="email" name="email" placeholder="Email" id="sign-in-email" required>
              <input type="password" name="password" placeholder="Password" id="sign-in-password" required>
              <button type="submit">Submit</button>
              
            </form>
            
          <form action="/signup" method="post">
              <h1>Sign Up</h1>
              <input type="email" name="email" placeholder="Email" id="sign-up-email" required>
              <input type="password" name="name" placeholder="username" id="sign-up-password" required>
              <input type="password" name="password" placeholder=" Password" id="password" required>
              <button type="submit">Submit</button>
              
            </form>
          </div>
        </body>
      </html>
  
  `);
});

app.post('/login', (req, res) => {
  const {  LoginID,UserID,LoginTimeDATETIME ,email, password } = req.body;
  connectionString.query(`
    SELECT * FROM UserLogin
    WHERE UserID = ?, email = ? AND password = ?
  `, [LoginID,UserID, LoginTimeDATETIME,email, password], (error, results) => {
    if (error) {
      return res.send(error.message);
    }
    if (results.length === 0) {
      return res.send('Email or password is incorrect');
    }
    res.redirect('/register');
  });
});

app.post('/signup', (req, res) => {
  const {UserID ,UserName,Email, password } = req.body;
  connectionString.query(`
    INSERT INTO UserRegistration (UserID ,UserName, Email, password)
    VALUES (?, ?, ?, ?)
  `, [UserID ,UserName, Email, password], (error, results) => {
    if (error) {
      return results.send(error.message);
    }
    res.send('User registered successfully!');
  });
});



app.get('/register', (req, res) => {
    res.send(`
    <Html>  
      <head>   
      <title>  
    Registration Page  
      </title>
      </head>
      <body   style="text-align: center;" bgcolor="Lightskyblue" >
      <form action="/register" method="post">
      <h1 style="background-color: rgb(190, 235, 169);" >  Form Details</h1>
      <label> <b>Full name :</b>  </label> 
        <input type="text" name="name" placeholder="Name" id="name" required><br><br>
        <label>   
     <b> Course : </b> 
      </label> 
        <input type="text" name="course" placeholder="course" id="course"  required><br><br>
        <b>Address </b> 
        <input type="text" name="address" cols="40" rows="5" placeholder="address" id="address"  required><br><br>
        <label> 
        <b> Phone : </b> 
         </label>  
        <input type="text" name="phone" placeholder="phone" id="phone"  required><br><br>
        <b> Email: </b>
        <input type="email" name="email" placeholder="Email" id="email"  required><br><br>
        <b>Password: </b> 
        <input type="password" name="password" placeholder="Password" id="password" required><br><br>
        <b> Retype-Password: </b> 
        <input type="password" name="repass" placeholder="repass" id="repass"  required><br><br>
        <input type="submit" value="Submit">
        <input type="submit" value="Reset" onclick="clearFunc()" class="btn" />
  
      </form>
      </body>
      <script>
      
      function clearFunc()
      {
          document.getElementById("name").value="";
          document.getElementById("course").value="";
      document.getElementById("address").value="";
          document.getElementById("phone").value="";
      document.getElementById("email").value="";
          document.getElementById("password").value="";
      document.getElementById("repass").value="";
      }	
      </script>
      </html>
    `);
  });
  
  app.post('/register', (req, res) => {
    const { name,course,address, phone, email, password,repass } = req.body;
    connection2.query(`
      INSERT INTO users (name,course,address,phone, email, password, repass)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `, [name,course,address,phone, email, password, repass], (error, results) => {
      if (error) {
        return res.send(error.message);
      }
       
      res.send('User registered successfully!');
      
    });
  });




app.listen(3000, () => {
  console.log('Server running on port 3000');
});
