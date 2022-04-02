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
import CreerGroup from '../Groupe/CreerGroup' ;
import { InputText } from 'primereact/inputtext';
import axios from "axios";
export default function ListGroupe() {

    const [cssNA, setcssNA] = useState({ filter: 'opacity(80%)', height: '530px' });
    const stylefont = {
        fontSize: '1rem',
        fontWeight: 'normal',        // backgroundColor:'grey',
        fontFamily: "apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
    };


    const radiusA = {
        // borderRadius: '50px',
        marginBottom: '5px',
        height: '42px',
        float: 'left'

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
        width: '650px'
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
    const [listGroup, setlistGroup] = useState([]);
    const [listProf, setlistProfOnline] = useState([]);
    const [user, setuser] = useState({ id: '' });
    const token = localStorage.getItem("token");
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
        const profile = decode(token);
        setuser({ id: profile.sub[0].num_matricule });
        console.log(profile.sub[0]);
        axios.get('http://127.0.0.1:5000/groupe/list', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                const list = res.data.groupe;
                // console.log(res.data.groupe) ;
                setlistGroup({ list });
            });
        axios.get(' http://127.0.0.1:5000/online/professeur', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                const list = res.data.professeur;
                setlistProfOnline({ list })
            });
        


    }, []);
    return (
        <div>
            <Header active='Groupe' monId={'3353'} />
            <div class="grid mt-1 ml-1 mr-1">
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
                                <div class="col-12 " style={styleA}>
                                    <center>
                                        <CreerGroup />
                                    </center>
                                </div>
                                <div class="col-12 mb-1  " style={{ border: '2px solid #F0F0F1' }}>
                                    
                                        <div className="scrollpanel-demo">
                                        <ScrollPanel style={cssNA} className="custombar1">
                                            <ListGroup variant="flush" style={stylefont}  >
                                                {/* <ListGroup.Item action style={radiusA}>
                                                    <Liste logoEM={logoEM} idGroupe={'1'} nomGroupe={'EMIFI (Emit Mikalo Fiderana)'} chefGroupe={'Tamby Arimisa (M1 DA2I)'} tuteur={'YVON Mentanasoa'} />
                                                </ListGroup.Item> */}
                                                {
                                                    // console.log(listGroup.list)
                                                    listGroup.list?.map((data, index) => (
                                                        <ListGroup.Item action key={index} style={radiusA}>
                                                            <Liste logoEM={logoEM} idGroupe={data.idgroup} nomGroupe={data.nom_groupe} chefGroupe={data.nom_chef_groupe + ' ' + data.prenom_chef_groupe} tuteur={data.nom_tuteur + ' ' + data.prenom_tuteur} />
                                                        </ListGroup.Item>
                                                    )
                                                    )
                                                }
                                            </ListGroup>
                                            <ScrollTop target="parent" threshold={100} className="custom-scrolltop" icon="pi pi-sort-up" />
                                        </ScrollPanel>
                                        </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col-3 " >
                            <div class="grid m-1">
                                <div class="col-12 " style={styleA}>
                                    <h5>Discussion </h5>
                                    <hr />
                                </div>
                                <div class="col-12 " style={{ backgroundColor: '#F9F9F9', borderRadius: '10px', opacity: '100%' }}>
                                    <div className="scrollpanel-demo">
                                        <ScrollPanel style={cssNA} className="custombar1">
                                        <ListGroup variant="flush" style={stylefont} >
                                                {
                                                    listProf.list?.map((data, index) => (
                                                        <ListGroup.Item action key={index} style={radiusA}>
                                                            <Conversation monId={user.id} idPers={data.code_prof} photoProfil={photoProfil} nom={data.nom} prenom={data.prenom} role={data.role} />
                                                        </ListGroup.Item>
                                                    ))
                                                }
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
