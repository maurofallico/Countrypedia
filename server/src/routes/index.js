const { Router } = require("express");
const { getCountryByCode, getAllCountries } = require('../controllers/countryHandlers.js')
const { postActivity, getActivities } = require('../controllers/activityHandlers.js')

const router = Router();

router.get("/countries/:code", getCountryByCode)
router.get("/countries/", getAllCountries)

router.get("/activity", getActivities)
router.post("/activity", postActivity)

module.exports = router;
