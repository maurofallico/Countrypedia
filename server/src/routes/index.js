const { Router } = require("express");
const { getCountryByCode, getAllCountries } = require('../controllers/countryHandlers.js')

const router = Router();

router.get("/countries/:cca3", getCountryByCode)
router.get("/countries/", getAllCountries)



module.exports = router;
