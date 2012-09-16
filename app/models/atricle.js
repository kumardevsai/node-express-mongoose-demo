// Article schema

var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var ArticleSchema = new Schema({
    title: {type : String, default : '', trim : true}
  , body: {type : String, default : '', trim : true}
  , user: {type : Schema.ObjectId, ref : 'User'}
  , comments: [{type : Schema.ObjectId, ref : 'Comment'}]
  , tags: []
  , categories: []
  , createdAt  : {type : Date, default : Date.now}
})

ArticleSchema.path('title').validate(function (title) {
  return title.length > 0
}, 'Article title cannot be blank')

ArticleSchema.path('body').validate(function (body) {
  return body.length > 0
}, 'Article body cannot be blank')

mongoose.model('Article', ArticleSchema)
