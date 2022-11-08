const router = require('express').Router()
const {addReaction,
        deleteReaction                
} = require ('../controllers')

router.route('./').post(addReaction).delete(deleteReaction)

module.exports = router