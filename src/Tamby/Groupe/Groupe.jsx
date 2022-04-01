import React, { useState, useEffect } from "react";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import Header from '../Menu/Header'
import { useLocation } from 'react-router-dom';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { ScrollPanel } from 'primereact/scrollpanel';
import { ScrollTop } from 'primereact/scrolltop';
import photoProfil from '../image/photoProfil.jpg'
import CreerPub from '../Groupe/CreerPub'
import { InputText } from 'primereact/inputtext';

export default function Groupe(props) {

    const Location = useLocation();
    const [cssNA, setcssNA] = useState({ filter: 'opacity(80%)', height: '530px' });
    // console.log(Location)


    const radiusA = {
        borderRadius: '50px',
        marginBottom: '3px',
        height: '42px'
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
        backgroundColor: 'white',
        borderRadius: '10px'
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
        fontSize: '0.7rem', padding: ' 0.4375rem 0.875rem', float: 'left', backgroundColor: '#82CBEB', border: '1px #41A69C'
    };

    const style = {
        display: 'block',
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
        float: 'left',
        width: '250px',
    }
    return (
        <div>
            <Header active='Groupe' />
            <div class="grid mt-1 ml-1 mr-1">
                <div className="col-12 md:col-6 lg:col-12 " >
                    <center>
                        <img src={Location.state.photoG} width="190px" height="90px" />
                        <h2>{Location.state.nomGroupe}</h2>
                    </center>
                </div>
                <div className="col-12 md:col-6 lg:col-12 " >
                    <div class="grid">
                        <div class="col-3 " >
                            <div class="grid m-1">
                                <div class="col-12 " style={styleA}>
                                    <h5>Recherche publication </h5>
                                    <hr />
                                </div>
                                <div class="col-12 " style={{ backgroundColor: '#F9F9F9', borderRadius: '10px', opacity: '100%' }}>
                                    <center>
                                        <InputText id="inputtext" className="p-inputtext-sm block mb-0" name="nom_utilisateur" placeholder='Recherche par...' style={style} />
                                        <Button icon="pi pi-search" className="p-button-sm p-button ml-1 mr-1" style={stylebtnRec} />
                                    </center>
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
                                <div class="col-12 mb-1 ml-5 " style={{ backgroundColor: '#F0F0F1', borderRadius: '10px', width: '90%' }}>
                                    <center>
                                        <div className="scrollpanel-demo">
                                            <ScrollPanel style={cssNA} className="custombar1">
                                                <div class="grid mb-4 p-2 ml-1" style={stylepub1}>
                                                    <div class="col-12 " style={stylepub0} >
                                                        <label style={styleC} > <b ><img alt="Profil" src={photoProfil} style={{ borderRadius: '50%', width: '30px', height: '30px', verticalAlign: 'middle', marginRight: '2px' }} />  Tamby Arimisa</b> <label style={sytleFontDatePub}> , <u>date de la publication</u> : 30 mars 2022 </label></label>
                                                        <br />
                                                        <hr style={{ paddingT: '2px' }} />
                                                        <div style={{ padding: "5px 10px 10px 10px", float: 'left', fontSize: '0.9em', textAlign: 'left' }}> A publié à propos de : <b><i>{'Description'} qsdfsfsdkfklsdjfjsdljf kljsdk fjlsdjfjl sdjlfjlsdjf jsdljfljjkl hklsdhkfhjsdhjf khjdklshf kjhsdjkhfklsdhkfhlksdhkfhsd klhfksdjfhjksdhkfhsdkkjhdksfklsdhjlfk l hdklfjklsdhf</i></b> </div>
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
                                                        <div style={{ padding: "5px 10px 10px 10px", float: 'left', fontSize: '0.9em', textAlign: 'left' }}> A publié à propos de : <b><i>{'Description'} qsdfsfsdkfklsdjfjsdljf kljsdk fjlsdjfjl sdjlfjlsdjf jsdljfljjkl hklsdhkfhjsdhjf khjdklshf kjhsdjkhfklsdhkfhlksdhkfhsd klhfksdjfhjksdhkfhsdkkjhdksfklsdhjlfk l hdklfjklsdhf</i></b> </div>
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
                                                        <div style={{ padding: "5px 10px 10px 10px", float: 'left', fontSize: '0.9em', textAlign: 'left' }}> A publié à propos de : <b><i>{'Description'} qsdfsfsdkfklsdjfjsdljf kljsdk fjlsdjfjl sdjlfjlsdjf jsdljfljjkl hklsdhkfhjsdhjf khjdklshf kjhsdjkhfklsdhkfhlksdhkfhsd klhfksdjfhjksdhkfhsdkkjhdksfklsdhjlfk l hdklfjklsdhf</i></b> </div>
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
                                    <h5>Informations du groupe </h5>
                                    <hr />
                                </div>
                                <div class="col-12 " style={{ backgroundColor: '#F9F9F9', borderRadius: '10px', opacity: '100%' }}>
                                    <div className="scrollpanel-demo">
                                        <label className="pl-2 pr-1" style={{ cursor: 'pointer', fontSize: '0.9em' }}>
                                            Parraigné par   : <b>{Location.state.nomChefGroupe}</b>
                                        </label> <br />
                                        <label className="pl-2 pr-3" style={{ cursor: 'pointer', fontSize: '0.9em' }}>
                                            Chef de groupe: <b>{Location.state.tuteurGroupe}</b>
                                        </label>
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
