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
import axios from "axios";

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
    const token = localStorage.getItem("token");
    const [listPubl, setlistGroup] = useState([]);
    function decode() {
        if (token) {
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
    }

    useEffect(() => {
        const id = Location.state.idGroupe;
        axios.get(`http://127.0.0.1:5000/groupe/publication/list/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                const list = res.data.publication;
                // console.log(res.data.groupe) ;
                setlistGroup({ list });
            });
    }, [])

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
                                            {
                                                listPubl.list?.map((data, index) => (
                                                    <ScrollPanel style={cssNA} className="custombar1">

                                                        <div class="grid mb-4 p-2 ml-1" style={stylepub1}>
                                                            <div class="col-12 " style={stylepub0} >
                                                                <div class="grid mb-4 p-2 ml-1" style={stylepub1}>
                                                                    <div class="col-12 " style={{ float: 'left' }}>
                                                                        <label style={styleC} > <b ><img alt="Profil" src={photoProfil} style={{ borderRadius: '50%', width: '30px', height: '30px', verticalAlign: 'middle', marginRight: '2px' }} />  {data.nom_groupe}</b> <label style={sytleFontDatePub}> , <u>date de la publication</u> : {data.date_pub} </label></label>
                                                                        <br />
                                                                        <hr style={{ paddingT: '1px' }} />
                                                                    </div>
                                                                    <div class="col-12  " style={{ float: 'left' }}>
                                                                        <div style={{ float: 'left', fontSize: '0.9em', textAlign: 'left' }}> A publié à propos de : <b><i>{data.description_pub}</i></b> </div>
                                                                    </div>
                                                                    <div class="col-12 mb-1 " style={{ float: 'left' }}>
                                                                        <center>
                                                                            {data.contenu_pub}
                                                                        </center>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <ScrollTop target="parent" threshold={100} className="custom-scrolltop" icon="pi pi-sort-up" />
                                                    </ScrollPanel>
                                                ))
                                            }
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
                                            Parraigné par   : <b>{Location.state.tuteurGroupe}</b>
                                        </label> <br />
                                        <label className="pl-2 pr-3" style={{ cursor: 'pointer', fontSize: '0.9em' }}>
                                            Chef de groupe: <b>{Location.state.nomChefGroupe}</b>
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
