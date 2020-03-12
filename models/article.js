
const database=require('../db/database');

module.exports=class Article{
    constructor(title,description){
        this.title=title;
        this.description=description;
    }

saveArticle(){
        return database.execute('INSERT INTO blogs (title,description) VALUES (? , ?)',[this.title,this.description]);
    }

    static deleteArticle(){

    }

    static editArticle(){

    }
}