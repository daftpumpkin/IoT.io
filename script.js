const express = require('express');
const path = require('path');
let app = express();
app.use('/public', express.static(path.join(__dirname, '/public')));
app.listen(3000, () => {
	console.log('server has started!');
});