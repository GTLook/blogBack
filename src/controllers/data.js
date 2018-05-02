const dataModel = require('../models/data')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

const getAll = (request, response, next) => {
  const data = dataModel.getAll()
  response.status(200).json({ data })
}

const createPost = (request, response, next) => {
  const data = dataModel.createPost(request.body)
  response.status(201).json({ data })
}

const deletePost = (request, response, next) => {
  const id = request.params.id
  const data = model.deletePost(id)
  response.status(200).json({ data })
}

module.exports = { getAll, createPost, deletePost }
