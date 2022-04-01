import React, { useState, useEffect, Fragment, useRef } from 'react';
import "moment/locale/fr";
import { OverlayPanel } from 'primereact/overlaypanel';
import { useHistory } from 'react-router-dom';


const Liste = (props) => {

    const histor = useHistory();
    const op = useRef(null);
    const [displayMaximizable, setDisplayMaximizable] = useState(false);
    const [displayPosition, setDisplayPosition] = useState(false);
    const dialogFuncMap = {
        'displayMaximizable': setDisplayMaximizable,
        'displayPosition': setDisplayPosition
    }


    return (
        <Fragment>
            <label style={{ cursor: 'pointer' }} 
            onClick={() => { 
                histor.push({
                    pathname: '/ListGroupe/Groupe',
                    state: {
                        idGroupe: props.idGroupe,
                        nomGroupe: props.nomGroupe,
                        nomChefGroupe: props.chefGroupe,
                        tuteurGroupe: props.tuteur,
                        photoG:props.logoEM
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
        </Fragment >
    )
}
export default Liste;