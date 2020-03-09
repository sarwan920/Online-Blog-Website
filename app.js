const express = require('express');
const path=require('path');
const app = express();

const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));

const mainRoute=require('./routes/user/article');
const errorRoute=require('./routes/error/404');


app.use(mainRoute);
// app.get('/', (req, res, next) => {
//     res.send("I am Working");
// });


app.use(errorRoute);
app.listen(3000, () => {
    console.log('I am Working at Port 3000');
});