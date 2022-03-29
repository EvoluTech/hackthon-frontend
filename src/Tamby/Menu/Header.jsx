import 'bootstrap/dist/css/bootstrap.min.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import React, { useState } from 'react';
import { Navbar, Nav,Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { House,HouseFill,Chat,ChatFill,People,PeopleFill,PersonCircle } from 'react-bootstrap-icons';


export default function Header(props) {

    const [Home, setHome] = useState("Home");
    const [Chats, setChats] = useState("Chat");
    const [Groupes, setGroupes] = useState("Groupe");
    const [Compte, setCompte] = useState("Compte");
    const histor = useHistory();

    console.log(histor)
   const styleheader={
        fontSize: '1.14em',
        backgroundColor: '#0F103E'
    }
   const stylenavbar={
        margin: '0px',
        padding: '3px',
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

    return (
        <div className="header">

            <header style={styleheader}  >
                <Navbar expand="lg" variant="dark" style={stylenavbar} >
                    <Navbar.Brand>   <center className="ml-2">EMIT</center></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" >

                            <Nav className="mr-auto ml-auto ">
                                
                                <Nav.Link className="mr-5"  onClick={() => {
                                    histor.push({
                                        pathname: "/Home",
                                        // state: {
                                        //     structure: props.tousDonne.structure,//List service
                                        //     services: props.tousDonne.service,
                                        //     utilisateur: props.tousDonne.utilisateur,
                                        // }
                                    })
                                }}> 
                                    {Home=='active'?  
                                    <HouseFill color="#82CBEB" size={40}  className="m-1" /> :
                                    <House color="white" size={40}  className="p-1" />
                                    }
                                </Nav.Link >

                                <Nav.Link className="mr-5"  onClick={() => {
                                    histor.push({
                                        pathname: '/Chat'
                                      
                                    })
                                }}>
                                     {Chats=='active'?  
                                    <ChatFill color="#82CBEB" size={40}  className="p-1" /> :
                                    <Chat color="white" size={40}  className="p-1" />
                                    } 

                                    </Nav.Link>
                                <Nav.Link  className="mr-5" onClick={() => {
                                    histor.push({
                                        pathname: '/Groupe'
                                    })
                                }}>
                                    {Groupes=='active'?  
                                    <PeopleFill color="#82CBEB" size={40}  className="p-1" /> :
                                    <People color="white" size={40}  className="p-1" />
                                    } 
                                </Nav.Link>

                            </Nav>
                            <Form inline >
                                <Nav className="pr-1" >
                                {/* <div className="mt-1">
                                        <Nav.Link  style={{ cursor: 'default' }} data-toggle="tooltip" title="Type de compte">
                                            <label><i className="pi pi-user p-mr-2"></i> {props.tousDonne.utilisateur.typeutilisateur}</label>
                                        </Nav.Link>
                                    </div> */}
                                    <div className="pl-1  pr-5" >
                                        <Nav.Link  data-toggle="tooltip" title="Voir votre profil !">
                                        
                                        <PersonCircle color="white" size={40}  className="p-1" />
                                        </Nav.Link>
                                    </div>
                                  
                                    {/* <div className="pl-1 pt-3 pr-2">
                                        <a className="power" data-toggle="tooltip" title={'Se déconnecter'}>
                                            <i className="pi pi-sign-out p-mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '1.55rem', cursor: 'pointer' }}
                                                onClick={() => {
                                                    deconnecter();
                                                }}
                                            />
                                        </a>
                                    </div> */}
                                   
                                </Nav>
                            </Form>
                        </Navbar.Collapse>
                </Navbar>
            </header>
        </div >
    );
}
