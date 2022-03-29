import React, { useState, useEffect } from "react";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Dropdown } from 'primereact/dropdown';
import { QuestionDiamond,PersonBadge,Person,Pc,BarChartSteps,Lock,PersonBoundingBox } from 'react-bootstrap-icons';


function Etudiant() {

    const [parcours, setparcours] = useState(null)
    const typeParcours = [
        { name: 'DA21', code: 'd' },
        { name: 'AES', code: 'a' },
        { name: 'RPM', code: 'r' }
    ];
    const [niveau, setniveau] = useState(null)
    const typeNiveau = [
        { name: 'L1', code: '1' },
        { name: 'L2', code: '2' },
        { name: 'L3', code: '3' },
        { name: 'M1', code: '4' },
        { name: 'M2', code: '5' }
    ];
    const [role, setrole] = useState(null)
    const typeRole = [
        { name: 'Aucun', code: 'r0' },
        { name: 'Délégue', code: 'r1' },
        { name: 'President des étudiants', code: 'r2' }
    ];
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
    return (
        <div className="p-fluid">

            <div className="p-field p-col-12" style={styleMarginB}>
                <div className="p-inputgroup" style={{ padding: '0px 50px 0px 50px' }}>
                    <PersonBadge color="#0D0F34" size={33} style={{ backgroundColor: '#E7F2FA', borderRadius: '4px 0px 0px 4px' }} className="p-1" />
                    <span className="p-float-label">
                        <InputText id="inputtext" style={styleInput} className="p-inputtext-sm block mb-0" name="num_utilisateur" />
                        <label htmlFor="inputtext" style={{ color: '#EEEFEF', fontSize: '0.8em' }} >Numéro matricule</label>
                    </span>
                </div>

            </div>
            <div className="p-field p-col-12" style={styleMarginB}>
                <div className="p-inputgroup" style={{ padding: '0px 50px 0px 50px' }}>
                    <Person color="#0D0F34" size={33} style={{ backgroundColor: '#E7F2FA', borderRadius: '4px 0px 0px 4px' }} className="p-1" />
                    <span className="p-float-label">
                        <InputText id="inputtext" style={styleInput} className="p-inputtext-sm block mb-0" name="nom_utilisateur" />
                        <label htmlFor="inputtext" style={{ color: '#EEEFEF', fontSize: '0.8em' }} >Nom d'utilisateur</label>
                    </span>
                </div>
            </div>
            <div className="p-field p-col-12" style={styleMarginB}>
                <div className="p-inputgroup" style={{ padding: '0px 50px 0px 50px' }}>
                    <PersonBoundingBox color="#0D0F34" size={33} style={{ backgroundColor: '#E7F2FA', borderRadius: '4px 0px 0px 4px' }} className="p-1" />
                    <span className="p-float-label">
                        <InputText id="inputtext" style={styleInput} className="p-inputtext-sm block mb-0" name="prenom_utilisateur" />
                        <label htmlFor="inputtext" style={{ color: '#EEEFEF', fontSize: '0.8em' }} >Prénom d'utilisateur</label>
                    </span>
                </div>
            </div>
            <div className="p-field p-col-12" style={styleMarginB}>
            <div className="p-inputgroup" style={{ padding: '0px 50px 0px 50px' }}>
                    <Pc color="#0D0F34" size={33} style={{ backgroundColor: '#E7F2FA', borderRadius: '4px 0px 0px 4px' }} className="p-1" />
                    <span className="p-float-label">
                        <Dropdown inputId="dropdown" value={parcours} options={typeParcours} cla optionLabel="name" onChange={(e) => setparcours(e.value)} style={styleInput} />
                        <label htmlFor="dropdown" style={{ color: '#EEEFEF', fontSize: '0.8em' }}>Parcours</label>
                    </span>
                </div>
            </div>
            <div className="p-field p-col-12" style={styleMarginB}>
                <div className="p-inputgroup" style={{ padding: '0px 50px 0px 50px' }}>
                    <BarChartSteps color="#0D0F34" size={33} style={{ backgroundColor: '#E7F2FA', borderRadius: '4px 0px 0px 4px' }} className="p-1" />
                    <span className="p-float-label">
                        <Dropdown inputId="dropdown" value={niveau} options={typeNiveau} cla optionLabel="name" onChange={(e) => setniveau(e.value)} style={styleInput} />
                        <label htmlFor="dropdown" style={{ color: '#EEEFEF', fontSize: '0.8em' }}>Niveau d'études</label>
                    </span>
                </div>

            </div>
            <div className="p-field p-col-12" style={styleMarginB}>
                <div className="p-inputgroup" style={{ padding: '0px 50px 0px 50px' }}>
                    <BarChartSteps color="#0D0F34" size={33} style={{ backgroundColor: '#E7F2FA', borderRadius: '4px 0px 0px 4px' }} className="p-1" />
                    <span className="p-float-label">
                        <Dropdown inputId="dropdown" value={role} options={typeRole} cla optionLabel="name" onChange={(e) => setrole(e.value)} style={styleInput} />
                        <label htmlFor="dropdown" style={{ color: '#EEEFEF', fontSize: '0.8em' }}>Rôle en tant qu'étudiant</label>
                    </span>
                </div>

            </div>
            <div className="p-field p-col-12" style={styleMarginB}>
                <div className="p-inputgroup" style={{ padding: '0px 50px 0px 50px' }}>
                    <Lock color="#0D0F34" size={33} style={{ backgroundColor: '#E7F2FA', borderRadius: '4px 0px 0px 4px' }} className="p-1" />
                    <span className="p-float-label">
                        <Password className="p-inputtext  " name="mdp" style={styleInput} toggleMask feedback={false} />
                        <label htmlFor="inputtext" style={{ color: '#EEEFEF', fontSize: '0.8em' }} >Mot de passe</label>
                    </span>
                </div>
            </div>
            <div className="p-field p-col-12" style={styleMarginB}>
                <div className="p-inputgroup" style={{ padding: '0px 50px 0px 50px' }}>
                    <Lock color="#0D0F34" size={33} style={{ backgroundColor: '#E7F2FA', borderRadius: '4px 0px 0px 4px' }} className="p-1" />
                    <span className="p-float-label">
                        <Password className="p-inputtext  " name="confmdp" style={styleInput}  />
                        <label htmlFor="inputtext" style={{ color: '#EEEFEF', fontSize: '0.8em' }} >Confimer le mot de passe</label>
                    </span>
                </div>
            </div>
            
        </div>
    );
}

export default Etudiant;