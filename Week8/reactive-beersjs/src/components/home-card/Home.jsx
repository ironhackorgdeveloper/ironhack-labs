import React from 'react';
import { Link } from 'react-router-dom';
import HomeCard from './HomeCard';

const Home = () => {
  return(
    <div>
      <Link to='/all-beers'><HomeCard imgUrl="../../../img/beers.png" title="All Beers" description="Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Diuretics paradis num copo é motivis de denguis. Atirei o pau no gatis, per gatis num morreus. Mé faiz elementum girarzis, nisi eros vermeio." /></Link>
      <Link to='/random-beer'><HomeCard imgUrl="../../../img/random-beer.png" title="Random Beer" description="Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. A ordem dos tratores não altera o pão duris. Paisis, filhis, espiritis santis. Aenean aliquam molestie leo, vitae iaculis nisl." /></Link>
      <Link to='/new-beer'><HomeCard imgUrl="../../../img/new-beer.png" title="New Beer" description="Mussum Ipsum, cacilds vidis litro abertis. Mé faiz elementum girarzis, nisi eros vermeio. Cevadis im ampola pa arma uma pindureta. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Viva Forevis aptent taciti sociosqu ad litora torquent." /></Link>
    </div>
  )
}

export default Home;
