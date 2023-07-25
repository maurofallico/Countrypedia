const axios = require("axios");
const server = require("./src/server");
const { conn, Country } = require('./src/db.js');
const PORT = 3001;

const getCountries = async () => {
  const response = await axios.get("http://localhost:5000/countries")
  const data = response.data
  const countries = data.map(country => {
    return {
      code: country.cca3.toLowerCase(),
      name: country.name.common,
      flag: country.flags.png,
      continent: country.continents[0],
      capital: country.capital ? country.capital[0] : '-',
      subregion: country.subregion,
      area: country.area,
      population: country.population,
      activities: []
    }
  })
  countries.sort(((a, b) => a.name.localeCompare(b.name)))
  await Promise.all(countries.map(country => Country.create(country)));
}


conn.sync({ force: true }).then(() => {
server.listen(PORT, () => {
  getCountries()
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
