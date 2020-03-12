
const Article=require('../models/article');

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

exports.getWriteForUs=(req,res,next)=>{
    res.render('add-article',{
        pageTitle:'Write for Us',
        saved:null
    });
}

exports.postWriteForUs=(req,res,next)=>{
    const title=req.body.title;
    const description=req.body.description;
    console.log(title);
    console.log(description);
    const article=new Article(title,description);
    article.saveArticle()
    .then(()=>{
        console.log("Saved Successfully");
        res.redirect('/write-for-us',{
            saved:'Article Saved Successfull'
        });
    })
    .catch((err)=>{
        console.log(err);
    })
    
}