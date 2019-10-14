const primaryRouter = require('express').Router()
const locationsRouter = require('./public/locations/locationsRouter')


primaryRouter.use('/locations',locationsRouter)

module.exports = primaryRouter

