const express = require('express');
const app = express();

app.use(require('body-parser').json());
app.use(express.static(__dirname + '/app'));


app.listen(3000, () => console.log('Listening on port 3000'));
