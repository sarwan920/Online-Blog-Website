
exports.getIndex= (req,res,next)=>{
    // res.send('I am Working with Great Honour');
    res.render('index',{
        pageTitle:'Technical Blogs'
    });
}

exports.getArticles=(req,res,next)=>{

    res.render('articles',{
        pageTitle:'Articles'
    });

}

exports.getContact=(req,res,next)=>{
    res.render('contact',{
        pageTitle:'Contact'
    });
}