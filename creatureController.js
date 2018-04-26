const express = require('express')
const router = express.Router()
const { Creature } = require('../db/schema')

//Index Route
router.get('/', (req, res) => {
    Creature.find().then((creatures) => {
        res.jason(creatures)
    }).catch((error) => {
        console.log(error)
    })
})

//Show Route
router.get(':/id', async (req, res) => {
    try{
        const creatureId = req.params.id
        const creature = await Creature.findById(creatureId)
        res.json(creature)
    }catch(error) {
        console.log(error)
        res.json(error)
    }
})

//Create Route
router.post('/', async (req, res) => {
    try {
      const newCreature = req.body
      const savedCreature = await Creature.create(newCreature)
      res.json(savedCreature)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  })

  //Update Route
  router.put('/:id', async (req, res) => {
    try {
      const creatureId = req.params.id
      const updatedCreature = req.body
      const savedCreature = await Creature.findByIdAndUpdate(creatureId, updatedCreature)
      res.json(savedCreature)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  })

  //Delete Route

  router.delete('/:id', async (req, res) => {
    try {
      const creatureId = req.params.id
      await Creature.findByIdAndRemove(creatureId)
      res.json({
        msg: 'Successfully Deleted'
      })
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  })




