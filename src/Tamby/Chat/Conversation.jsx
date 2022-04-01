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
import useDemande from './UseDemande/useDemande'
import Profil from '../Profil/Profil'
import moment from 'moment';
import "moment/locale/fr"; 

const Conversation = (props) => {

    const { roomId } = '3658';
    const { demande, sendDemande } = useDemande(roomId);
    const [newNotification, setnewNotification] = React.useState({
        status: 0,
        message: 'aucun',
        action: null
    });
    const [charge, setcharge] = useState({chajoutS: false});

    const notificationAction = (etat, titre, message) => {
        toastTR.current.show({ severity: etat, summary: titre, detail: message, life: 3000 });
    }

    const jourd = moment().utcOffset('GMT+03:00').format("YYYY/MM/DD");
    
    const [donneAjout, setdonneAjout] = useState({
        num_matricule:props.monId,
        code_prof:props.idPers,
        mesg :'',
        dateD :jourd,
    });
    const token = localStorage.getItem("token");
    const enregistre = async () => { //AJout conversation

        setcharge({ chajoutS: true });
        await axios.post('127.0.0.1:5000/???', donneAjout,{
            headers: {
                'Authorization': `Bearer ${token}`
            },
  
        })
            .then(res => {
                console.log('Insertion conversatio reuissite');
            })
            .catch(err => {
                console.log(err);
            });
        setcharge({ chajoutS: false });
    }

    const toastTR = useRef(null);

    const onChangeNotif = (tamby, ms) => {
        setnewNotification({
            emmeteur: props.monId,
            recepeteur: tamby, 
            message: ms,
            nomemeteur: props.nom + ' ' + props.prenom,
            role: props.role,

        })
    };
    const envoyeNotification = () => {
        sendDemande(newNotification);
    };
    const op = useRef(null);


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
                <Button label="Envoyer" icon="pi pi-send" iconPos="right" tooltip={'Envoyer à ' + props.nom} tooltipOptions={{ position: 'top' }} className="p-button-sm p-button-secondary " style={stylebtnRec}
                    onClick={() => {
                        if (document.getElementById('mesg').value === '') {
                            document.getElementById('mesg').style.borderColor = 'red';
                        }
                        else {
                            enregistre();

                            envoyeNotification();
                            notificationAction('success', 'Message en privé envoyé !', '');
                            // if (envoye != '0') {
                            //     envoye = envoye + " ;- Vous envoyé un message à  " + props.nom+"("+props.num+")" + " : '"+document.getElementById('mesgpr').value+"' (Privé)";
                            // } else {
                            //     envoye = "Vous envoyé un message à  " + props.nom+"("+props.num+")" + " : '"+document.getElementById('mesgpr').value+"' (Privé)";
                            // }
                            // localStorage.setItem("envoye", envoye);
                            onHide(name);
                        }
                    }} />
            </div>
        );
    }

    return (
        <Fragment>
            <Toast ref={toastTR} position="bottom-right" />
            <label style={{ cursor: 'pointer' }} onClick={() => { onClick('displayPosition'); }} onMouseOut={(e) => { op.current.hide(e) }} onMouseOver={(e) => { op.current.toggle(e) }} ><img alt="Profil" src={props.photoProfil} style={{ borderRadius: '50%', width: '30px', height: '30px', verticalAlign: 'middle', marginRight: '4px' }} /> {props.nom + ' ' + props.prenom}  </label>

            <OverlayPanel ref={op} id="overlay_panel" style={{ width: '20em', height: '10em' }} className="overlaypanel-demo"  >
                <div class="grid">
                    <div className="col-12 md:col-6 lg:col-12 " >
                        <center>
                            <img alt="Profil" src={props.photoProfil} style={{ borderRadius: '50%', width: '35px', height: '25px', marginTop: '0.5rem', verticalAlign: 'middle' }} />
                            <br />
                            <label className="ml-3" style={{ cursor: 'pointer' }}><spam style={{ fontSize: '1em' }}><b>{props.nom + ' ' + props.prenom}</b></spam></label><br />
                        </center>
                    </div>
                    <div className="col-12 md:col-6 lg:col-12 ">
                        <label className="pl-2 pr-1" style={{ cursor: 'pointer', fontSize: '0.75em' }}>
                            Nom Profs  : <b>{props.nom + ' ' + props.prenom}</b>
                        </label> <br />
                        <label className="pl-2 pr-3" style={{ cursor: 'pointer', fontSize: '0.75em' }}>
                            Rôle: <b>{props.role}</b>
                        </label>
                    </div>
                </div>
            </OverlayPanel>

            <Dialog header="Envoyer  message" visible={displayPosition} position={position} maximizable modal style={{ width: '25vw' }} footer={renderFooter('displayPosition')} onHide={() => onHide('displayPosition')}>
                <div className="p-m-0" style={stylefont} >
                    <div class="grid">
                        <div className="col-12 md:col-6 lg:col-12 " >
                            <center>
                                <img alt="Profil" src={props.photoProfil} style={{ borderRadius: '50%', width: '80px', height: '80px', marginTop: '0.5rem', verticalAlign: 'middle' }} />
                                <br />
                                <label className="ml-3" style={{ cursor: 'pointer' }}><spam style={{ fontSize: '1em' }}><b>{props.nom + ' ' + props.prenom}</b></spam></label><br />
                            </center>
                        </div>
                        <div className="col-12 md:col-6 lg:col-12 ">
                            <label className="pl-2 pr-1" style={{ cursor: 'pointer', fontSize: '1em' }}>
                                <Person color="#0D0F34" size={35} className="p-2 mb-1" /> Nom Profs  : <b>{props.nom + ' ' + props.prenom}</b>
                            </label> <br />
                            <label className="pl-2 pr-3" style={{ cursor: 'pointer', fontSize: '1em' }}>
                                <PersonBadge color="#0D0F34" size={35} className="p-2 mb-1" />  Rôle: <b>{props.role}</b>
                            </label>
                        </div>
                        <div className="col-12 md:col-6 lg:col-12 ">
                            <Form >
                                <Form.Group as={Col} >
                                    <textarea class="form-control" rows="2" name="contenue" id='mesg' placeholder='Ecrire message...'
                                        onChange={(e) => {
                                            setdonneAjout({ ...donneAjout, mesg: e.target.value });
                                        }}
                                        onKeyUp={(e) => {
                                            if (document.getElementById('mesg').value != '') {
                                                document.getElementById('mesg').style.borderColor = 'green';
                                                onChangeNotif(props.idPers, e.target.value);
                                            }
                                            else {
                                                document.getElementById('mesg').style.borderColor = 'grey';
                                            }
                                        }}
                                    />
                                </Form.Group>
                            </Form>

                        </div>
                    </div>
                </div>
            </Dialog>
        </Fragment >
    )
}
export default Conversation;