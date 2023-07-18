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

const getCountryById = async (req, res) => {
    const { id: cioc } = req.params
    try {
        const response = await axios.get(`${URL}`)
        const found = response.data.find(country => country.cioc === cioc)
        const country = {
            name: found.name.common,
            capital: found.capital[0],
            continent: found.continents[0],
            languages: found.languages,
            population: found.population,
            flag: found.flags.png
        }
    res.status(200).json(country)
    } catch (error) {
        res.status(500).json({ error: 'No se encuentran países con ese ID' });  
    } 
}

module.exports = {
    getCountryById,
    getAllCountries
}