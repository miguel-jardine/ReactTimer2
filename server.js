var express = require('express');


var app = express();
app
    .use(express.static('public'))

    .listen(3000, () => {
        console.log("Express server is up on port 3000");
    });

