const db = require('../data/db-config');
// console.log(db('schemes').select('*'));

function find(){
    return db('schemes').select('*')
}

function findById(id){
    return db('schemes').select('*').where({id: id})
}

function findSteps(id){
    return db('steps').select('*').where({scheme_Id: id})
}

function add(scheme){
   return db('schemes').insert(scheme)
}

function update(changes, id){
     return db('schemes').select('*').where({id: id}).update({...changes})
}

function remove(id){
    return db('schemes').select('*').where({id: id}).del()

}

function addStep(step, scheme_Id){
    return db('steps').insert({...step, scheme_Id: scheme_Id})
}

module.exports = {
    find, findById, findSteps, add, update, remove, addStep
}