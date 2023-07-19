const axios = require('axios')
const { Country } = require('../db.js')

const URL = "http://localhost:5000/countries"

const getAllCountries = async (req, res) => {
    try {
        const countries = await Country.findAll()
        res.status(200).json(countries)
    } catch (error) {
        res.status(500).json({ error: 'No se pudo acceder a los países' });  
    }
}

const getCountryByCode = async (req, res) => {
    const { cca3 } = req.params
    try {
        const response = await axios.get(`${URL}`)
        const found = response.data.find(country => country.cca3 === cca3.toUpperCase())
        const country = {
            code: found.cca3,
            name: found.name.common,
            flag: found.flags.png,
            continent: found.continents[0],
            capital: found.capital[0],
            subregion: found.subregion,
            area: found.area,
            population: found.population
        }
    res.status(200).json(country)
    } catch (error) {
        res.status(500).json({ error: 'No se encuentraron países con ese ID' });  
    } 
}

module.exports = {
    getCountryByCode,
    getAllCountries
}