const express = require('express');
const router = express.Router();

const operationsCtrl = require('../controllers/operationsController');

router.get('/',operationsCtrl.getAllOperations);
router.post('/', operationsCtrl.createOperation);
router.get('/:id', operationsCtrl.getOneOperation);
router.patch('/:id', operationsCtrl.modifyOperation);
router.delete('/:id', operationsCtrl.deleteOperation);

module.exports = router;