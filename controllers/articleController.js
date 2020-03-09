
exports.getIndex= (req,res,next)=>{
    // res.send('I am Working with Great Honour');
    res.render('index',{
        pageTitle:'Technical Blogs'
    });
}