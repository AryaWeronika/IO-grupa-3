import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.css';
import strzalkalewo from './obrazy/strzalkalewo.png';
import wyslij from './obrazy/wyslij.png';
import strzalkaprawo from './obrazy/strzalkaprawo.png';
import { StepsProvider } from "react-step-builder";
import { useState } from "react";
import { Steps, useSteps } from "react-step-builder";
import Glowna from "./Glowna"

const Ankieta = () => {
  return (

    <StepsProvider>
      <MySteps />
    </StepsProvider>

  );
};

const MySteps = () => {
  const { next, prev } = useSteps();

  return (
    <>
	<div>
  <div className="banner">
    <section>
      <div className="container">
        <form id="myForm">
    <Steps>


<div className="step step-1 active">
            <div className="form-group">
		<p>Cześć! Jak masz na imię?</p>
              <input type="text" id="imie" name="imie" />
<button type="button" onClick={next} id="next" className="next-btn"><img className="strzalkaprawo" src={strzalkaprawo} withh={50} height={50} /></button>
</div>


      </div>


      <div>


<div className="form-group">
              <p>Ile masz lat?</p>
              <input type="text" id="wiek" name="wiek" />
            </div>
            <button type="button" onClick={prev} className="previous-btn"><img className="strzalkalewo" src={strzalkalewo} withh={50} height={50} /></button>
            <button type="button" onClick={next} className="next-btn"><img className="strzalkaprawo" src={strzalkaprawo} withh={50} height={50} /></button>


      </div>

      <div>


        <div className="form-group">
              <p>Podaj swój wzrost (cm)</p>
              <input type="text" id="wzrost" name="wzrost" />
            </div>
            <button type="button" onClick={prev} className="previous-btn"><img className="strzalkalewo" src={strzalkalewo} withh={50} height={50} /></button>
            <button type="button" onClick={next} className="next-btn"><img className="strzalkaprawo" src={strzalkaprawo} withh={50} height={50} /></button>


      </div>

      <div>

         <div className="form-group">
              <p>Podaj swoją wagę (kg)</p>
              <input type="text" id="waga" name="waga" />
            </div>
            <button type="button" onClick={prev} className="previous-btn"><img className="strzalkalewo" src={strzalkalewo} withh={50} height={50} /></button>
            <button type="button" onClick={next} className="next-btn"><img className="strzalkaprawo" src={strzalkaprawo} withh={50} height={50} /></button>

      </div>

      <div>


        <div className="form-groupradio">
              <p>Jaki rodzaj pracy wykonujesz?</p>
              <input type="radio" id="praca" name="praca" defaultValue="siedzaca" /> siedząca<br />
              <input type="radio" id="praca" name="praca" defaultValue="stojaca" /> stojąca<br />
              <input type="radio" id="praca" name="praca" defaultValue="fizyczna" /> fizyczna<br />
              <input type="radio" id="praca" name="praca" defaultValue="inna" /> inna
            </div>
            <button type="button" onClick={prev} className="previous-btn"><img className="strzalkalewo" src={strzalkalewo} withh={50} height={50} /></button>
            <button type="button" onClick={next} className="next-btn"><img className="strzalkaprawo" src={strzalkaprawo} withh={50} height={50} /></button>


      </div>

      <div>


<div className="form-groupradio">
              <p>Ile godzin dziennie poświęcasz pracy?</p>
              <input type="radio" id="hpraca" name="hpraca" defaultValue="2-3h" />2-3h<br />
              <input type="radio" id="hpraca" name="hpraca" defaultValue="4-6h" />4-6h<br />
              <input type="radio" id="hpraca" name="hpraca" defaultValue="8-10h" />8-10h<br />
              <input type="radio" id="hpraca" name="hpraca" defaultValue="inna" />inna
            </div>
            <button type="button" onClick={prev} className="previous-btn"><img className="strzalkalewo" src={strzalkalewo} withh={50} height={50} /></button>
            <button type="button" onClick={next} className="next-btn"><img className="strzalkaprawo" src={strzalkaprawo} withh={50} height={50} /></button>


      </div>

      <div>


<div className="form-groupradio">
              <p>Ile godzin dziennie poświęcasz na relax?</p>
              <input type="radio" id="relax" name="relax" defaultValue="1-2h" />1-2h<br />
              <input type="radio" id="relax" name="relax" defaultValue="2-4h" />2-4h<br />
              <input type="radio" id="relax" name="relax" defaultValue="6-8h" />6-8h<br />
              <input type="radio" id="relax" name="relax" defaultValue="inna" />inna
            </div>
            <button type="button" onClick={prev} className="previous-btn"><img className="strzalkalewo" src={strzalkalewo} withh={50} height={50} /></button>
            <button type="button" onClick={next} className="next-btn"><img className="strzalkaprawo" src={strzalkaprawo} withh={50} height={50} /></button>


      </div>

      <div>


<div className="form-groupradio">
              <p>Jak często się ruszasz?</p>
              <input type="radio" id="ruch" name="ruch" defaultValue="codziennie" />codziennie<br />
              <input type="radio" id="ruch" name="ruch" defaultValue="cokilkadni" />co kilka dni<br />
              <input type="radio" id="ruch" name="ruch" defaultValue="kilkarazywmiesiacu" />kilka razy w miesiącu<br />
              <input type="radio" id="ruch" name="ruch" defaultValue="inna" />inna
            </div>
            <button type="button" onClick={prev} className="previous-btn"><img className="strzalkalewo" src={strzalkalewo} withh={50} height={50} /></button>
            <button type="button" onClick={next} className="next-btn"><img className="strzalkaprawo" src={strzalkaprawo} withh={50} height={50} /></button>


      </div>

      <div>


<div className="form-groupradio">
              <p>Jaki rodzaj aktywności wykonujesz najczęściej?</p>
              <input type="radio" id="aktywnosc" name="aktywnosc" defaultValue="spacer" />spacer<br />
              <input type="radio" id="aktywnosc" name="aktywnosc" defaultValue="rower" />rower<br />
              <input type="radio" id="aktywnosc" name="aktywnosc" defaultValue="bieganie" />bieganie<br />
              <input type="radio" id="aktywnosc" name="aktywnosc" defaultValue="silownia" />siłownia<br />
              <input type="radio" id="aktywnosc" name="aktywnosc" defaultValue="inna" />inna
            </div>
            <button type="button" onClick={prev} className="previous-btn"><img className="strzalkalewo" src={strzalkalewo} withh={50} height={50} /></button>
            <button type="button" onClick={next} className="next-btn"><img className="strzalkaprawo" src={strzalkaprawo} withh={50} height={50} /></button>


      </div>

      <div>

<div className="form-groupradio">
              <p>Jak często sięgasz po alkohol?</p>
              <input type="radio" id="alko" name="alko" defaultValue="niepije" />nie pije<br />
              <input type="radio" id="alko" name="alko" defaultValue="razwtygodniu" />raz w tygodniu<br />
              <input type="radio" id="alko" name="alko" defaultValue="1-2razywtyg" />1-2 razy w tygodniu<br />
              <input type="radio" id="alko" name="alko" defaultValue="kilkarazywmie" />kilka razy w miesiącu<br />
              <input type="radio" id="alko" name="alko" defaultValue="codziennie" />codziennie piwo/ 1 lampka wina<br />
              <input type="radio" id="alko" name="alko" defaultValue="inna" />inna
            </div>
            <button type="button" onClick={prev} className="previous-btn"><img className="strzalkalewo" src={strzalkalewo} withh={50} height={50} /></button>
            <button type="button" onClick={next} className="next-btn"><img className="strzalkaprawo" src={strzalkaprawo} withh={50} height={50} /></button>

      </div>


      <div>

 <div className="form-groupradio">
              <p>Czy palisz papierosy?</p>
              <input type="radio" id="papierosy" name="papierosy" defaultValue="palecodz" />palę codziennie<br />
              <input type="radio" id="papierosy" name="papierosy" defaultValue="paleokaz" />palę okazjonalnie<br />
              <input type="radio" id="papierosy" name="papierosy" defaultValue="niepale" />nie palę
            </div>
            <button type="button" onClick={prev} className="previous-btn"><img className="strzalkalewo" src={strzalkalewo} withh={50} height={50} /></button>
            <button type="button" onClick={next} className="next-btn"><img className="strzalkaprawo" src={strzalkaprawo} withh={50} height={50} /></button>

      </div>


      <div>

<div className="form-groupradio">
              <p>Jak dużo kawy pijesz dziennie?</p>
              <input type="radio" id="kawa" name="kawa" defaultValue="niepijekawy" />nie piję kawy<br />
              <input type="radio" id="kawa" name="kawa" defaultValue="1dziennie" />1 filiżanka dziennie<br />
              <input type="radio" id="kawa" name="kawa" defaultValue="2-3dziennie" />2-3 filiżanki dziennie<br />
              <input type="radio" id="kawa" name="kawa" defaultValue=">3dziennie" />powyżej 3 filiżanek dziennie
            </div>
            <button type="button" onClick={prev} className="previous-btn"><img className="strzalkalewo" src={strzalkalewo} withh={50} height={50} /></button>
            <button type="button" onClick={next} className="next-btn"><img className="strzalkaprawo" src={strzalkaprawo} withh={50} height={50} /></button>

      </div>


      <div>

<div className="form-groupradio">
              <p>Jak określasz jakoś swojego snu?</p>
              <input type="radio" id="sen" name="sen" defaultValue="spiemalo" />śpię mało<br />
              <input type="radio" id="sen" name="sen" defaultValue="trudnzasnac" />mam trudności z zaśnięciem<br />
              <input type="radio" id="sen" name="sen" defaultValue="budzesiewnocy" />często budzę się w nocy<br />
              <input type="radio" id="sen" name="sen" defaultValue="nic" />żadne z wymienionych
            </div>
            <button type="button" onClick={prev} className="previous-btn"><img className="strzalkalewo" src={strzalkalewo} withh={50} height={50} /></button>
            <button type="button" onClick={next} className="next-btn"><img className="strzalkaprawo" src={strzalkaprawo} withh={50} height={50} /></button>

      </div>

      <div>

<div className="form-groupradio">
              <p>Ile godzin dziennie śpisz?</p>
              <input type="radio" id="hsen" name="hsen" defaultValue="<3" />poniżej 3 godzin<br />
              <input type="radio" id="hsen" name="hsen" defaultValue="3-5h" />3-5h<br />
              <input type="radio" id="hsen" name="hsen" defaultValue="6-7h" />6-7h<br />
              <input type="radio" id="hsen" name="hsen" defaultValue="8-9h" />8-9h<br />
              <input type="radio" id="hsen" name="hsen" defaultValue="inna" />inna
            </div>
            <button type="button" onClick={prev} className="previous-btn"><img className="strzalkalewo" src={strzalkalewo} withh={50} height={50} /></button>
            <button type="button" onClick={next} className="next-btn"><img className="strzalkaprawo" src={strzalkaprawo} withh={50} height={50} /></button>

      </div>

      <div>

<div className="form-groupradio">
              <p>Jak określasz poziom swojej energii?</p>
              <input type="radio" id="energia" name="energia" defaultValue="czestasennosc" />często odczuwam senność<br />
              <input type="radio" id="energia" name="energia" defaultValue="niemamsil" />nie mam siły na codzienne aktywności<br />
              <input type="radio" id="energia" name="energia" defaultValue="mamsile" />mam siłę na wszystkie codzienne aktywności<br />
              <input type="radio" id="energia" name="energia" defaultValue="jestemaktywny" />jestem wulkanem aktywności
            </div>
            <button type="button" onClick={prev} className="previous-btn"><img className="strzalkalewo" src={strzalkalewo} withh={50} height={50} /></button>
            <button type="button" onClick={next} className="next-btn"><img className="strzalkaprawo" src={strzalkaprawo} withh={50} height={50} /></button>

      </div>

      <div>
<div className="form-groupcheckbox">
              <p>Czy chorujesz na coś przewlekle?</p>
              <input type="checkbox" id="choroba" name="choroba" defaultValue="niedotarczycy" />Niedoczynność tarczycy<br />
              <input type="checkbox" id="choroba" name="choroba" defaultValue="nadtarczycy" />Nadczynność tarczycy<br />
              <input type="checkbox" id="choroba" name="choroba" defaultValue="hashimoto" />Hashimoto<br />
              <input type="checkbox" id="choroba" name="choroba" defaultValue="celiakia" />Celiakia<br />
              <input type="checkbox" id="choroba" name="choroba" defaultValue="pcos" />PCOS<br />
              <input type="checkbox" id="choroba" name="choroba" defaultValue="insulinoopornosc" />Insulinooporność<br />
              <input type="checkbox" id="choroba" name="choroba" defaultValue="nadcisnienie" />Nadciśnienie<br />
              <input type="checkbox" id="choroba" name="choroba" defaultValue="miazdzyca" />Miażdżyca<br />
              <input type="checkbox" id="choroba" name="choroba" defaultValue="anemia" />Anemia<br />
              <input type="checkbox" id="choroba" name="choroba" defaultValue="ibs" />Zespół Jelita Drażliwego (IBS)<br />
              <input type="checkbox" id="choroba" name="choroba" defaultValue="osteoporoza" />Osteoporoza<br />
              <input type="checkbox" id="choroba" name="choroba" defaultValue="inna" />Inna
            </div>
            <button type="button"  onClick={prev} className="previous-btn"><img className="strzalkalewo" src={strzalkalewo} withh={50} height={50} /></button>
            <button type="button"  onClick={next} className="next-btn"><img className="strzalkaprawo" src={strzalkaprawo} withh={50} height={50} /></button>

      </div>

      <div>

<div className="form-groupcheckbox">
              <p>Czy masz alergie lub nietolerancje pokarmowe?</p>
              <input type="checkbox" id="alergie" name="alergie" defaultValue="mleko" />mleko<br />
              <input type="checkbox" id="alergie" name="alergie" defaultValue="gluten" />gluten<br />
              <input type="checkbox" id="alergie" name="alergie" defaultValue="laktoza" />laktoza<br />
              <input type="checkbox" id="alergie" name="alergie" defaultValue="orzechy" />orzechy<br />
              <input type="checkbox" id="alergie" name="alergie" defaultValue="soja" />soja
            </div>
            <button type="button" onClick={prev} className="previous-btn"><img className="strzalkalewo" src={strzalkalewo} withh={50} height={50} /></button>
            <button type="button" onClick={next} className="next-btn"><img className="strzalkaprawo" src={strzalkaprawo} withh={50} height={50} /></button>

      </div>

      <div>

<div className="form-groupcheckbox">
              <p>Zaznacz stwierdzenia dotyczace Ciebie:</p>
              <input type="checkbox" id="ty" name="ty" defaultValue="czestedolegliwosci" />mam częste dolegliwości ze strony przewodu pokarmowego (wzdęcia, bóle brzucha)<br />
              <input type="checkbox" id="ty" name="ty" defaultValue="zdarzajasiebiegunki" />zdarzają mi się biegunki<br />
              <input type="checkbox" id="ty" name="ty" defaultValue="zdarzajasiezaparcia" />zdarzają mi się zaparcia<br />
              <input type="checkbox" id="ty" name="ty" defaultValue="naprzemiennebiegunkiizaparcia" />mam naprzemiennie biegunki i zaparcia
            </div>
            <button type="button" onClick={prev} className="previous-btn"><img className="strzalkalewo" src={strzalkalewo} withh={50} height={50} /></button>
            <button type="button" onClick={next} className="next-btn"><img className="strzalkaprawo" src={strzalkaprawo} withh={50} height={50} /></button>
      </div>

      <div>

<div className="form-groupradio">
              <p>Czy przyjmujesz leki?</p>
              <input type="radio" id="leki" name="leki" defaultValue="tak" />tak<br />
              <input type="radio" id="leki" name="leki" defaultValue="nie" />nie
            </div>
            <button type="button" onClick={prev} className="previous-btn"><img className="strzalkalewo" src={strzalkalewo} withh={50} height={50} /></button>
            <button type="button" onClick={next} className="next-btn"><img className="strzalkaprawo" src={strzalkaprawo} withh={50} height={50} /></button>

      </div>

      <div>

<div className="form-groupcheckbox">
              <p>Zaznacz produkty, których nie jadasz:</p>
              <input type="checkbox" id="niejesz" name="niejesz" defaultValue="jajka" />jajka<br />
              <input type="checkbox" id="niejesz" name="niejesz" defaultValue="nabial" />nabiał<br />
              <input type="checkbox" id="niejesz" name="niejesz" defaultValue="pelnoziar" />produkty pełnoziarniste<br />
              <input type="checkbox" id="niejesz" name="niejesz" defaultValue="orzechy" />orzechy/ nasiona/ pestki<br />
              <input type="checkbox" id="niejesz" name="niejesz" defaultValue="mieso" />mięso<br />
              <input type="checkbox" id="niejesz" name="niejesz" defaultValue="ryby" />ryby<br />
              <input type="checkbox" id="niejesz" name="niejesz" defaultValue="owocemorza" />owoce morza<br />
              <input type="checkbox" id="niejesz" name="niejesz" defaultValue="rosstracz" />rośliny strączkowe<br />
              <input type="checkbox" id="niejesz" name="niejesz" defaultValue="zadnezwymienionych" />żadne z wymienionych
            </div>
            <button type="button" onClick={prev} className="previous-btn"><img className="strzalkalewo" src={strzalkalewo} withh={50} height={50} /></button>
            <button type="submit" onClick={Glowna} className="submit-btn"><img className="wyslij" src={wyslij} width={70} height={50} /></button>

      </div>

    </Steps>
        </form>
      </div>
    </section>
</div>

</div>
    </>
  );
};

export default Ankieta;