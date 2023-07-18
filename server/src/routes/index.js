const { Router } = require("express");
const { getCountryById, getAllCountries } = require('../controllers/countryHandlers.js')

const router = Router();

router.get("/:id", getCountryById)
router.get("/", getAllCountries)



module.exports = router;
