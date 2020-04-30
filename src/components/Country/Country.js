import React from "react";

const Country = ({ country }) => {
  return (
    <div className="container">
      <h1>
        {country.map((countries) =>
          countries.Country === "Ecuador"
            ? 
            <div>
            <p>{`${countries.Country}`}</p>
            <p>{`nuevos casos: ${countries.NewConfirmed}`}</p>
            <p>{`total confirmados: ${countries.TotalConfirmed}`}</p>
            <p>{`muertes del dia: ${countries.NewDeaths}`}</p>
            <p>{`Total muertes: ${countries.TotalDeaths}`}</p>
            <p>{`Recuperados del día: ${countries.NewRecovered}`}</p>
            <p>{`Total recuperados: ${countries.TotalRecovered}`}</p>
            </div>
            : ""
        )}
      </h1>
    </div>
  );
};

export default Country;
