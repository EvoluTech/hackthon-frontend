import React, { useState, useEffect, Fragment, useRef } from 'react';
import "moment/locale/fr";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { OverlayPanel } from 'primereact/overlaypanel';
import { useHistory } from 'react-router-dom';


const ListesR = (props) => {

    const stylefont = {
        fontSize: '0.8rem',
        fontWeight: 'normal',
        fontFamily: "apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
    };
    const histor = useHistory();
    const op = useRef(null);

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
            <div class="grid">
                <div className="col-12 md:col-6 lg:col-12 " >
                    <label style={{ cursor: 'pointer' }}
                        onClick={() => {
                            onClick('displayPosition');
                        }} onMouseOut={(e) => { op.current.hide(e) }} onMouseOver={(e) => { op.current.toggle(e) }} > <img alt="Profil" src={props.logoEM} style={{ borderRadius: '10%', width: '30px', height: '30px', verticalAlign: 'middle', marginRight: '4px' }} />   {props.nomGroupe}</label>
               
                </div>
                
            </div>

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
            <Dialog header="Ajouter une publication" visible={displayPosition} position={position} maximizable modal style={{ width: '33vw' }} footer={renderFooter('displayPosition')} onHide={() => onHide('displayPosition')}>
                <div className="p-m-0" style={stylefont} >

                </div>
            </Dialog>
        </Fragment >
    )
}
export default ListesR;