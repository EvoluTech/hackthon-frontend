import React, { useState, useEffect, useRef } from "react";
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
import Liste from '../Groupe/Liste'
import { ChatLeftDots } from "react-bootstrap-icons";
export default function Acceuill() {

    const [cssNA, setcssNA] = useState({ filter: 'opacity(80%)', height: '530px' });
    const stylefont = {
        fontSize: '0.8rem',
        fontWeight: 'normal',
        // backgroundColor:'grey',
        fontFamily: "apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
    };


    const radiusA = {
        borderRadius: '50px',
        marginBottom: '3px',
        height:'42px'
    }

    const styleA = {
        // border: '2px solid #82CBEB',
        backgroundColor: '',
        borderRadius: '10px 10px 0px 0px',
        color: '#c4c4c4'
    }

    const styleC = {
        borderRadius: '10px 10px 10px 10px',
        float: 'left',
        //backgroundColor: '#C4c4c4',//7F7F98
        color: '#0F103E',
        padding: '4px',
        fontSize: '0.8em'

    }
    const stylepub1 = {
        float: 'left',
        backgroundColor:'white',
        borderRadius:'10px'
        // border: '1px solid red'
    }
    const stylepub0 = {
        // border: '2px solid #82CBEB',
        borderRadius: '10px',
        color: 'Black',
    }

    const sytleFontDatePub = {
        fontSize: '0.8em'
    }
    const stylebtnRec = {
        fontSize: '0.7rem', padding: ' 0.4375rem 0.875rem', float: 'right', backgroundColor: '#82CBEB', border: '1px #41A69C'
    };

    const style = {
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
                <div className="col-12 md:col-6 lg:col-12 " >
                    <div style={{ float: 'right', marginRight: '30%' }}>
                        <center>
                            <Button icon="pi pi-search" className="p-button-sm p-button ml-1 mr-1" style={stylebtnRec} />
                            <input type="text" name={'namefiltre'} id='ch' onChange={{}} class="form-control sm mb-1" style={style} placeholder='Recherche ...' />
                            <select name="structure" id='str' className=' form-control mr-1' style={style}
                                onChange={(e) => { }} >
                                <option value='' selected>Filtrer par</option>
                                <option value='' >Par nom</option>
                                <option value='' >Par niveau</option>
                            </select>
                            <select name="structure" id='str' className=' form-control mr-1' style={style}
                                onChange={(e) => { }} >
                                <option value='' selected>Recherche </option>
                                <option value='pub' >Publication</option>
                                <option value='person' >Personne</option>
                            </select>
                        </center>
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-12 " >
                    <div class="grid">
                        <div class="col-3 " >
                            <div class="grid m-1">
                                <div class="col-12 " style={styleA}>
                                        <h5>Liste des groupes </h5>
                                        <hr/>
                                </div>
                                <div class="col-12 " style={{backgroundColor:'#F9F9F9',borderRadius:'10px',opacity:'100%'}}>
                                    <div className="scrollpanel-demo">
                                        <ScrollPanel style={cssNA} className="custombar1">
                                            <ListGroup variant="flush" style={stylefont}  >
                                                <ListGroup.Item action style={radiusA}>
                                                    <Liste logoEM={logoEM} idGroupe={'1'} nomGroupe={'EMIFI (Emit Mikalo Fiderana)'} chefGroupe={'Tamby Arimisa (M1 DA2I)'} tuteur={'YVON Mentanasoa'} />
                                                </ListGroup.Item>
                                                <ListGroup.Item action style={radiusA}>
                                                    <Liste idGroupe={'2'} logoEM={logoEM} nomGroupe={'EMIKI (Emit Milalao Kitra)'} chefGroupe={'Tamby Arimisa (M1 DA2I)'} tuteur={'YVON Mentanasoa'} />
                                                </ListGroup.Item>
                                                <ListGroup.Item action style={radiusA}>
                                                    <Liste idGroupe={'3'} logoEM={logoEM} nomGroupe={'EMIBA (Emit Milalao Baolina)'} chefGroupe={'Tamby Arimisa (M1 DA2I)'} tuteur={'YVON Mentanasoa'} />
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
                                <div class="col-12 mb-1" >
                                    <center>
                                        <CreerPub />
                                    </center>
                                </div>
                                <div class="col-12 mb-1 ml-5 "  style={{backgroundColor:'#F0F0F1',borderRadius:'10px',width:'90%'}}>
                                    <center>
                                        <div className="scrollpanel-demo">
                                            <ScrollPanel style={cssNA} className="custombar1">
                                                <div class="grid mb-4 p-2 ml-1" style={stylepub1}>
                                                    <div class="col-12 " style={stylepub0} >
                                                        <label style={styleC} > <b ><img alt="Profil" src={photoProfil} style={{ borderRadius: '50%', width: '30px', height: '30px', verticalAlign: 'middle', marginRight: '2px' }} />  Tamby Arimisa</b> <label style={sytleFontDatePub}> , <u>date de la publication</u> : 30 mars 2022 </label></label>
                                                        <br />
                                                        <hr style={{ paddingT: '2px' }} />
                                                        <div style={{ padding:"5px 10px 10px 10px", float: 'left', fontSize: '0.9em',textAlign: 'left' }}> A publié à propos de : <b><i>{'Description'} qsdfsfsdkfklsdjfjsdljf kljsdk fjlsdjfjl sdjlfjlsdjf jsdljfljjkl hklsdhkfhjsdhjf khjdklshf kjhsdjkhfklsdhkfhlksdhkfhsd klhfksdjfhjksdhkfhsdkkjhdksfklsdhjlfk l hdklfjklsdhf</i></b> </div>
                                                        <div  >
                                                            Image ou Text
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="grid mb-4 p-2 ml-1" style={stylepub1}>
                                                    <div class="col-12 " style={stylepub0} >
                                                        <label style={styleC} > <b ><img alt="Profil" src={photoProfil} style={{ borderRadius: '50%', width: '30px', height: '30px', verticalAlign: 'middle', marginRight: '2px' }} />  Tamby Arimisa</b> <label style={sytleFontDatePub}> , <u>date de la publication</u> : 30 mars 2022 </label></label>
                                                        <br />
                                                        <hr style={{ paddingT: '2px' }} />
                                                        <div style={{ padding:"5px 10px 10px 10px", float: 'left', fontSize: '0.9em',textAlign: 'left' }}> A publié à propos de : <b><i>{'Description'} qsdfsfsdkfklsdjfjsdljf kljsdk fjlsdjfjl sdjlfjlsdjf jsdljfljjkl hklsdhkfhjsdhjf khjdklshf kjhsdjkhfklsdhkfhlksdhkfhsd klhfksdjfhjksdhkfhsdkkjhdksfklsdhjlfk l hdklfjklsdhf</i></b> </div>
                                                        <div  >
                                                            Image ou Text
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="grid mb-4 p-2 ml-1" style={stylepub1}>
                                                    <div class="col-12 " style={stylepub0} >
                                                        <label style={styleC} > <b ><img alt="Profil" src={photoProfil} style={{ borderRadius: '50%', width: '30px', height: '30px', verticalAlign: 'middle', marginRight: '2px' }} />  Tamby Arimisa</b> <label style={sytleFontDatePub}> , <u>date de la publication</u> : 30 mars 2022 </label></label>
                                                        <br />
                                                        <hr style={{ paddingT: '2px' }} />
                                                        <div style={{ padding:"5px 10px 10px 10px", float: 'left', fontSize: '0.9em',textAlign: 'left' }}> A publié à propos de : <b><i>{'Description'} qsdfsfsdkfklsdjfjsdljf kljsdk fjlsdjfjl sdjlfjlsdjf jsdljfljjkl hklsdhkfhjsdhjf khjdklshf kjhsdjkhfklsdhkfhlksdhkfhsd klhfksdjfhjksdhkfhsdkkjhdksfklsdhjlfk l hdklfjklsdhf</i></b> </div>
                                                        <div  >
                                                            Image ou Text
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="grid mb-4 p-2 ml-1" style={stylepub1}>
                                                    <div class="col-12 " style={stylepub0} >
                                                        <label style={styleC} > <b ><img alt="Profil" src={photoProfil} style={{ borderRadius: '50%', width: '30px', height: '30px', verticalAlign: 'middle', marginRight: '2px' }} />  Tamby Arimisa</b> <label style={sytleFontDatePub}> , <u>date de la publication</u> : 30 mars 2022 </label></label>
                                                        <br />
                                                        <hr style={{ paddingT: '2px' }} />
                                                        <div style={{ padding:"5px 10px 10px 10px", float: 'left', fontSize: '0.9em',textAlign: 'left' }}> A publié à propos de : <b><i>{'Description'} qsdfsfsdkfklsdjfjsdljf kljsdk fjlsdjfjl sdjlfjlsdjf jsdljfljjkl hklsdhkfhjsdhjf khjdklshf kjhsdjkhfklsdhkfhlksdhkfhsd klhfksdjfhjksdhkfhsdkkjhdksfklsdhjlfk l hdklfjklsdhf</i></b> </div>
                                                        <div  >
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
                                <div class="col-12 " style={styleA}>
                                        <h5>Discussion </h5>
                                        <hr/>
                                </div>
                                <div class="col-12 " style={{backgroundColor:'#F9F9F9',borderRadius:'10px',opacity:'100%'}}>
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
