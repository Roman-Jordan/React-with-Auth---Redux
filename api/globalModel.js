const db = require('../data/db-config')
module.exports={
    findAll,
    findAllById,
    remove,
    add
}


function findAll(table){
    return db(table)
}

function findAllById(table,id){
    return db(table)
    .where({id})  
}

function remove(id) {
    return db(table)
    .where({id})
    .delete()
}

function add(table,obj){
    return db(table)
    .insert(obj)
}