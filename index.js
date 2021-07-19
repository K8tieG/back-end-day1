const express = require('express');
//Cors is a package that allows our client and server to communicate with each other without the need for advanced configuration.
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const myFriends = ['Lesley', 'Paul', 'Kelsey', 'Trent']

// //Create a get request for the endpoint ‘/api/users’ that sends an array of your friends to the front end
app.get('/api/users', function(req, res){
    res.status(200).send(myFriends)
});

// //Let’s add another endpoint and method that will tell us how the weather is today
app.get('/weather/:temperature', (req, res) => {
    const { temperature } = req.params;
    const phrase = `<h3>It was ${temperature} today</h3>`;
    res.status(200).send(phrase);
  });


//Set your express server to listen to requests on port 4000
app.listen(4000,function(){
    console.log('Server is running on 4000')
})
;