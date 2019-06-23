const express = require('express'),
      app = express(),
      bcrypt = require('bcrypt'),
      port = 3001 || process.env;

const users = [];

// accept JSON
app.use(express.json())

// route
app.get("/users", (req, res) => {
    res.json(users);
})

app.post("/users", async (req, res) => {
    let { name, password } = req.body;    
    if(!name || !password) res.status(400).send();
    let hashedPasswd = await bcrypt.hash(password, 10);
    let user = { name: name, password: hashedPasswd }
    users.push(user);
    res.status(200).send({"message": `${name} account created`});
})

app.post("/users/login", async (req, res) => {
    let { name, password } = req.body;
    let user = users.find(usr => usr.name === name);
    if(user == null) res.status(500).send(err);
    let isValid = await bcrypt.compare(password, user.password)
    if(isValid)
        res.status(200).send({"message": "Success!"});
    else
        res.status(400).send({"message": "Username / password is not matching"});
})

app.listen(port, () => {
    console.info(`Server started on: http://localhost:${port}`);
});