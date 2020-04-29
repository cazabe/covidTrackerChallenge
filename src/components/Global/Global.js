import React, { Fragment } from "react";
import covid1 from '../../img/covid1.jpg'
import covid2 from '../../img/covid2.jpg'
import covid3 from '../../img/covid3.jpg'
import covid4 from '../../img/covid4.jpg'

const Global = ({ global, date }) => {
  //constante para globales

  return (
    <div>
      <h1>Global</h1>
      {!global.NewConfirmed ? (
        <p>Cargando..</p>
      ) : (
        <Fragment>
            <div className="row mt-4  mt-5 mb-5">
          <div className="card container col-sm-5 col-md-5" style={{ width: "18rem" }}>
            <img className="card-img-top pt-2" src={covid1} alt="wordl" />
            <div className="card-body">
              <p>{`Nuevos casos: ${global.NewConfirmed}`}</p>
              <p>{date}</p>
            </div>
          </div>
        
          <div className="card container col-sm-5 col-md-5" style={{ width: "18rem" }}>
            <img className="card-img-top pt-2" src={covid2} alt="by Brian McGowan on Unsplash"/>
            <div className="card-body">
              <p>{`Total confirmados : ${global.TotalConfirmed}`}</p>
              <p>{date}</p>
            </div>
          </div>
          </div>

          <hr/>
          <div className="row mt-4  mt-5 mb-5">
          <div className="card container col-sm-5 col-md-5" style={{ width: "18rem" }}>
            <img className="card-img-top pt-2" src={covid3} alt=" by 🇨🇭 Claudio Schwarz | @purzlbaum on Unsplash" />
            <div className="card-body">
              <p>{`Nuevas muertes : ${global.NewDeaths}`}</p>
              <p>{date}</p>
            </div>
          </div>
          <hr/>
          <div className="card container col-sm-5 col-md-5" style={{ width: "18rem" }}>
            <img className="card-img-top pt-2" src={covid4} alt="by Markus Spiske from Pexels"/>
            <div className="card-body">
              <p>{`Total muertes : ${global.TotalDeaths}`}</p>
              <p>{date}</p>
            </div>
          </div>
          </div>

          <hr/>
          <div className="row mt-4  mt-5 mb-5">
          <div className="card container col-sm-5 col-md-5" style={{ width: "18rem" }}>
            <img className="card-img-top" src="" alt="wordl" />
            <div className="card-body">
              <p>{`recuperados : ${global.NewRecovered}`}</p>
              <p>{date}</p>
            </div>
          </div>
          <hr/>
          <div className="card container col-sm-5 col-md-5" style={{ width: "18rem" }}>
            <img className="card-img-top" src="" alt="wordl" />
            <div className="card-body">
              <p>{`Total recuperados : ${global.TotalRecovered}`}</p>
              <p>{date}</p>
            </div>
          </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Global;
