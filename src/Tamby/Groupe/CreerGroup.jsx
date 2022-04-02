import React, { useState, useEffect, Fragment, useRef } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import "moment/locale/fr";
import { Col, Form } from 'react-bootstrap';
import { ScrollPanel } from 'primereact/scrollpanel';
import { ScrollTop } from 'primereact/scrolltop';
import axios from 'axios';
import { TabView, TabPanel } from 'primereact/tabview';


const CreerGroup = (props) => {

    const stylebtnEnrg = {
        padding: '0.5rem 1rem',
        fontSize: ' 0.8rem',
        transition: 'background-color 0.2s, color 0.2s, border-color 0.2s, -shadow 0.2s',
        borderRadius: '3px',
        float: 'right',
        marginRight: '30px'
    };
    const [donneAjout, setdonneAjout] = useState({
        nom_groupe : '',
        description_groupe: '',
        code_prof: '',
        num_matricule : ''
    });
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
    const [user, setuser] = useState({ id: '' });
    useEffect(() => {
        const profile = decode(token);
        setuser({ id: profile.sub[0].num_matricule });
        setdonneAjout({...donneAjout, num_matricule: profile.sub[0].num_matricule})
    }, []);
    const token = localStorage.getItem("token");
    const creepub = async() => {
        // e.preventDefault();
       
          await  axios.post('http://127.0.0.1:5000/groupe/add',donneAjout, {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
      
            })
                .then(res => {
                    // const list = res.data.groupe;
                    // console.log(res.data.groupe) ;
                    // setlistGroup({ list });
                    // props.setmiss(1)
                    // console.log(res);
                }).catch(error => {
                    console.log(error);
                });
            }            
    const [cibelNon, setcibelNon] = useState('')
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
            <Button icon='pi pi-plus ' label='Créer un nouveau groupe' iconPos="right" className="p-button-rounded p-button-sm p-button-secondary"
                onClick={() => { onClick('displayPosition'); }} />
            <Dialog header="Création Groupe" visible={displayPosition} position={position} maximizable modal style={{ width: '25vw' }} footer={renderFooter('displayPosition')} onHide={() => onHide('displayPosition')}>
                <div className="p-m-0" style={stylefont} >
                    <Form >


                        <Form.Group as={Col} >
                            <Form.Label>Nom groupe* :</Form.Label>
                            <Form.Control type="text" style={style} name="nom_groupe " id='nom_groupe ' required placeholder="Entrez description de la publication" onChange={(e) => {
                                setdonneAjout({ ...donneAjout, nom_groupe : e.target.value })
                            }} />
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Label>Description* :</Form.Label>
                            <Form.Control type="text" style={style} name="description_groupe" id='description_groupe' required placeholder="Entrez description de la publication" onChange={(e) => {
                                setdonneAjout({ ...donneAjout, description_groupe: e.target.value })
                            }} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridAddress1">
                            <Form.Label>Tuteur *</Form.Label>
                            <Form.Control as="select" style={style} name="code_prof" id='code_prof'
                                onChange={(e) => {
                                    setdonneAjout({ ...donneAjout, code_prof: e.target.value })
                                }}
                            >
                                <option value="">Choisir tuteur...</option>
                                <option value="1562">RASLONDRAIBE Tamby Arimsa</option>
                                <option value="1564">RALOVANAINA Henrie</option>
                            </Form.Control>
                        </Form.Group>
                        
                    </Form>
                    <Button label="Publier" className="p-button-primary" icon="pi pi-send" style={stylebtnEnrg} iconPos="right" onClick={()=> creepub()}/>
                </div>
            </Dialog>
        </Fragment >
    )
}
export default CreerGroup;