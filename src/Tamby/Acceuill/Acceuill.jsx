import React, { useState, useEffect,useRef } from "react";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import Header from '../Menu/Header'
import { ListGroup, Col, Form, Table } from 'react-bootstrap';
import { ScrollPanel } from 'primereact/scrollpanel';
import { ScrollTop } from 'primereact/scrolltop';
import { Button } from 'primereact/button';
import photoProfil from '../image/photoProfil.jpg'
import logoEM from '../image/logoEM.png'
import CreerPub from '../Groupe/CreerPub'
import Conversation from '../Chat/Conversation'

export default function Acceuill() {

    const [cssNA, setcssNA] = useState({ filter: 'opacity(80%)', height: '520px' });
    const stylefont = {
        fontSize: '1rem',
        fontWeight: 'normal',
        fontFamily: "apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
    };
    const repere = {
        // border: '1px solid black'
    }
    const repere1 = {
        // border: '1px solid red',
        backgroundColor: '#82CBEB'
    }
    const radiusA = {
        borderRadius: '50px',
        marginBottom: '5px'
    }
    const radiusB = {
        borderRadius: '50px',
        marginLeft: '18px'
    }
    const styleA = {
        // border: '1px solid red',
        backgroundColor: '#82CBEB',
        borderRadius: '10px 10px 0px 0px',
        color: 'white'
    }
    const styleB = {
        border: '2px solid #82CBEB',
        borderRadius: '10px 10px 10px 10px',
    }
    const styleC = {
        borderRadius: '10px 10px 10px 10px',
        backgroundColor: '#82CBEB',
        color: 'white'
    }
    const stylepub1 = {
        float: 'left',
        // border: '1px solid red'
    }
    const stylepub0 = {
        backgroundColor: 'white',
        borderRadius: '10px 10px 0px 0px',
        color: 'Black'
    }
    const stylepub01 = {
        backgroundColor: 'white',
        borderRadius: '0px 0px 10px 10px',
        color: 'Black'
    }
    const sytleFontDatePub={
        fontSize:'0.8em'
    }
    const stylebtnRec = {
        fontSize: '0.7rem', padding: ' 0.4375rem 0.875rem', float: 'right', backgroundColor: '#82CBEB', border: '1px #41A69C'
    };
    const stylebtnRef = {
        fontSize: '0.7rem', padding: ' 0.4375rem 0.875rem', float: 'left', backgroundColor: '#049DD9', border: '1px #049DD9'
    };
    const style ={
        display: 'block',
        width: '100%',
        height: ' calc(1.5em + .75rem + 2px)',
        padding: '.375rem .75rem',
        fontSize: ' 0.8rem',
        fontWeight: '400',
        lineHeight: '1.5',
        color: '#495057',
        backgroundColor: '#fff',
        backgroundClip: ' padding-box',
        border: '1px solid #ced4da',
        borderRadius: '.25rem',
        float: 'right',
        width: '200px',
    }
    return (
        <div>
            <Header active='Home' />
            <div class="grid mt-1 ml-1 mr-1">
                <div className="col-12 md:col-6 lg:col-12 " style={repere} >
                    <div style={{ float: 'right',marginRight:'30%' }}>
                        <center>

                        <Button icon="pi pi-search" className="p-button-sm p-button ml-1 mr-1" style={stylebtnRec} />
                        <input type="text" name={'namefiltre'} id='ch' onChange={{}} class="form-control sm mb-1" style={style} placeholder='Recherche ...' />
                       
                        <select name="structure" id='str' className=' form-control mr-1' style={style}
                            onChange={(e) => {}} >   
                            <option value='' selected>Filtrer par</option>
                            <option value='' >Par nom</option>
                            <option value='' >Par niveau</option> 
                        </select> 
                        <select name="structure" id='str' className=' form-control mr-1' style={style}
                            onChange={(e) => {}} >   
                            <option value='' selected>Recherche </option>
                            <option value='pub' >Publication</option>
                            <option value='person' >Personne</option>
                            
                        </select> 
                        </center>
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-12 " style={repere} >
                    <div class="grid">
                        <div class="col-3 " >
                            <div class="grid m-1">
                                <div class="col-12 mb-1" style={styleA}>
                                    <center>
                                        <h4>Liste des groupes </h4>
                                    </center>
                                </div>
                                <div class="col-12 " style={repere1}>

                                    <div className="scrollpanel-demo">
                                        <ScrollPanel style={cssNA} className="custombar1">
                                            <ListGroup variant="flush" style={stylefont}  >

                                                <ListGroup.Item action onClick={() => { alert('EMIFI') }} style={radiusA}>
                                                    <img alt="Profil" src={logoEM} style={{ borderRadius: '10%', width: '30px', height: '30px', verticalAlign: 'middle', marginRight: '4px' }} />   EMIFI (Emit Mikalo Fiderana)
                                        </ListGroup.Item>
                                                <ListGroup.Item action onClick={() => { alert('EMIKI') }} style={radiusA}>
                                                    <img alt="Profil" src={logoEM} style={{ borderRadius: '50%', width: '30px', height: '30px', verticalAlign: 'middle', marginRight: '4px' }} />   EMIKI (Emit Milalao Kitra)
                                        </ListGroup.Item>
                                                <ListGroup.Item action onClick={() => { alert('EMIBA') }} style={radiusA}>
                                                    <img alt="Profil" src={logoEM} style={{ borderRadius: '50%', width: '30px', height: '30px', verticalAlign: 'middle', marginRight: '4px' }} />   EMIBA (Emit Milalao Basket)
                                        </ListGroup.Item>
                                                <ListGroup.Item action onClick={() => { alert('EMIDANCE') }} style={radiusA}>
                                                    <img alt="Profil" src={logoEM} style={{ borderRadius: '50%', width: '30px', height: '30px', verticalAlign: 'middle', marginRight: '4px' }} />   EMIDANCE (Emit Miangaly ny Dance)
                                        </ListGroup.Item>
                                                <ListGroup.Item action onClick={() => { alert('EMIKA') }} style={radiusA}>
                                                    <img alt="Profil" src={logoEM} style={{ borderRadius: '50%', width: '30px', height: '30px', verticalAlign: 'middle', marginRight: '4px' }} />   EMIKA (Emit Miangaly ny Kanto)
                                        </ListGroup.Item>

                                            </ListGroup>
                                            <ScrollTop target="parent" threshold={100} className="custom-scrolltop" icon="pi pi-sort-up" />
                                        </ScrollPanel>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 " >
                            <div class="grid m-1">
                                <div class="col-12 mb-1" style={styleB}>
                                    <center>
                                        <CreerPub />
                                    </center>
                                </div>
                                <div class="col-12 mb-1" style={styleC} >
                                    <center>
                                        <div className="scrollpanel-demo">
                                            <ScrollPanel style={cssNA} className="custombar1">
                                                <div class="grid mb-1 p-2 ml-1">
                                                    <div class="col-12 " style={stylepub0} >
                                                        <div style={stylepub1}>
                                                            <b><img alt="Profil" src={photoProfil} style={{ borderRadius: '50%', width: '30px', height: '30px', verticalAlign: 'middle', marginRight: '2px' }} />  Tamby Arimisa</b> <label style={sytleFontDatePub}> , <u>date de la publication</u> : 30 mars 2022 </label>
                                                        </div>
                                                        <div style={{ float: 'left', fontSize: '0.9em' }}> A publié à propos de : <b><i>{'Description'} qsdfsfsdkfklsdjfjsdljf kljsdk fjlsdjfjl sdjlfjlsdjf jsdljfljjkl hklsdhkfhjsdhjf khjdklshf kjhsdjkhfklsdhkfhlksdhkfhsd klhfksdjfhjksdhkfhsdkkjhdksfklsdhjlfk l hdklfjklsdhf</i></b> </div>
                                                    </div>
                                                    <div class="col-12 mb-1" style={stylepub01}>
                                                        <hr style={{ height: '0.2em' }} />
                                                        <div style={stylepub1}>
                                                            Image ou Text
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* ******************************** */}
                                                <div class="grid mb-1 p-2 ml-1">
                                                    <div class="col-12 " style={stylepub0} >
                                                        <div style={stylepub1}>
                                                            <b><img alt="Profil" src={photoProfil} style={{ borderRadius: '50%', width: '30px', height: '30px', verticalAlign: 'middle', marginRight: '2px' }} />  Tamby Arimisa</b> <label style={sytleFontDatePub}> , <u>date de la publication</u>  : 30 mars 2022 </label>
                                                        </div>
                                                        <div style={{ float: 'left', fontSize: '0.9em' }}> A publié à propos de : <b><i>{'Description'} qsdfsfsdkfklsdjfjsdljf kljsdk fjlsdjfjl sdjlfjlsdjf jsdljfljjkl hklsdhkfhjsdhjf khjdklshf kjhsdjkhfklsdhkfhlksdhkfhsd klhfksdjfhjksdhkfhsdkkjhdksfklsdhjlfk l hdklfjklsdhf</i></b> </div>
                                                    </div>
                                                    <div class="col-12 mb-1" style={stylepub01}>
                                                        <hr style={{ height: '0.2em' }} />
                                                        <div style={stylepub1}>
                                                            Image ou Text
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* ******************************** */}
                                                <div class="grid mb-1 p-2 ml-1">
                                                    <div class="col-12 " style={stylepub0} >
                                                        <div style={stylepub1}>
                                                            <b><img alt="Profil" src={photoProfil} style={{ borderRadius: '50%', width: '30px', height: '30px', verticalAlign: 'middle', marginRight: '2px' }} />  Tamby Arimisa</b> <label style={sytleFontDatePub}> , <u>date de la publication</u>  : 30 mars 2022 </label>
                                                        </div>
                                                        <div style={{ float: 'left', fontSize: '0.9em' }}> A publié à propos de : <b><i>{'Description'} qsdfsfsdkfklsdjfjsdljf kljsdk fjlsdjfjl sdjlfjlsdjf jsdljfljjkl hklsdhkfhjsdhjf khjdklshf kjhsdjkhfklsdhkfhlksdhkfhsd klhfksdjfhjksdhkfhsdkkjhdksfklsdhjlfk l hdklfjklsdhf</i></b> </div>
                                                    </div>
                                                    <div class="col-12 mb-1" style={stylepub01}>
                                                        <hr style={{ height: '0.2em' }} />
                                                        <div style={stylepub1}>
                                                            Image ou Text
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* ******************************** */}
                                                <div class="grid mb-1 p-2 ml-1">
                                                    <div class="col-12 " style={stylepub0} >
                                                        <div style={stylepub1}>
                                                            <b><img alt="Profil" src={photoProfil} style={{ borderRadius: '50%', width: '30px', height: '30px', verticalAlign: 'middle', marginRight: '2px' }} />  Tamby Arimisa</b> <label style={sytleFontDatePub}> , <u>date de la publication</u>  : 30 mars 2022 </label>
                                                        </div>
                                                        <div style={{ float: 'left', fontSize: '0.9em' }}> A publié à propos de : <b><i>{'Description'} qsdfsfsdkfklsdjfjsdljf kljsdk fjlsdjfjl sdjlfjlsdjf jsdljfljjkl hklsdhkfhjsdhjf khjdklshf kjhsdjkhfklsdhkfhlksdhkfhsd klhfksdjfhjksdhkfhsdkkjhdksfklsdhjlfk l hdklfjklsdhf</i></b> </div>
                                                    </div>
                                                    <div class="col-12 mb-1" style={stylepub01}>
                                                        <hr style={{ height: '0.2em' }} />
                                                        <div style={stylepub1}>
                                                            Image ou Text
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* ******************************** */}
                                                <div class="grid mb-1 p-2 ml-1">
                                                    <div class="col-12 " style={stylepub0} >
                                                        <div style={stylepub1}>
                                                            <b><img alt="Profil" src={photoProfil} style={{ borderRadius: '50%', width: '30px', height: '30px', verticalAlign: 'middle', marginRight: '2px' }} />  Tamby Arimisa</b> <label style={sytleFontDatePub}> , <u>date de la publication</u>  : 30 mars 2022 </label>
                                                        </div>
                                                        <div style={{ float: 'left', fontSize: '0.9em' }}> A publié à propos de : <b><i>{'Description'} qsdfsfsdkfklsdjfjsdljf kljsdk fjlsdjfjl sdjlfjlsdjf jsdljfljjkl hklsdhkfhjsdhjf khjdklshf kjhsdjkhfklsdhkfhlksdhkfhsd klhfksdjfhjksdhkfhsdkkjhdksfklsdhjlfk l hdklfjklsdhf</i></b> </div>
                                                    </div>
                                                    <div class="col-12 mb-1" style={stylepub01}>
                                                        <hr style={{ height: '0.2em' }} />
                                                        <div style={stylepub1}>
                                                            Image ou Text
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* ******************************** */}
                                                <div class="grid mb-1 p-2 ml-1">
                                                    <div class="col-12 " style={stylepub0} >
                                                        <div style={stylepub1}>
                                                            <b><img alt="Profil" src={photoProfil} style={{ borderRadius: '50%', width: '30px', height: '30px', verticalAlign: 'middle', marginRight: '2px' }} />  Tamby Arimisa</b> <label style={sytleFontDatePub}> , <u>date de la publication</u>  : 30 mars 2022 </label>
                                                        </div>
                                                        <div style={{ float: 'left', fontSize: '0.9em' }}> A publié à propos de : <b><i>{'Description'} qsdfsfsdkfklsdjfjsdljf kljsdk fjlsdjfjl sdjlfjlsdjf jsdljfljjkl hklsdhkfhjsdhjf khjdklshf kjhsdjkhfklsdhkfhlksdhkfhsd klhfksdjfhjksdhkfhsdkkjhdksfklsdhjlfk l hdklfjklsdhf</i></b> </div>
                                                    </div>
                                                    <div class="col-12 mb-1" style={stylepub01}>
                                                        <hr style={{ height: '0.2em' }} />
                                                        <div style={stylepub1}>
                                                            Image ou Text
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* ******************************** */}
                                                <div class="grid mb-1 p-2 ml-1">
                                                    <div class="col-12 " style={stylepub0} >
                                                        <div style={stylepub1}>
                                                            <b><img alt="Profil" src={photoProfil} style={{ borderRadius: '50%', width: '30px', height: '30px', verticalAlign: 'middle', marginRight: '2px' }} />  Tamby Arimisa</b> <label style={sytleFontDatePub}> , <u>date de la publication</u>  : 30 mars 2022 </label>
                                                        </div>
                                                        <div style={{ float: 'left', fontSize: '0.9em' }}> A publié à propos de : <b><i>{'Description'} qsdfsfsdkfklsdjfjsdljf kljsdk fjlsdjfjl sdjlfjlsdjf jsdljfljjkl hklsdhkfhjsdhjf khjdklshf kjhsdjkhfklsdhkfhlksdhkfhsd klhfksdjfhjksdhkfhsdkkjhdksfklsdhjlfk l hdklfjklsdhf</i></b> </div>
                                                    </div>
                                                    <div class="col-12 mb-1" style={stylepub01}>
                                                        <hr style={{ height: '0.2em' }} />
                                                        <div style={stylepub1}>
                                                            Image ou Text
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* ******************************** */}
                                                <div class="grid mb-1 p-2 ml-1">
                                                    <div class="col-12 " style={stylepub0} >
                                                        <div style={stylepub1}>
                                                            <b><img alt="Profil" src={photoProfil} style={{ borderRadius: '50%', width: '30px', height: '30px', verticalAlign: 'middle', marginRight: '2px' }} />  Tamby Arimisa</b> <label style={sytleFontDatePub}> , <u>date de la publication</u>  : 30 mars 2022 </label>
                                                        </div>
                                                        <div style={{ float: 'left', fontSize: '0.9em' }}> A publié à propos de : <b><i>{'Description'} qsdfsfsdkfklsdjfjsdljf kljsdk fjlsdjfjl sdjlfjlsdjf jsdljfljjkl hklsdhkfhjsdhjf khjdklshf kjhsdjkhfklsdhkfhlksdhkfhsd klhfksdjfhjksdhkfhsdkkjhdksfklsdhjlfk l hdklfjklsdhf</i></b> </div>
                                                    </div>
                                                    <div class="col-12 mb-1" style={stylepub01}>
                                                        <hr style={{ height: '0.2em' }} />
                                                        <div style={stylepub1}>
                                                            Image ou Text
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* ******************************** */}
                                                <div class="grid mb-1 p-2 ml-1">
                                                    <div class="col-12 " style={stylepub0} >
                                                        <div style={stylepub1}>
                                                            <b><img alt="Profil" src={photoProfil} style={{ borderRadius: '50%', width: '30px', height: '30px', verticalAlign: 'middle', marginRight: '2px' }} />  Tamby Arimisa</b> <label style={sytleFontDatePub}> , <u>date de la publication</u>  : 30 mars 2022 </label>
                                                        </div>
                                                        <div style={{ float: 'left', fontSize: '0.9em' }}> A publié à propos de : <b><i>{'Description'} qsdfsfsdkfklsdjfjsdljf kljsdk fjlsdjfjl sdjlfjlsdjf jsdljfljjkl hklsdhkfhjsdhjf khjdklshf kjhsdjkhfklsdhkfhlksdhkfhsd klhfksdjfhjksdhkfhsdkkjhdksfklsdhjlfk l hdklfjklsdhf</i></b> </div>
                                                    </div>
                                                    <div class="col-12 mb-1" style={stylepub01}>
                                                        <hr style={{ height: '0.2em' }} />
                                                        <div style={stylepub1}>
                                                            Image ou Text
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* ******************************** */}
                                                <div class="grid mb-1 p-2 ml-1">
                                                    <div class="col-12 " style={stylepub0} >
                                                        <div style={stylepub1}>
                                                            <b><img alt="Profil" src={photoProfil} style={{ borderRadius: '50%', width: '30px', height: '30px', verticalAlign: 'middle', marginRight: '2px' }} />  Tamby Arimisa</b> <label style={sytleFontDatePub}> , <u>date de la publication</u>  : 30 mars 2022 </label>
                                                        </div>
                                                        <div style={{ float: 'left', fontSize: '0.9em' }}> A publié à propos de : <b><i>{'Description'} qsdfsfsdkfklsdjfjsdljf kljsdk fjlsdjfjl sdjlfjlsdjf jsdljfljjkl hklsdhkfhjsdhjf khjdklshf kjhsdjkhfklsdhkfhlksdhkfhsd klhfksdjfhjksdhkfhsdkkjhdksfklsdhjlfk l hdklfjklsdhf</i></b> </div>
                                                    </div>
                                                    <div class="col-12 mb-1" style={stylepub01}>
                                                        <hr style={{ height: '0.2em' }} />
                                                        <div style={stylepub1}>
                                                            Image ou Text
                                                        </div>
                                                    </div>
                                                </div>
                                               
                                                <ScrollTop target="parent" threshold={100} className="custom-scrolltop" icon="pi pi-sort-up" />
                                            </ScrollPanel>

                                        </div>
                                    </center>
                                </div>
                            </div>
                        </div>
                        <div class="col-3 " >
                            <div class="grid m-1">
                                <div class="col-12 mb-1" style={styleA}>
                                    <center>
                                        <h4>Discussion </h4>
                                    </center>
                                </div>
                                <div class="col-12 " style={repere1}>

                                    <div className="scrollpanel-demo">
                                        <ScrollPanel style={cssNA} className="custombar1">
                                            <ListGroup variant="flush" style={stylefont}  >
                                                <ListGroup.Item action style={radiusA}>
                                                    <Conversation photoProfil={photoProfil} nom='RASOLONDRAIBE' prenom='Tamby Arimisa' role='Enseignant' />
                                                </ListGroup.Item>
                                                <ListGroup.Item action style={radiusA}>
                                                    <Conversation photoProfil={photoProfil} nom='CHAN LEE ' prenom='Karene' role='Enseignant' />
                                                </ListGroup.Item>
                                                <ListGroup.Item action style={radiusA}>
                                                    <Conversation photoProfil={photoProfil} nom='TAHINDRAZA' prenom='Eleo Antroine' role='Directeur' />
                                                </ListGroup.Item>
                                                <ListGroup.Item action style={radiusA}>
                                                    <Conversation photoProfil={photoProfil} nom='RATOVONATENAINA' prenom='Clairio Francil' role='Enseignant' />
                                                </ListGroup.Item>
                                                <ListGroup.Item action style={radiusA}>
                                                    <Conversation photoProfil={photoProfil} nom='EDDY' prenom='Tsalama' role='Enseignant' />
                                                </ListGroup.Item>                                           
                                                <ListGroup.Item action style={radiusA}>
                                                    <Conversation photoProfil={photoProfil} nom='RASOLONDRAIBE' prenom='Tamby Arimisa' role='Enseignant' />
                                                </ListGroup.Item>
                                                <ListGroup.Item action style={radiusA}>
                                                    <Conversation photoProfil={photoProfil} nom='CHAN LEE ' prenom='Karene' role='Enseignant' />
                                                </ListGroup.Item>
                                                <ListGroup.Item action style={radiusA}>
                                                    <Conversation photoProfil={photoProfil} nom='TAHINDRAZA' prenom='Eleo Antroine' role='Directeur' />
                                                </ListGroup.Item>
                                                <ListGroup.Item action style={radiusA}>
                                                    <Conversation photoProfil={photoProfil} nom='RATOVONATENAINA' prenom='Clairio Francil' role='Enseignant' />
                                                </ListGroup.Item>
                                                <ListGroup.Item action style={radiusA}>
                                                    <Conversation photoProfil={photoProfil} nom='EDDY' prenom='Tsalama' role='Enseignant' />
                                                </ListGroup.Item>                                           
                                                <ListGroup.Item action style={radiusA}>
                                                    <Conversation photoProfil={photoProfil} nom='RASOLONDRAIBE' prenom='Tamby Arimisa' role='Enseignant' />
                                                </ListGroup.Item>
                                                <ListGroup.Item action style={radiusA}>
                                                    <Conversation photoProfil={photoProfil} nom='CHAN LEE ' prenom='Karene' role='Enseignant' />
                                                </ListGroup.Item>
                                                <ListGroup.Item action style={radiusA}>
                                                    <Conversation photoProfil={photoProfil} nom='TAHINDRAZA' prenom='Eleo Antroine' role='Directeur' />
                                                </ListGroup.Item>
                                                <ListGroup.Item action style={radiusA}>
                                                    <Conversation photoProfil={photoProfil} nom='RATOVONATENAINA' prenom='Clairio Francil' role='Enseignant' />
                                                </ListGroup.Item>
                                                <ListGroup.Item action style={radiusA}>
                                                    <Conversation photoProfil={photoProfil} nom='EDDY' prenom='Tsalama' role='Enseignant' />
                                                </ListGroup.Item>                                           
                                            </ListGroup>
                                            <ScrollTop target="parent" threshold={100} className="custom-scrolltop" icon="pi pi-sort-up" />
                                        </ScrollPanel>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
