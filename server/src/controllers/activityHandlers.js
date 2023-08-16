const { Activity } = require('../db.js')

const postActivity = async (req, res) => {
    try {
        const { name, difficulty, duration, season, idCountries } = req.body //se extrae la data que recibe body y se guarda en sus respectivas variables
        if (!name || !difficulty || !season || !idCountries) return res.status(400).send("Faltan Datos") //si alguna de esas variables es null, arroja error
        const activity = await Activity.create({
            name, difficulty, duration, season, idCountries      // se utiliza el metodo create (sequelize) del modelo Activity, con las variables anteriores
        })
        await activity.addCountries(idCountries)  // se agregan los países a la tabla intermedia
        return res.status(200).json(activity)
    } catch (error) {
        return res.status(500).json(error.message)    
    }
}

const getActivities = async (req, res) =>{
    try {
        const activities = await Activity.findAll()  // se ejecuta el método findAll (sequelize) del modelo Activity y se guarda en la variable activities
        res.status(200).json(activities)  // responde un json con los datos almacenados en dicha variable
    } catch (error) {
        return res.status(500).json(error.message)   
    }
    
}

module.exports = {
    postActivity,
    getActivities
}