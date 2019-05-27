import React from 'react';
import { Link } from 'react-router-dom';



const CountryDetail = (props) => {
  const countries = props.countriesList;
  const { id } = props.match.params;
  
  const getCountry = (id) => {
    const theCountry = (oneCountry) => {
      return oneCountry.cca3 === id;
    }
    return countries.find(theCountry);
  }

  const foundCountry = getCountry(id, 10);

  // const getBorders = () => {
  //   // if (foundCountry.border.length === 0) { 
  //   // <li>{`${foundCountry.name.common} has no borders with any country`}</li>
  //   // } else {
  //     foundCountry.borders.map((border) => {
  //       const countryName = getCountry(border, 10).name.common;
  //       return(
  //         <li><Link to={`/${border}`}>{countryName}</Link></li>
  //       )
  //     })
  //   // }
  // }

  return(
    <div className="col-7">
      <h1>{foundCountry.flag}{foundCountry.name.official}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{foundCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{foundCountry.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul style={{listStyle: 'none', marginLeft: '-40px'}}>
                  {
                    foundCountry.borders.map((border) => {
                      const countryName = getCountry(border, 10).name.common;
                      const countryFlag = getCountry(border, 10).flag;
                      return(
                        <li><Link to={`/${border}`}>{`${countryFlag} ${countryName}`}</Link></li>
                      )
                    })
                  }
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default CountryDetail;
