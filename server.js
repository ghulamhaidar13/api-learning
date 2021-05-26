const app = require('./app');

const port = process.env.PORT || 3000;
// listen to port
app.listen(port, ()=> { 
    console.log('Listen to port 3000....');
})