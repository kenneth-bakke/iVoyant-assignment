const controller = require('../controllers/index');
const router = require('express').Router();

router.get('/xml', controller.xmlAPI.getXML);
router.get('/json', controller.jsonAPI.getPeopleJSON);
router.get('/json/:id', controller.jsonAPI.getPersonJSON);

export = router;