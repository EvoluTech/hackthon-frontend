import React, { useState, useEffect } from "react";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import Etudiant from './Etudiant'
import { QuestionCircle } from 'react-bootstrap-icons';
import LoginPoss from '../../image/LoginPoss.png'
function Inscription() {

    const [typeU, settypeU] = useState(null);
    const typeUtilisateur = [
        { name: 'Etudiants', code: 'e' },
        { name: 'Professeur', code: 'p' }
    ];
    //Css
    const styleBody = {
        // 'backgroundImage': `url(${fondl})`,
        'height': '103vh',
        'marginTop': '-190px',
        'backgroundSize': 'cover',
        'backgroundRepeat': 'no-repeat',
    }
    const styleLogin = {
        paddingTop: '31vh',
        width: '400px',
        height: '103vh',
                // border: '2px solid black',
    }
    const styleInput = {
        border: 'none',
        borderRadius: '0px 25px 25px 0px',
        opacity: '40%',
        color: 'Black',
        height: '33px'
    }
    const styleTech = {
        marginTop: '10px'
    }
    const styleCoteD = {
        background: '#0F103E',
        boxShadow: ' 8px 10px 20px 5px rgba(0, 0, 255, .2)',
        opacity: '96%',
        borderRadius:'10px'

    }

    const styleCConn = {
        color: '#EBE7D9',
        fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
        fontSize: '0.9em'
        // Top:'20px'
    }
    const styleMarginB = {
        marginBottom: "20px"
        // Top:'20px'
    }
    return (
        <div style={styleBody}>
            <center>
                <div style={styleLogin} >
                    <div class="grid">
                        <div className="col-12 md:col-6 lg:col-12 p-shadow-24" style={styleCoteD} >
                            <div class="grid">
                                <div class="col-12" >
                                    <center style={styleTech}>
                                        <div class="col-12 md:col-6 lg:col-6" >
                                            <img src={LoginPoss} alt="" width="150px" height="21px" />
                                        </div>
                                        <div class="col-12 md:col-6 lg:col-6" >
        
                                        <label style={styleCConn}><b>INSCRIPTION</b></label>
                                        </div>
                                    </center>
                                </div>

                                <div class="col-12" >
                                    <div className="p-field p-col-12" >
                                        <div className="p-inputgroup" style={{ padding: '0px 50px 0px 50px' }}>
                                            <QuestionCircle color="#0D0F34" size={33} style={{ backgroundColor: '#E7F2FA', borderRadius: '4px 0px 0px 4px' }} className="p-1" />
                                            <span className="p-float-label">
                                                <Dropdown inputId="dropdown" value={typeU} options={typeUtilisateur} cla optionLabel="name" onChange={(e) => settypeU(e.value)} style={styleInput} />
                                                <label htmlFor="dropdown" style={{ color: '#EEEFEF', fontSize: '0.8em' }}>Vous ??tes ?</label>
                                            </span>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-12" >
                                    <Etudiant />
                                </div>
                                <div class="col-12" >
                                    <center>
                                        <input type="button" class="button button2" value="Inscrire" />
                                    </center>
                                </div>
                                <div class="col-12">
                                    <div class="grid" style={styleCConn}>
                                        <div class="col-12 pl-4">
                                            <a href="/" style={{ textDecoration: 'none', color: '#EBE7D9', fontSize: '0.9em', float: 'left' }}>Se connecter</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
        </div >
    );
}

export default Inscription;