import React, { useState, useEffect } from "react";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Dropdown } from 'primereact/dropdown';
import { useHistory,useParams } from 'react-router-dom';
import { QuestionDiamond, PersonBadge, Person, Pc, BarChartSteps, Lock, PersonBoundingBox } from 'react-bootstrap-icons';
import axios from "axios";


function Etudiant() {
    const history = useHistory();
    const [error,seterror] = useState({
        msg:""
    });
    const [donneAjout, setdonneAjout] = useState({
        num_matricule:'',
        mdp:''
    });
    const formAjout = (e) => {
        const ds = { ...donneAjout, [e.target.name]: e.target.value };
        setdonneAjout(ds);

       
    }
 
    //Css

    const styleInput = {
        border: 'none',
        borderRadius: '0px 25px 25px 0px',
        opacity: '40%',
        color: 'Black',
        height: '33px'
    }
    const styleCoteD = {
        background: '#0F103E',
        opacity: '96%'
    }

    const styleCConn = {
        color: '#EBE7D9',
        fontFamily: 'Verdana',
        // Top:'20px'
    }
    const styleMarginB = {
        marginBottom: "20px"
        // Top:'20px'
    }
    function decode(token) {
        var base64Url = token.split(".")[1];
        var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        var jsonPayload = decodeURIComponent(
          atob(base64)
            .split("")
            .map(function (c) {
              return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join("")
        );
        
        return JSON.parse(jsonPayload);
    }
    const handleSubmit = async (event) => {
		event.preventDefault();
			try {
			
			const response = await axios.post(
					"http://127.0.0.1:5000/login/etudiant",donneAjout
				);
				console.log(response);
                const token = response.data['token'];
                const role = response.data['role'].role;
                const info = decode(token);
                console.log(role);
                console.log(info.sub);
               if (info.sub.statu == 0) {
                   alert("veuillez attendre que votre inscription soit valider");
               }else{
                history.push("/home")
               }
               localStorage.setItem("token",token);
               localStorage.setItem("role",role)
              
			} catch (error) {
				console.log(error.response);
			}
        }
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
    );
}

export default Etudiant;