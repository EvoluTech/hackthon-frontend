import React, { useState,  Fragment } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Col, Form } from 'react-bootstrap';
import axios from 'axios';

const Profil = (props) => {


    const stylefont = {
        fontSize: '0.8rem',
        fontWeight: 'normal',
        fontFamily: "apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
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
            <Button icon='pi pi-user-edit ' iconPos="right" tooltip="Modifier  " className="p-button-rounded p-button-secondary"  onClick={() => {
                    onClick('displayPosition', 'top-right');
                   
                }} style={{ float: 'right', width: '2em', height: '2em', boxShadow: '0 0 4px rgb(0 0 0 / 25%)' }} />
            <Dialog header={props.titre} visible={displayPosition} position={position} maximizable modal style={{ width: '20vw' }} footer={renderFooter('displayPosition')} onHide={() => onHide('displayPosition')}>
                <div className="p-m-0" style={stylefont} >
                    <h1>Hello</h1>
                </div>
            </Dialog>
        </Fragment>
    )
}
export default Profil; 