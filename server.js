const express = require('express'); 
const app = express(); 
const port = 3500; 

app.use('/', express.static('./build')); 
app.listen(port, () => console.log(`Example app listening on port ${port}!`)); 