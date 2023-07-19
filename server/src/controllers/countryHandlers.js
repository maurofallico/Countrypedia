const axios = require('axios')

const URL = "http://localhost:5000/countries"

const getAllCountries = async (req, res) => {
    try {
        const response = await axios.get(`${URL}`)
        const data = response.data
        const country = data.map(country => country.name.common)
        res.status(200).json(country)
    } catch (error) {
        res.status(500).json({ error: 'No se pudo acceder a los países' });  
    }
}

const getCountryByCode = async (req, res) => {
    const { cioc } = req.params
    try {
        const response = await axios.get(`${URL}`)
        const found = response.data.find(country => country.cioc === cioc.toUpperCase())
        const country = {
            code: found.cioc,
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