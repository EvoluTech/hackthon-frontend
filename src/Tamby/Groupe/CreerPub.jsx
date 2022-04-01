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


const CreerPub = (props) => {

    const stylebtnEnrg = {
        padding: '0.5rem 1rem',
        fontSize: ' 0.8rem',
        transition: 'background-color 0.2s, color 0.2s, border-color 0.2s, -shadow 0.2s',
        borderRadius: '3px',
        float: 'right',
        marginRight: '30px'
    };
    const current = new Date();
    const [donneAjout, setdonneAjout] = useState({
        typecontenu: '',
        cible: '',
        description_pub: '',
        contenue: '',
        num_matricule: '',
        role: localStorage.getItem("role"),
        date_pub: `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`,
    });
    const token = localStorage.getItem("token");
    const creepub = async() => {
    // e.preventDefault();
      await  axios.post('http://127.0.0.1:5000/create/publication',donneAjout, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
  
        })
            .then(res => {
                // const list = res.data.groupe;
                // console.log(res.data.groupe) ;
                // setlistGroup({ list });
                console.log(res);
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
        // setuser(profile.sub[0]);
        setdonneAjout({...donneAjout,num_matricule:profile.sub[0].num_matricule})
    },[])

    const renderFooter = (name) => {
        return (
            <div>
                <Button label="Fermer" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />

            </div>
        );
    }

    return (
        <Fragment>
            <Button icon='pi pi-plus ' label='Nouvelle Publication' iconPos="right" className="p-button-rounded p-button-sm p-button-secondary"
                onClick={() => { onClick('displayPosition'); }} />
            <Dialog header="Ajouter une publication" visible={displayPosition} position={position} maximizable modal style={{ width: '33vw' }} footer={renderFooter('displayPosition')} onHide={() => onHide('displayPosition')}>
                <div className="p-m-0" style={stylefont} >
                    <Form >


                        <Form.Group as={Col} >
                            <Form.Label>Description* :</Form.Label>
                            <Form.Control type="text" style={style} name="description_pub" id='description_pub' required placeholder="Entrez description de la publication" onChange={(e) => {
                                setdonneAjout({ ...donneAjout, description_pub: e.target.value })
                            }} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridAddress1">
                            <Form.Label>Contenue*</Form.Label>
                            <Form.Control as="select" style={style} name="typecontenue" id='contenue'
                                onChange={(e) => {
                                    setdonneAjout({ ...donneAjout, typecontenu: e.target.value })
                                }}
                            >
                                <option value="">Choisir type de plublication...</option>
                                <option value="text">Textuel</option>
                                <option value="image">Images</option>
                            </Form.Control>
                        </Form.Group>
                        {donneAjout.typecontenu == 'text' ?
                            <Form.Group as={Col} >

                                <textarea class="form-control" rows="2" name="contenue" id='contenue' placeholder='Entrez le contenue de la publication...'
                                    onChange={(e) => {
                                        setdonneAjout({ ...donneAjout, contenue: e.target.value })
                                    }} />
                            </Form.Group>
                            :
                            donneAjout.typecontenu == 'image' ?
                                // <Form.Group as={Col} controlId="formGridState">
                                //     <Form.File name={"fichier"} id='f'
                                //         accept=".jpg"
                                //         label="Choisir un  image"
                                //         className="inputClass"
                                //         onChange={(e) => { }} />
                                // onChange={(e) => {
                                //     setdonneAjout({ ...donneAjout, cible: e.target.value })
                                // }}
                                // </Form.Group>
                                null
                                :
                                null
                        }
                        <Form.Group as={Col} controlId="formGridAddress1">
                            <Form.Label>Cible de la pub*</Form.Label>
                            <Form.Control as="select" style={style} name="cible" id='cible'
                                onChange={(e) => {
                                    setcibelNon(e.target.value);
                                    if (e.target.value == 'tous' || e.target.value == 'prof') {
                                        setdonneAjout({ ...donneAjout, cible: 'tous' })
                                    }
                                }}>
                                <option value="">Cible de la plublication...</option>
                                <option value="tous">Pour tous le monde</option>
                                <option value="prof">Pour tous les profs (Seulement)</option>
                                <option value="M2">Pour M2 </option>
                                <option value="M1">Pour M1 </option>
                                <option value="L3">Pour L3 </option>
                                <option value="L2">Pour L2 </option>
                                <option value="L1">Pour L1 </option>
                            </Form.Control>
                        </Form.Group>
                        {(cibelNon == 'M2' || cibelNon == 'M1'|| cibelNon == 'L3' || cibelNon == 'L2' || cibelNon == 'L1') ?
                            <Form.Group as={Col} controlId="formGridAddress1">
                                <Form.Label>Cible de la pub*</Form.Label>
                                <Form.Control as="select" style={style} name="cible" id='cible'
                                    onChange={(e) => {
                                        setdonneAjout({ ...donneAjout, cible: cibelNon + '' + e.target.value })
                                    }}>
                                    <option value="">Choisir le parcours...</option>
                                    <option value="tous">Tous</option>
                                    <option value="DASI">Pour DASI </option>
                                    <option value="AES">Pour AES </option>
                                    <option value="RPM">Pour RPM </option>

                                </Form.Control>
                            </Form.Group>
                            :
                            null
                        }
                    </Form>
                    <Button label="Publier" className="p-button-primary" icon="pi pi-send" style={stylebtnEnrg} iconPos="right" onClick={()=>
                        {creepub()}}/>
                </div>
            </Dialog>
        </Fragment >
    )
}
export default CreerPub;