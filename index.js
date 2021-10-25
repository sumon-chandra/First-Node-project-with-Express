const express = require("express");
const cors = require('cors');
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello I am learning node and express")
});

const users = [
    {id: 1, name: "Topu", job: "employer", age: 24},
    {id: 2, name: "Rohim", job: "crickter", age: 23},
    {id: 3, name: "Rotom", job: "student", age: 23},
    {id: 4, name: "Halim", job: "teacher", age: 30},
    {id: 5, name: "Kaqlui", job: "awerf", age: 44},
    {id: 6, name: "rgdsafg", job: "vbrsfg", age: 22},
    {id: 7, name: "dfgvdf", job: "asdfg", age: 445},
    {id: 8, name: "asfgsdfg", job: "studghndent", age: 23},
    {id: 9, name: "Sumfghon", job: "stvbggnudent", age: 34},
    {id: 10, name: "fgh5f", job: "ntg", age: 43},
    {id: 11, name: "Sumon", job: "student", age: 23},
    
]

app.get('/users',(req, res) => {

    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else{
        res.send(users)
    }
    
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length
    res.send(JSON.stringify(newUser))
})

app.listen(port, () => {
    console.log("Port listening", port);
})