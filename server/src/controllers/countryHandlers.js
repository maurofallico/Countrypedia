const { Country, Activity } = require('../db.js')
const { Op } = require('sequelize');

const URL = "http://localhost:5000/countries"

const getAllCountries = async (req, res) => {
    const { name, continent } = req.query //se guarda en la variable {name y continent} lo que llegue por query (si no llega nada, será 'undefined')
    try {
        if (continent){ //se evalúa si la variable {continent} tiene algo, o si es 'undefined'
            const countries = await Country.findAll({where: { continent: { [Op.iLike]: `${continent}%`} }})
            res.status(200).json(countries) // si tiene algo, entonces va a traer los países que coincidan con el query
        }
        else if (name){
            const countries = await Country.findAll({where: { name: { [Op.iLike]: `${name}%`} }})
            res.status(200).json(countries) // si tiene algo, entonces va a traer los países que coincidan con el query
        }
        else{
            const countries = await Country.findAll()
            res.status(200).json(countries) // si no tiene nada, entonces va a traer todos los países
        }
    } catch (error) {
        res.status(500).json({ error: 'No se pudo acceder a los países' });  
    }
}

const getCountryByCode = async (req, res) => {
    const { code } = req.params //se guarda en la variable {code} lo que llegue por params
    try {
        const found = await Country.findOne({
            where: { code: code.toLowerCase() },
            include: { 
                model: Activity, //se incluyen los datos de la actividad de dicho país
                attributes: ['name', 'difficulty', 'duration', 'season'],
                through: { attributes: [] } // se excluyen los atributos de la tabla de unión (CountryActivity)
            },
            attributes: { exclude: ['CountryActivity'] } // se excluye el atributo "CountryActivity" del resultado
        });
        res.status(200).json(found) //se intentará encontrar un país cuyo código coincida con la variable {code}
    } catch (error) {
        res.status(500).json({ error: 'No se encontraron países con ese código' });  
    } 
}

module.exports = {
    getCountryByCode,
    getAllCountries
}