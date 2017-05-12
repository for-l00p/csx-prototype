const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, './csx-gitbook/csx-static')));

app.listen(3000);