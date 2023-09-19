const db = require('../../data/db-config')

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
}

function get() {
  // select * from posts;
  return db('posts')
}

function getById(id) {
  // return db('posts').where({ id: id, foo: 'bar' }).first()
  // WITHOUT .first() WE ALWAYS GET AN ARRAY WHICH COULD BE []
  return db('posts').where('id', id).first()
}

async function create({ title, contents }) { // specified in the readme
  const [id] = await db('posts').insert({ title, contents }) // [67] the id of the new rec
  const newPost = await getById(id)
  return newPost
}

function update(id, { title, contents }) {
  return db('posts').where('id', id).update({ title, contents })
    .then(() => {
      return getById(id)
    })
}

async function remove(id) { // README
  // what does it return?
  // what to do to give back the deleted thing???
  return db('posts').where('id', id).del()
}
