import 'bootstrap/dist/css/bootstrap.min.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import React, { useState, useRef, useEffect } from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { OverlayPanel } from 'primereact/overlaypanel';
import Profil from '../Profil/Profil'
import photoProfil from '../image/photoProfil.jpg'
import { Bell, BellFill, List, AlignCenter, AlignMiddle, House, HouseFill, Chat, ChatFill, People, PeopleFill, PersonCircle, Search } from 'react-bootstrap-icons';


export default function Header(props) {

    const [Home, setHome] = useState("Home");
    const [Chats, setChats] = useState("Chat");
    const [Groupes, setGroupes] = useState("Groupe");
    const [Compte, setCompte] = useState("Compte");
    const [user,setuser] = useState({});
    const histor = useHistory();
    const token = localStorage.getItem("token");
    const profil = useRef(null);
    const footer = (
        <span>
            <Button label="Save" icon="pi pi-check" />
            <Button label="Cancel" icon="pi pi-times" className="p-button-secondary ml-2" />
        </span>
    );

    const styleheader = {
        fontSize: '1.14em',
        backgroundColor: '#0F103E'
    }
    const stylenavbar = {
        margin: '0px',
        padding: '0px',
        height:'50px',
        fontSize:'0.8em'
    }

    if (props.active === Home) {
        setHome("active");
        setChats("");
        setCompte("");
    }
    else if (props.active === Chats) {
        setChats("active");
        setHome("");
        setCompte("");
    }
    else if (props.active === Compte) {
        setCompte("active");
        setHome("");
        setChats("");
        setGroupes("");
    }
    else if (props.active === Groupes) {
        setGroupes("active");
        setCompte("");
        setHome("");
        setChats("");
    }

    const recherche = {
        fontSize: '0.99em',
        cursor: 'pointer',
        marginTop: '5px',
        marginLeft: '30px'
    }
    const repere1 = {
        border: '1px solid red'
    }
    function decode() {
        if (token) {   var base64Url = token.split(".")[1];
           var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
           var jsonPayload = decodeURIComponent(
             atob(base64)
               .split("")
               .map(function (c) {
                 return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
               })
               .join("")
           );
           
           return JSON.parse(jsonPayload);}
       }
    
    useEffect(() => {
        const profile = decode(token);
        setuser(profile.sub[0]);
    },[])

  function logout(){
      localStorage.clear();
  }

    return (
        <>
            <div className="header">

                <header style={styleheader}  >
                    <Navbar expand="lg" variant="dark" style={stylenavbar} >
                        <Navbar.Brand >   <center className="ml-2">EMIT</center></Navbar.Brand>
                        <Navbar.Brand style={recherche}>   Recherche  <Search color="white" size={30} className="p-1" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" >
                            <Nav className="mr-auto ml-auto ">
                                <Nav.Link className="mr-5" onClick={() => {
                                    histor.push({
                                        pathname: "/Home",
                                        // state: {
                                        //     structure: props.tousDonne.structure,//List service
                                        //     services: props.tousDonne.service,
                                        //     utilisateur: props.tousDonne.utilisateur,
                                        // }
                                    })
                                }}>
                                    {Home == 'active' ?
                                        <HouseFill color="#82CBEB" size={35} className="p-1" /> :
                                        <House color="white" size={35} className="p-1" />
                                    }
                                </Nav.Link >

                                <Nav.Link className="mr-5" onClick={() => {
                                    histor.push({
                                        pathname: '/Chat'

                                    })
                                }}>
                                    {Chats == 'active' ?
                                        <ChatFill color="#82CBEB" size={35} className="p-1" /> :
                                        <Chat color="white" size={35} className="p-1" />
                                    }

                                </Nav.Link>
                                <Nav.Link className="mr-5" onClick={() => {
                                    histor.push({
                                        pathname: '/Groupe'
                                    })
                                }}>
                                    {Groupes == 'active' ?
                                        <PeopleFill color="#82CBEB" size={35} className="p-1" /> :
                                        <People color="white" size={35} className="p-1" />
                                    }
                                </Nav.Link>
                                <Nav.Link className="mr-5">
                                    <Bell color="white" size={35} className="p-1" />
                                </Nav.Link>
                            </Nav>
                            <Form inline >
                                <Nav className="pr-1" >
                                    <div className="pl-1  pr-5" >
                                        <Nav.Link data-toggle="tooltip" title="Votre profil" onClick={(e) => profil.current.toggle(e)}>

                                            <PersonCircle color="white" size={35} className="p-1" />
                                        </Nav.Link>
                                    </div>
                                    <div className="pl-1  pr-5" >
                                        <Nav.Link data-toggle="tooltip" title="Qlch">

                                            <List color="white" size={35} className="p-1" />
                                        </Nav.Link>
                                    </div>
                                </Nav>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                </header>
            </div >
            <OverlayPanel ref={profil} id="overlay_panel" style={{ width: '24em' }} className="overlaypanel-demo">
                <div class="grid">
                    <div className="col-12 md:col-6 lg:col-12 " style={repere1}>
                        <center>
                            <img alt="Profil" src={photoProfil} style={{ borderRadius: '50%', width: '80px', height: '80px', marginTop: '0.5rem', verticalAlign: 'middle' }} />
                            <br/>
                            <Profil  titre='Modification Profil' />
                      
                            <label  className="ml-3" style={{ cursor: 'pointer'}}><spam style={{fontSize:'1em'}}><b>{user.nom}</b></spam></label>
                     
                        </center>
                    </div>
                    <div className="col-12 md:col-6 lg:col-12 " style={repere1}>
                    <div>

            <Card title="Advanced Card" subTitle="Subtitle" style={{ width: '350px' }} footer={footer}>
                <p className="m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
            </Card>
        </div>
                    </div>
                    <div className="col-12 md:col-6 lg:col-12 " style={repere1}>

                    </div>
                </div>
            </OverlayPanel>
        </>

    );
}
