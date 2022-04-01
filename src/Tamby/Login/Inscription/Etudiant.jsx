import React, { useState, useEffect } from "react";
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Dropdown } from "primereact/dropdown";
import { useHistory, useParams } from "react-router-dom";
import {
  QuestionDiamond,
  PersonBadge,
  Person,
  Pc,
  BarChartSteps,
  Lock,
  PersonBoundingBox,
} from "react-bootstrap-icons";
import axios from "axios";
import "bootstrap";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Etudiant() {
  const history = useHistory();
 const [error,seterror] = useState({
     msg:""
 });
  const [donneAjout, setdonneAjout] = useState({
    num_matricule: "",
    nom: "",
    prenom: "",
    mdp: "",
    confmdp: "",
    niveau: "",
    parcours: "",
    role: "",
  });

  const formAjout = (e) => {
    const ds = { ...donneAjout, [e.target.name]: e.target.value };
    setdonneAjout(ds);
  };

  const typeParcours = [{ name: "DA21" }, { name: "AES" }, { name: "RPM" }];
  const typeNiveau = [
    { name: "L1" },
    { name: "L2" },
    { name: "L3" },
    { name: "M1" },
    { name: "M2" },
  ];
  const typeRole = [
    { name: "Aucun" },
    { name: "Delegue" },
    { name: "President " },
  ];
  //Css

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
                          "http://127.0.0.1:5000/etudiant/add",donneAjout
                      );
          console.log(response);
          } catch (error) {
            console.log(error.response);
          }
    }else{
        seterror({msg:"les mots de passe ne se correspondent pas !"});
        console.log(error.msg);
    }
  
  };
  return (
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
              placeholder="Numéro matricule"
              name="num_matricule"
              onChange={(e) => formAjout(e)}
              required
            />
          </div>
        </div>
        <div class="form-group" style={{ paddingBottom: "18px" }}>
          <div class="input-group">
            <div className="input-group-addon">
              <Person
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
              type="text"
              className="form-control"
              id="uname"
              style={styleInput}
              placeholder="Nom"
              name="nom"
              onChange={(e) => formAjout(e)}
              required
            />
          </div>
        </div>
        <div class="form-group" style={{ paddingBottom: "18px" }}>
          <div class="input-group">
            <div className="input-group-addon">
              <PersonBoundingBox
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
              type="text"
              class="form-control"
              id="uname"
              style={styleInput}
              placeholder="Prenom"
              name="prenom"
              onChange={(e) => formAjout(e)}
              required
            />
          </div>
        </div>
        <div class="form-group" style={{ paddingBottom: "18px" }}>
          <div class="input-group">
            <div className="input-group-addon">
              <Pc
                color="#0D0F34"
                size={33}
                style={{
                  backgroundColor: "#E7F2FA",
                  borderRadius: "4px 0px 0px 4px",
                }}
                className="p-1"
              />
            </div>
            <select
              className="form-select"
              name="parcours"
              onChange={(e) => formAjout(e)}
              style={styleInput}
              aria-label="Default select exemple"
            >
              <option selected>choisir parcours</option>
              {typeParcours.map((role) => (
                <option value={role.name}>{role.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div class="form-group" style={{ paddingBottom: "18px" }}>
          <div class="input-group">
            <div className="input-group-addon">
              <BarChartSteps
                color="#0D0F34"
                size={33}
                style={{
                  backgroundColor: "#E7F2FA",
                  borderRadius: "4px 0px 0px 4px",
                }}
                className="p-1"
              />
            </div>
            <select
              className="form-select"
              name="niveau"
              onChange={(e) => formAjout(e)}
              style={styleInput}
              aria-label="Default select exemple"
            >
              <option selected>choisir niveau</option>
              {typeNiveau.map((role) => (
                <option value={role.name}>{role.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div class="form-group" style={{ paddingBottom: "18px" }}>
          <div class="input-group">
            <div className="input-group-addon">
              <BarChartSteps
                color="#0D0F34"
                size={33}
                style={{
                  backgroundColor: "#E7F2FA",
                  borderRadius: "4px 0px 0px 4px",
                }}
                className="p-1"
              />
            </div>
            <select
              className="form-select"
              name="role"
              onChange={(e) => formAjout(e)}
              style={styleInput}
              aria-label="Default select exemple"
            >
              <option selected>choisir role</option>
              {typeRole.map((role) => (
                <option value={role.name}>{role.name}</option>
              ))}
            </select>
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
              placeholder="confirmer ici votre mot de passe"
              name="confmdp"
              onChange={(e) => formAjout(e)}
              required
            />
          
          </div>
          <div style={{color:"red",fontSize:"12px"}}>{error.msg}</div>
        </div>
        <button type="submit" class="btn btn-primary">
          S'inscrire
        </button>
      </form>
    </div>
  );
}

export default Etudiant;
