const express = require('express')
const cors =require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('wow, i m exited to learn Node and express with nodemon automatic restart')
})

const users = [
    {id:0,name:'shabana',email:'shabana@gmail.com',phone:'01700000000'},
    {id:1,name:'shabnoor',email:'shabnoor@gmail.com',phone:'01700000000'},
    {id:2,name:'kobori',email:'kobori@gmail.com',phone:'01700000000'},
    {id:3,name:'purnima',email:'purnima@gmail.com',phone:'01700000000'},
    {id:4,name:'suchorita',email:'suchorita@gmail.com',phone:'01700000000'},
    {id:5,name:'srabonti',email:'srabonti@gmail.com',phone:'01700000000'},
]

app.get('/users', (req, res) => {
    const search=(req.query.search);
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    }
    else {
        res.send(users); 
    }
    
})

// app. Method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post', req.body);
    res.send('inside post')
    res.json(newUser)
})


app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.get('/fruits', (req,res) => {
    res.send(['aam','jaam','kathal','sofeda','lichu'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yummy yummi tok marka fozli');
})

app.listen(port, () => {
    console.log( 'listening to port',port) 
});
