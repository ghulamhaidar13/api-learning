const app = require('./app');
require('dotenv').config();

const port = process.env.PORT || 3000;
// listen to port
app.listen(port, ()=> { 
    console.log(`Listen to ${port} ....`);
})