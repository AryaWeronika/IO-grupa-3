import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.css';
import login from './obrazy/login.png';


const Panel = () => {
  return (
    <>
	<div>

  <div className="banner">
    <form action="glowna" method="get">
      <div className="container">
        <div className="form-group2">
          <label htmlFor="uname"><b>Nazwa Użytkownika</b></label>
          <input type="text" placeholder="Wpisz nazwę użytkownika" name="uname" required />
          <label htmlFor="psw"><b>Hasło</b></label>
          <input type="password" id="myInput" placeholder="Wpisz hasło" name="psw" required />
        </div>
        <input type="checkbox" onclick="myFunction()" style={{float: 'right', marginTop: '18px'}} /><label className="label2" style={{float: 'right', marginRight: '8px', marginTop: '15px'}}>Pokaż hasło</label>
        <br />
        <label>
          Zapamiętaj mnie <input type="checkbox" defaultChecked="checked" name="remember" defaultValue="remember" id="remember" />
        </label><br />
        <button type="submit" className="submit-btn"><img className="wyslij" src={login} width={70} height={50} /></button>
      </div>
    </form>
  </div>
</div>

    </>
  );
}


export default Panel;