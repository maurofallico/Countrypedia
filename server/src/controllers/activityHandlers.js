const { Activity } = require('../db.js')

const postActivity = async (req, res) => {
    try {
        const { name, difficulty, duration, season, idCountries } = req.body
        if (!name || !difficulty || !season || !idCountries) return res.status(400).send("Faltan Datos")
        const [activity, created] = await Activity.findOrCreate({
            where: {name},
            defaults: {name, difficulty, duration, season, idCountries}
        })
        await activity.addCountries(idCountries)
        return res.status(200).json(activity)
    } catch (error) {
        return res.status(500).json(error.message)    
    }
}

const getActivities = async (req, res) =>{
    try {
        const activities = await Activity.findAll()
        res.status(200).json(activities)
    } catch (error) {
        return res.status(500).json(error.message)   
    }
    
}

module.exports = {
    postActivity,
    getActivities
}