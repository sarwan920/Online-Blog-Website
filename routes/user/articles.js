const express=require('express');

const router=express.Router();

const articleController=require('../../controllers/articleController');

router.get('/',articleController.getIndex);

router.get('/articles',articleController.getArticles);

router.get('/contact',articleController.getContact);

module.exports=router;