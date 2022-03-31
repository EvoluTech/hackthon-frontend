import React, { useState, useEffect } from "react";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Dropdown } from 'primereact/dropdown';
import { QuestionDiamond, PersonBadge, Person, Pc, BarChartSteps, Lock, PersonBoundingBox } from 'react-bootstrap-icons';


function Professeur() {


    const [role, setrole] = useState(null)
    const typeRole = [
        { name: 'Directeur'},
        { name: 'Responsable Mention' },
        { name: 'Chef scolarite'},
        { name: 'Professeur' },
        { name: 'Jardinier' },
        { name: 'Responsable ...'}
    ];
    //Css

    const styleInput = {
        border: 'none',
        borderRadius: '0px 25px 25px 0px',
        opacity: '40%',
        color: 'Black',
        height: '33px'
    }

    const styleMarginB = {
        marginBottom: "20px"
        // Top:'20px'
    }
    return (
        <div className="p-fluid">

            <div className="p-field p-col-12" style={styleMarginB}>
                <div className="p-inputgroup" style={{ padding: '0px 50px 0px 50px' }}>
                    <PersonBadge color="#0D0F34" size={33} style={{ backgroundColor: '#E7F2FA', borderRadius: '4px 0px 0px 4px' }} className="p-1" />
                    <span className="p-float-label">
                        <InputText id="inputtext" style={styleInput} className="p-inputtext-sm block mb-0" name="code_prof" />
                        <label htmlFor="inputtext" style={{ color: '#EEEFEF', fontSize: '0.8em' }} >Code prof</label>
                    </span>
                </div>

            </div>
            <div className="p-field p-col-12" style={styleMarginB}>
                <div className="p-inputgroup" style={{ padding: '0px 50px 0px 50px' }}>
                    <Person color="#0D0F34" size={33} style={{ backgroundColor: '#E7F2FA', borderRadius: '4px 0px 0px 4px' }} className="p-1" />
                    <span className="p-float-label">
                        <InputText id="inputtext" style={styleInput} className="p-inputtext-sm block mb-0" name="nom_prof" />
                        <label htmlFor="inputtext" style={{ color: '#EEEFEF', fontSize: '0.8em' }} >Nom Professeur</label>
                    </span>
                </div>
            </div>
            <div className="p-field p-col-12" style={styleMarginB}>
                <div className="p-inputgroup" style={{ padding: '0px 50px 0px 50px' }}>
                    <PersonBoundingBox color="#0D0F34" size={33} style={{ backgroundColor: '#E7F2FA', borderRadius: '4px 0px 0px 4px' }} className="p-1" />
                    <span className="p-float-label">
                        <InputText id="inputtext" style={styleInput} className="p-inputtext-sm block mb-0" name="prenom_prof" />
                        <label htmlFor="inputtext" style={{ color: '#EEEFEF', fontSize: '0.8em' }} >Prénom Professeur</label>
                    </span>
                </div>
            </div>
            <div className="p-field p-col-12" style={styleMarginB}>
                <div className="p-inputgroup" style={{ padding: '0px 50px 0px 50px' }}>
                    <BarChartSteps color="#0D0F34" size={33} style={{ backgroundColor: '#E7F2FA', borderRadius: '4px 0px 0px 4px' }} className="p-1" />
                    <span className="p-float-label">
                        <Dropdown inputId="dropdown" value={role} options={typeRole} cla optionLabel="name" onChange={(e) => setrole(e.value)} style={styleInput} />
                        <label htmlFor="dropdown" style={{ color: '#EEEFEF', fontSize: '0.8em' }}>Rôle </label>
                    </span>
                </div>

            </div>
            <div className="p-field p-col-12" style={styleMarginB}>
                <div className="p-inputgroup" style={{ padding: '0px 50px 0px 50px' }}>
                    <Lock color="#0D0F34" size={33} style={{ backgroundColor: '#E7F2FA', borderRadius: '4px 0px 0px 4px' }} className="p-1" />
                    <span className="p-float-label">
                        <Password className="p-inputtext  " name="mdp_prof" style={styleInput} toggleMask feedback={false} />
                        <label htmlFor="inputtext" style={{ color: '#EEEFEF', fontSize: '0.8em' }} >Mot de passe</label>
                    </span>
                </div>
            </div>
            <div className="p-field p-col-12" style={styleMarginB}>
                <div className="p-inputgroup" style={{ padding: '0px 50px 0px 50px' }}>
                    <Lock color="#0D0F34" size={33} style={{ backgroundColor: '#E7F2FA', borderRadius: '4px 0px 0px 4px' }} className="p-1" />
                    <span className="p-float-label">
                        <Password className="p-inputtext  " name="confmdp_prof" style={styleInput} />
                        <label htmlFor="inputtext" style={{ color: '#EEEFEF', fontSize: '0.8em' }} >Confimer le mot de passe</label>
                    </span>
                </div>
            </div>
            <div class="col-12" >
                <center>
                    <input type="button" class="button button2" value="Inscrire" />
                </center>
            </div>

        </div>
    );
}

export default Professeur;