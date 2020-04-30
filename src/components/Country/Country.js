import React from "react";

const Country = ({ country }) => {
  return (
    <div className="container">
        {country.map((countries)  =>
        <table className="table table-striped">
        <thead>
          <tr>
            <th>País</th>
            <th>nuevos casos</th>
            <th>total confirmados</th>
            <th>Decesos del dia</th>
            <th>Total decesos</th>
            <th>Recuperados del día</th>
            <th>Total recuperados</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{countries.Country}</td>
            <td>{countries.NewConfirmed}</td>
            <td>{countries.TotalConfirmed}</td>
            <td>{countries.NewDeaths}</td>
            <td>{countries.TotalDeaths}</td>
            <td>{countries.NewRecovered}</td>
            <td>{countries.TotalRecovered}</td>
          </tr>
        </tbody>
      </table>
        )}
    </div>
  );
};

export default Country;
