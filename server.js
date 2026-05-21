const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8080;

// Parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve login page
app.get("/", (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Vulnerable Login</title>
            <style>
                body{
                    font-family: Arial;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    height:100vh;
                    background:#f2f2f2;
                }

                .login-box{
                    background:white;
                    padding:30px;
                    border-radius:10px;
                    box-shadow:0 0 10px rgba(0,0,0,0.2);
                }

                input{
                    width:100%;
                    padding:10px;
                    margin-top:10px;
                }

                button{
                    width:100%;
                    padding:10px;
                    margin-top:15px;
                    background:#007bff;
                    color:white;
                    border:none;
                    cursor:pointer;
                }
            </style>
        </head>

        <body>
            <div class="login-box">
                <h2>HTTP Login Page</h2>

                <form method="POST" action="/login">
                    <input type="text" name="username" placeholder="Username" required />
                    
                    <input type="password" name="password" placeholder="Password" required />
                    
                    <button type="submit">Login</button>
                </form>
            </div>
        </body>
        </html>
    `);
});

// Handle login
app.post("/login", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    console.log("\n=== Captured Credentials ===");
    console.log("Username:", username);
    console.log("Password:", password);

    res.send(`
        <h2>Login Successful</h2>
        <p>Welcome ${username}</p>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});