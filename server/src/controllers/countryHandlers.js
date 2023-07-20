const { Country } = require('../db.js')
const { Op } = require('sequelize');

const URL = "http://localhost:5000/countries"

const getAllCountries = async (req, res) => {
    const { name } = req.query
    console.log(name)
    try {
        if (name){
            const countries = await Country.findAll({where: { name: { [Op.iLike]: `%${name}%`} }})
            res.status(200).json(countries)
        }
        else{
            const countries = await Country.findAll()
            res.status(200).json(countries)
        }
    } catch (error) {
        res.status(500).json({ error: 'No se pudo acceder a los países' });  
    }
}

const getCountryByCode = async (req, res) => {
    const { code } = req.params
    try {
        const found = await Country.findOne({where: { code: code.toUpperCase()} })
        res.status(200).json(found)
    } catch (error) {
        res.status(500).json({ error: 'No se encontraron países con ese CODE' });  
    } 
}

module.exports = {
    getCountryByCode,
    getAllCountries
}