import React, { useState, useEffect } from "react";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Dropdown } from 'primereact/dropdown';
import { QuestionDiamond, PersonBadge, Person, Pc, BarChartSteps, Lock, PersonBoundingBox } from 'react-bootstrap-icons';
import axios from "axios";
import { useHistory } from "react-router-dom";


function Professeur() {

 
    //Css

    const history = useHistory();
 const [error,seterror] = useState({
     msg:""
 });
  const [donneAjout, setdonneAjout] = useState({
    code_prof: "",
    mdp: ""
  });

  const formAjout = (e) => {
    const ds = { ...donneAjout, [e.target.name]: e.target.value };
    setdonneAjout(ds);
  };

 

  const styleInput = {
    border: "none",
    borderRadius: "0px 25px 25px 0px",
    opacity: "70%",
    color: "black",
    height: "33px",
  };
  const styleCoteD = {
    background: "#0F103E",
    opacity: "96%",
  };

  const styleCConn = {
    color: "#EBE7D9",
    fontFamily: "Verdana",
    // Top:'20px'
  };
  const styleMarginB = {
    marginBottom: "20px",
    // Top:'20px'
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.clear();
    if (donneAjout.mdp === donneAjout.confmdp) {
        seterror({msg:""});
        try {
            const response = await axios.post(
                          "http://127.0.0.1:5000/login/prof",donneAjout
                      );
          console.log(response);
          } catch (error) {
            console.log(error.response);
          }
    }else{
        seterror({msg:"les mots de passe ne se correspondent pas !"});
        console.log(error.msg);
    }
}
    return (
        <div className="p-fluid">

<div className="p-fluid">
      <form
        onSubmit={handleSubmit}
        style={{ paddingLeft: "50px", paddingRight: "50px" }}
      >
        <div class="form-group" style={{ paddingBottom: "18px" }}>
          <div class="input-group">
            <div className="input-group-addon">
              <PersonBadge
                color="#0D0F34"
                size={33}
                style={{
                  backgroundColor: "#E7F2FA",
                  borderRadius: "4px 0px 0px 4px",
                }}
                className="p-1"
              />
            </div>

            <input
              type="number"
              class="form-control"
              id="uname"
              style={styleInput}
              placeholder="Votre code en tant que professeur"
              name="code_prof"
              onChange={(e) => formAjout(e)}
              required
            />
          </div>
        </div>
        <div class="form-group" style={{ paddingBottom: "18px" }}>
          <div class="input-group">
            <div className="input-group-addon">
              <Lock
                color="#0D0F34"
                size={33}
                style={{
                  backgroundColor: "#E7F2FA",
                  borderRadius: "4px 0px 0px 4px",
                }}
                className="p-1"
              />
            </div>

            <input
              type="password"
              class="form-control form-control-sm"
              style={styleInput}
              id="pwd"
              placeholder="Votre mot de passe"
              name="mdp"
              onChange={(e) => formAjout(e)}
              required
            />
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          S'inscrire
        </button>
      </form>
    </div>

        </div>
    );
}

export default Professeur;