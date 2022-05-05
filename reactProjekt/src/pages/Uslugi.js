import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.css';
import wyslij from './obrazy/wyslij.png';


const Uslugi = () =>{
  return (
<div>

  <div className="banner">
    <div className="container">
      <form>
        <div className="form-group2">
          <p>Jak oceniasz nasze usługi w skali 1-5?</p>
          <div className="rate">
            <input type="radio" id="star5" name="rate" defaultValue={5} />
            <label htmlFor="star5" title="text">5 stars</label>
            <input type="radio" id="star4" name="rate" defaultValue={4} />
            <label htmlFor="star4" title="text">4 stars</label>
            <input type="radio" id="star3" name="rate" defaultValue={3} />
            <label htmlFor="star3" title="text">3 stars</label>
            <input type="radio" id="star2" name="rate" defaultValue={2} />
            <label htmlFor="star2" title="text">2 stars</label>
            <input type="radio" id="star1" name="rate" defaultValue={1} />
            <label htmlFor="star1" title="text">1 star</label>
          </div>
        </div>
        <div className="form-group2">
          <p>Podziel się swoją opinią na nasz temat!</p>
          <textarea id="opinia" name="opinia" rows={5} cols={55} placeholder=" Miejsce na wpisanie odpowiedzi..." defaultValue={""} />
        </div>
        <button type="submit" className="submit-btn"><img className="wyslij" src={wyslij} width={70} height={50} /></button>
      </form>
    </div>
  </div>
</div>
  );
}
export default Uslugi;