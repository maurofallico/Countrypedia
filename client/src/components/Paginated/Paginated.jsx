import Cards from "../Cards/Cards.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import SideBar from "../SideBar/SideBar.jsx";
import styled from "./Paginated.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { sortCountries } from "../../redux/actions/index.js";

export default function Paginated({ searchCountry }) {
  const dispatch = useDispatch();

  const countries = useSelector((state) => state.countries);
  const activities = useSelector((state) => state.activities);

  const [continents, setContinents] = useState([]); // viene del componente SideBar
  const [activityName, setActivityName] = useState(); // viene del componente SideBar

  const [filteredCountries, setFilteredCountries] = useState([...countries]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentOrder, setCurrentOrder] = useState("");
  
  const [items, setItems] = useState([...filteredCountries]);
  const [totalPages, setTotalPages] = useState(1);

  function orderCountry(order) {
    setCurrentOrder(order);
    dispatch(sortCountries(order));
  }

  //se declaran variables para evaluar si los botones están activos o no
  let prevButton = false;
  let nextButton = false;


  //si se alcanza al límite máximo de paises (última página disponible) el botón Next se desactiva
  if (currentPage  >= filteredCountries.length / 10) {
    nextButton = false;
  } else {
    nextButton = true;
  }

  //si la página actual es la 1, entonces el botón Prev se desactiva
  if (currentPage === 1) {
    prevButton = false;
  } else {
    prevButton = true;
  }

  const nextHandler = () => {
    const total = filteredCountries.length;
    const firstIndex = currentPage * 10; //se guarda el primer índice de la página actual
    if (firstIndex === total) return; // si se llega al final de los países mostrados, retorna.
    setItems([...filteredCountries].splice(firstIndex, 10));
    // setea el valor de {items} con una copia de {filteredCountries} que corta desde el primer índice hasta 10 elementos
    // {items} serán los países que se verán en pantalla y se irá modificando en base a cual sea el valor de {firstIndex}
    setCurrentPage(currentPage + 1);
    // por último, se incrementa el valor de la página actual
  };

  const prevHandler = () => {
    const firstIndex = currentPage - 2 * 10; // se actualiza el valor de firstIndex para que coincida con el primer país de la página anterior
    if (currentPage === 1) return; 
    setItems([...filteredCountries].splice(firstIndex, 10)); // se aplica la misma lógica que en la función anterior
    setCurrentPage(currentPage - 1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    const selectedActivity = activities.find( 
      (act) => act.name === activityName
    );

    //filtrado por continent
    const filteredByContinent =
      continents.length > 0
        ? countries.filter((country) => continents.includes(country.continent))
        : countries; //si no hay continent, el valor será el del estado global

    //filtrado por activity
    const filteredByActivity = selectedActivity
      ? filteredByContinent.filter((filtered) =>
          selectedActivity.idCountries.includes(filtered.id)
        )
      : filteredByContinent; //si no hay activity, el valor será de lo que resulte el filtro de continent

    setFilteredCountries(filteredByActivity); // se actualiza el valor de filteredCountries (para el paginado)
    setTotalPages(Math.ceil(filteredByActivity.length / 10)); // se actualiza el valor de totalPages en relación al filtrado de activity
    setItems([...filteredByActivity].splice((currentPage - 1) * 10, 10)); // se actualiza items (paises mostrados) según la página actual
  }, [activityName, continents, countries, currentPage, currentOrder]);

  useEffect(() => {
    setCurrentPage(1)
  }, [totalPages]);

  return (
    <div>
      <SideBar
        filterContinents={setContinents}
        filterActivity={setActivityName}
      />
      <NavBar orderCountry={orderCountry} searchCountry={searchCountry} />

      <div className={styled.container}>
        {totalPages > 1 ? (
          <p className={styled.texto}>
            PAGE: {currentPage}/{totalPages}
          </p>
        ) : (
          <p className={styled.texto}>PAGE: {currentPage}</p>
        )}
      </div>
      <div className={styled.botones}>
        {prevButton === true ? (
          <button className={styled.button} onClick={prevHandler}>
            &lt;
          </button>
        ) : (
          <button className={styled.button} disabled>
            &lt;
          </button>
        )}
        {nextButton === true ? (
          <button className={styled.button} onClick={nextHandler}>
            &gt;
          </button>
        ) : (
          <button className={styled.button} disabled>
            &gt;
          </button>
        )}
{        <div className={styled.pageButtons}>
  {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
    <button
      key={page}
      className={currentPage === page ? styled.pageButtonSelected : styled.pageButton}
      onClick={() => handlePageChange(page)}
    >
      {page}
    </button>
  ))}
</div>}
      </div>
      <Cards items={items} />
    </div>
  );
}
