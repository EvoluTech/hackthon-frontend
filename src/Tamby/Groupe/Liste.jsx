import React, { useState, useEffect, Fragment, useRef } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import "moment/locale/fr";
import { Col, Form } from 'react-bootstrap';
import { ScrollPanel } from 'primereact/scrollpanel';
import { ScrollTop } from 'primereact/scrolltop';
import axios from 'axios';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Person, PersonBadge } from 'react-bootstrap-icons';
import { useHistory } from 'react-router-dom';


const Liste = (props) => {

    const histor = useHistory();
    const op = useRef(null);
    const stylebtnEnrg = {
        padding: '0.5rem 1rem',
        fontSize: ' 0.8rem',
        transition: 'background-color 0.2s, color 0.2s, border-color 0.2s, -shadow 0.2s',
        borderRadius: '3px',
        float: 'right',
        marginRight: '30px'
    };
    const [donneAjout, setdonneAjout] = useState({
        typecontenu: '',
        cible: '',
        description_pub: '',
        contenue: ''
    })
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
        backgroundClip: ' padding-',
        border: '1px solid #ced4da',
        borderRadius: '.25rem'
    }
    const stylefont = {
        fontSize: '0.8rem',
        fontWeight: 'normal',
        fontFamily: "apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
    };
    const stylebtnRec = {
        fontSize: '0.68rem', padding: ' 0.4rem 0.8rem', float: 'right', marginTop: '5px'
    };
    const [position, setPosition] = useState('center');
    const [displayMaximizable, setDisplayMaximizable] = useState(false);
    const [displayPosition, setDisplayPosition] = useState(false);
    const dialogFuncMap = {
        'displayMaximizable': setDisplayMaximizable,
        'displayPosition': setDisplayPosition
    }
    const onClick = (name, position) => {
        dialogFuncMap[`${name}`](true);

        if (position) {
            setPosition(position);
        }
    }

    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
    }


    const renderFooter = (name) => {
        return (
            <div>
                <Button label="Fermer" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />

            </div>
        );
    }

    return (
        <Fragment>
            <label style={{ cursor: 'pointer' }} 
            onClick={() => { 
                histor.push({
                    pathname: '/Groupe',
                    state: {
                        idGroupe: props.idGroupe,
                        nomGroupe: props.nomGroupe,
                        nomChefGroupe: props.chefGroupe,
                        tuteurGroupe: props.tuteur
                    }
                })
             }} onMouseOut={(e)=>{op.current.hide(e)}} onMouseOver={(e) => { op.current.toggle(e) }} > <img alt="Profil" src={props.logoEM} style={{ borderRadius: '10%', width: '30px', height: '30px', verticalAlign: 'middle', marginRight: '4px' }} />   {props.nomGroupe}</label>

            <OverlayPanel ref={op} id="overlay_panel" style={{ width: '20em', height: '10em' }} className="overlaypanel-demo"  >
                <div class="grid">
                    <div className="col-12 md:col-6 lg:col-12 " >
                        <center>
                            <img alt="Profil" src={props.logoEM} style={{ borderRadius: '50%', width: '50px', height: '20px', marginTop: '0.5rem', verticalAlign: 'middle' }} />
                            <br />
                            <label className="ml-3" style={{ cursor: 'pointer' }}><spam style={{ fontSize: '1em' }}><b>{props.nomGroupe}</b></spam></label>
                        </center>
                    </div>
                    <div className="col-12 md:col-6 lg:col-12 " >
                        <label className="pl-2 pr-1" style={{ cursor: 'pointer', fontSize: '0.75em' }}>
                            Parraigné par   : <b>{props.tuteur}</b>
                        </label> <br />
                        <label className="pl-2 pr-3" style={{ cursor: 'pointer', fontSize: '0.75em' }}>
                          Chef de groupe: <b>{props.chefGroupe}</b>
                        </label>
                    </div>
                    <div className="col-12 md:col-6 lg:col-12 " >

                    </div>
                </div>
            </OverlayPanel>

            <Dialog header="Envoyer  message" visible={displayPosition} position={position} maximizable modal style={{ width: '30vw' }} footer={renderFooter('displayPosition')} onHide={() => onHide('displayPosition')}>
                <div className="p-m-0" style={stylefont} >
                    <div class="grid">
                        <div className="col-12 md:col-6 lg:col-12 " >
                            <center>
                                <img alt="Profil" src={props.logoEM} style={{ borderRadius: '50%', width: '80px', height: '80px', marginTop: '0.5rem', verticalAlign: 'middle' }} />
                                <br />
                                <label className="ml-3" style={{ cursor: 'pointer' }}><spam style={{ fontSize: '1em' }}><b>{props.nomGroupe}</b></spam></label><br />
                            </center>
                        </div>
                        <div className="col-12 md:col-6 lg:col-12 ">
                            <label className="pl-2 pr-1" style={{ cursor: 'pointer', fontSize: '1em' }}>
                                <Person color="#0D0F34" size={35} className="p-2 mb-1" /> Parraigné par   : <b>{props.tuteur}</b>
                            </label> <br />
                            <label className="pl-2 pr-3" style={{ cursor: 'pointer', fontSize: '1em' }}>
                                <PersonBadge color="#0D0F34" size={35} className="p-2 mb-1" /> Chef de groupe: <b>{props.chefGroupe}</b>
                            </label>
                        </div>
                        <div className="col-12 md:col-6 lg:col-12 ">
                            <Form >
                                <Form.Group as={Col} >
                                    <textarea class="form-control" rows="2" name="contenue" id='contenue' placeholder='Ecrire message...'
                                        onChange={(e) => {
                                            setdonneAjout({ ...donneAjout, contenue: e.target.value })
                                        }} />
                                </Form.Group>
                            </Form>
                            <Button label="Envoyer le message" className="p-button-primary" icon="pi pi-send" style={stylebtnEnrg} iconPos="right" />
                        </div>
                    </div>
                </div>
            </Dialog>
        </Fragment >
    )
}
export default Liste;