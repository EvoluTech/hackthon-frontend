import React, { useState, useEffect, Fragment, useRef } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import "moment/locale/fr";
import {  ListGroup } from 'react-bootstrap';
import { ScrollPanel } from 'primereact/scrollpanel';
import { ScrollTop } from 'primereact/scrolltop';
import axios from 'axios';
import MiniChat2 from './MiniChat2.jsx'
import useDemande from '../UseDemande/useDemande.js';
import { TabView, TabPanel } from 'primereact/tabview';


const Groupe = (props) => {

    const styleform = {

        padding: '.375rem .75rem',
        fontSize: ' 0.8rem',
        fontWeight: '400',
        lineHeight: '1.5',
        backgroundClip: ' padding-box',
        border: '1px solid #ced4da',
        borderRadius: '.25rem',
    };
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
            <Toast ref={toastTR} position="top-right" />
            <Button icon='pi pi-send ' iconPos="right" tooltip="Message" className="p-button-rounded p-button-secondary"
                onClick={() => { onClick('displayPosition', 'top-right'); enregistremenDsc(recu);enregistremenDscs(envoye) }} style={{ float: 'right', width: '2.5em', height: '2.5em', boxShadow: '0 0 4px rgb(0 0 0 / 25%)' }} />
            <Dialog header="Discussion entre les utilisateurs" visible={displayPosition} position={position} maximizable modal style={{ width: '33vw' }} footer={renderFooter('displayPosition')} onHide={() => onHide('displayPosition')}>
                <div className="p-m-0" style={stylefont} >

                    <TabView style={{ fontSize: '1em' }} >
                        <TabPanel header={
                            'Connectés'
                        } >
                            {charge.chdisc ?
                                <i className="pi pi-spin pi-spinner p-mr-2" style={{ float: 'right', cursor: 'pointer', color: '#335F8A' }}> </i>
                                :
                                <i className="pi pi-refresh p-mr-2" style={{ float: 'right', cursor: 'pointer' }}
                                    onClick={() => { setmis(1) }}> Actualiser</i>}
                            <ScrollPanel style={{ height: '300px' }} className="custombar1">
                                <ListGroup variant="flush" style={stylefont} >
                                    {
                                        discussion.map((t, index) => (
                                            <>
                                                {t.typeutilisateur == 'Admin' ? null :
                                                    <ListGroup.Item action key={index} style={{ cursor: 'default' }}>   <img alt="Profil" src={props.url + '/storage/photoProfil/' + t.photo} style={{ borderRadius: '50%', width: '30px', height: '30px', verticalAlign: 'middle', marginRight: '4px' }} /> <b> {(t.nomstructure).toUpperCase()} : {t.prenomutilisateur} </b> ({t.typeutilisateur}) <MiniChat2 titre={'Envoyer de message'} url={props.url} photo={t.photo} msgP={msgP} setmsgP={setmsgP} utilisateur={props.utilisateur} idservice={props.idservice} structure={t.nomstructure} type={t.typeutilisateur} nom={t.prenomutilisateur} num={t.numimmutilisateur} /> </ListGroup.Item>
                                                }
                                            </>
                                        ))
                                    }
                                </ListGroup>
                                <ScrollTop target="parent" threshold={100} className="custom-scrolltop" icon="pi pi-sort-up" className="p-button-rounded p-button-secondary" />
                            </ScrollPanel>
                            <textarea class="form-control" style={styleform} rows="3" name="motif" id='motifm' placeholder='Message en public...'
                                onKeyUp={(e) => {
                                    if (document.getElementById('motifm').value != '') {
                                        document.getElementById('motifm').style.borderColor = 'green';
                                        onChangeNotif('Tous', e.target.value);
                                    }
                                    else {
                                        document.getElementById('motifm').style.borderColor = 'grey';
                                    }
                                }}
                            />
                            <Button label="Publié" tooltip={'Publié le message'} tooltipOptions={{ position: 'top' }} icon="pi pi-send" iconPos="right" className="p-button-sm p-button-secondary " style={stylebtnRec}
                                onClick={() => {
                                    if (document.getElementById('motifm').value === '') {
                                        document.getElementById('motifm').style.borderColor = 'red';
                                    }
                                    else {
                                        envoyeNotification();
                                        setmsgP([...msgP, { recp: null, mesg: document.getElementById('motifm').value }])
                                        notificationAction('success', 'Message en public envoyé !', '');
                                        onHide('displayPosition');
                                    }
                                }} />
                        </TabPanel>
                        <TabPanel header={
                            'Message réçu'
                        }>
                            <ScrollPanel style={{ height: '300px' }} className="custombar1">
                                <ul style={{ fontSize: '0.8em' }}>

                                    {recu == '0' ? null :

                                        test.map((t, index) => (
                                            <>
                                                <li key={index} style={{ listStyle: '-moz-initial' }}>
                                                    <b>{t[0]}</b>: <i>{t[1]}</i>
                                                </li>

                                            </>
                                        ))}

                                    {
                                        conversation.map((t, index) => (
                                            <>
                                                <li key={index} style={{ listStyle: '-moz-initial' }}>
                                                    <b>{t.utilisa}</b> {t.mpri != null ? <><b> a envoyé un message </b>: <i>"{t.mpri}"</i>  (Privé)</> : <> publié un message : <i>"{t.mpub}"</i> </>}
                                                </li>

                                            </>

                                        ))
                                    }
                                </ul>
                                <ScrollTop target="parent" threshold={100} className="custom-scrolltop" icon="pi pi-sort-up" className="p-button-rounded p-button-secondary" />
                            </ScrollPanel>
                        </TabPanel>
                        <TabPanel header={
                            'Message envoyé'
                        } >
                            <ScrollPanel style={{ height: '300px' }} className="custombar1">
                                <ul style={{ fontSize: '0.8em' }}>

                                    {envoye == '0' ? null :

                                        env.map((t, index) => (
                                            <>
                                                <li key={index} style={{ listStyle: '-moz-initial' }}>
                                                    <b>{t[0]}</b>: <i>{t[1]}</i>
                                                </li>

                                            </>
                                        ))}
                                    {
                                        msgP.map((t, index) => (
                                            <>
                                                <li key={index} style={{ listStyle: '-moz-initial' }}>

                                                    {t.recp != null ? <><b> Vous envoyé un message à {t.recp}  :</b> "<i>{t.mesg}</i>" </> : <> Vous envoyé un message <b>(en public)</b> : "<i>{t.mesg}</i>"   </>}
                                                </li>

                                            </>

                                        ))
                                    }
                                </ul>
                                <ScrollTop target="parent" threshold={100} className="custom-scrolltop" icon="pi pi-sort-up" className="p-button-rounded p-button-secondary" />
                            </ScrollPanel>
                        </TabPanel>


                    </TabView>
                    <center><small style={{ color: 'grey' }}><a href="">Copyright © 2021 design by Tamby Arimisa.</a></small> </center>
                </div>
            </Dialog>
        </Fragment >
    )
}
export default Groupe;