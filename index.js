const express = require('express');
const app = express();
app.listen(3005, () => console.log('listening at PORT 3005'));
app.use(express.static('/'));
