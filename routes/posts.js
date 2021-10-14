const express = require('express');
const router = express.Router();
const time_complexity = require('../models/post')


//GETS BACK ALL THE POSTS
router.get('/all', async (req,res)=>{
    try{
        const posts = await time_complexity.find();
        res.json(posts);
    } catch (err){
        res.json({message:err});
    }
})


//SUBMITS A POST
router.post('/', async (req,res)=>{
   const post = new time_complexity({
       title: req.body.title,
       avg_time: req.body.avg_time,
       best_time: req.body.best_time
   });
   try {
        const savedPost = await post.save()
        res.json(savedPost)
   } catch (err){
        res.json({message: err});
   }
    
})

//GETS A SPECIFIC POST
router.get('/', async (req,res)=>{
    try{
        const posts = await time_complexity.aggregate([{ $sample: { size: 1 } }])
        res.json(posts);
    } catch (err){
        res.json({message:err});
    }
})

//DELETE A POST
router.delete('/:postTitle', async (req,res)=>{
    try {
        const removePost = await time_complexity.remove({ title: req.params.postTitle })
        res.json(removePost)
    } catch (err) {
        res.json({message: err})
    }
    
})

//UPDATE A POST
router.patch('/:postTitle', async(req,res)=>{
    try{
        const updatePost = await time_complexity.updateOne(
            {title: req.params.postTitle},
            {$set:{title: req.body.title}}
            )
        res.json(updatePost)
    } catch(err){
        res.json({message: err})
    }
})

module.exports = router;