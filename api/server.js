const primaryRouter = require('express').Router()
const locationsRouter = require('./public/locations/locations')
const users = require('./public/users/users')
const errorRouter = require('./errors/errors')


primaryRouter.use('/locations',locationsRouter)
primaryRouter.use('/users',users)

//Handle any errors coming into API
primaryRouter.use('*',errorRouter)

module.exports = primaryRouter

