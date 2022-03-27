import React from "react";

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import fondl from '../image/fondl.jpeg'
import LoginPoss from '../image/LoginPoss.png'
import LogoM from '../image/LogoM.png'
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import './Login.css'

function Login() {

    //Css
    const styleBody = {
        'backgroundImage': `url(${fondl})`,
        'height': '103vh',
        'marginTop': '-23px',
        'backgroundSize': 'cover',
        'backgroundRepeat': 'no-repeat',
    }
    const styleLogin = {
        paddingTop: '31vh',
        width: '595px',
        height: '103vh',
        // border: '2px solid black',
    }
    const styleCoteG = {
        background: 'rgba(43, 55, 61, 0.96)',
        borderRadius: '25px 0px 0px 0px',
        opacity: '96%'
    }
    const styleCoteD = {
        background: 'rgba(68, 87, 96, 0.99)',
        borderRadius: '0px 0px 25px 0px',
        opacity: '96%'
    }
    const styleTech = {
        marginTop: '150px'
    }
    const styleLogoM = {
        paddingTop: '15px',
        paddingBottom: '25px'
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
        <div style={styleBody}>
            <center>
                <div style={styleLogin}>
                    <div class="grid">
                        <div class="col-12 md:col-6 lg:col-6" style={styleCoteG}>
                            <center style={styleTech}>
                                <img src={LoginPoss} alt="" width="220px" height="40px" />
                            </center>
                        </div>
                        <div class="col-12 md:col-6 lg:col-6" style={styleCoteD}>
                            <div class="grid">
                                <div class="col-12" style={styleMarginB}>
                                    <center style={styleLogoM}><img src={LogoM} width="40px" alt="" height="17px" /></center>
                                    <label style={styleCConn}>CONNEXION</label>
                                </div>
                                <div class="col-12" style={styleMarginB}>
                                    <div className="p-fluid">
                                        <div className="p-field p-col-12" style={styleMarginB}>
                                            <div className="p-inputgroup" >
                                                <span className="p-inputgroup-addon">
                                                    <i className="pi pi-user" style={{ 'fontSize': '1em' }}></i>
                                                </span>
                                                <span className="p-float-label" >
                                                    <InputText type="text" className="p-inputtext-sm p-d-block" name="numImmUtilisateur" style={{ opacity: 0.5, color: 'Black' }} />
                                                    <label className="p-text-italic " style={{ color: '#EBE7D9', fontSize: '0.9em' }}>Nom d'utilisateur</label>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-field p-col-12" style={styleMarginB}>
                                            <div className="p-inputgroup" style={{ 'fontSize': '1em' }}>
                                                <span className="p-inputgroup-addon">
                                                    <i className="pi pi-lock" style={{ 'fontSize': '1em' }}></i>
                                                </span>
                                                <span className="p-float-label">
                                                    <Password className="p-inputtext-sm  " name="motDePassUtilisateur" style={{ opacity: 0.5 }} toggleMask feedback={false} />
                                                    <label className="p-text-italic" style={{ color: '#EBE7D9' }}>Mot de passe</label>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-field p-col-12" >
                                            <center>
                                                <input type="button" class="button button2" value="Connecté"/>
                                            </center>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="grid" style={styleCConn}>
                                        <div class="col-12">
                                            <a href="#" style={{ textDecoration: 'none', color: '#EBE7D9',fontSize:'0.9em',float:'left' }}>S'inscrire</a>
                                        </div>
                                        <div class="col-12">
                                            <a href="#" style={{ textDecoration: 'none', color: '#EBE7D9',fontSize:'0.9em',float:'left' }}>Mots de pass oublier ?</a>
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

export default Login;