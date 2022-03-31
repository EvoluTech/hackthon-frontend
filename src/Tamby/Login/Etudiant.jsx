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
                const info = decode(token);
                const utilisateur = info.sub[0];
               if (utilisateur.statu == 0) {
                   alert("veuillez attendre que votre inscription soit valider");
               }else{
                alert("bienvenue utilisateur");
               }
               console.log(utilisateur);
			} catch (error) {
				console.log(error.response);
			}
        }
    return (
        <div className="p-fluid">

            <div className="p-field p-col-12" style={styleMarginB}>
                <div className="p-inputgroup" style={{ padding: '0px 50px 0px 50px' }}>
                    <PersonBadge color="#0D0F34" size={33} style={{ backgroundColor: '#E7F2FA', borderRadius: '4px 0px 0px 4px' }} className="p-1" />
                    <span className="p-float-label">
                        <InputText id="inputtext" style={styleInput} className="p-inputtext-sm block mb-0" name="num_matricule" onChange={(e)=>formAjout(e)} />
                        <label htmlFor="inputtext" style={{ color: '#EEEFEF', fontSize: '0.8em' }} >Numéro matricule</label>
                    </span>
                </div>

            </div>
            <div className="p-field p-col-12" style={styleMarginB}>
                <div className="p-inputgroup" style={{ padding: '0px 50px 0px 50px' }}>
                    <Lock color="#0D0F34" size={33} style={{ backgroundColor: '#E7F2FA', borderRadius: '4px 0px 0px 4px' }} className="p-1" /> 
                    <span className="p-float-label">
                        <Password className="p-inputtext  " name="mdp" style={styleInput} toggleMask feedback={false} onChange={(e)=>formAjout(e)} />
                        <label htmlFor="inputtext" style={{ color: '#EEEFEF', fontSize: '0.8em' }} >Mot de passe</label>
                    </span>
                </div>
            </div>
            <div class="col-12" >
                <center>
                    <input type="button" onClick={handleSubmit} class="button button2" value="Se connecter" />
                </center>
            </div>

        </div>
    );
}

export default Etudiant;