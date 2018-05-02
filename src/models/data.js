const uuid = require('uuid/v4')
const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'data.json')
const blogPosts = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

class Post {
  constructor({title, pictureURL, text}){
    this.title = title
    this.id = uuid()
    this.pictureURL = pictureURL
    this.text = text
  }
}

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

const getAll = () => {
  return blogPosts
}

const createPost = (body) => {
  const errors = []
    let response
     if (!(body.title)) errors.push('Title is required (title)')
     if (!(body.pictureURL)) errors.push('url required (pictureURL)')
     if (!(body.text)) errors.push('text is required (text)')
    response = { errors }
    if (body.title && body.pictureURL && body.text) {
      const newPost = new Post({title: body.title, pictureURL: body.pictureURL, text: body.text})
      blogPosts.push(newPost)
      response = newPost
    }
  fs.writeFileSync(filePath,JSON.stringify(blogPosts))
  return response
}

const deletePost = (id) => {
  const removed = data.splice(data.indexOf(blogPosts.find(ele => ele.id === id)),1)
  fs.writeFileSync(filePath,JSON.stringify(blogPosts))
  return removed
}


module.exports = { getAll, createPost, deletePost }
