const express = require('express')
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, './csx/static/')));

app.listen(3000, () => console.log('Express server listening on 3000'))