import React, { useState, useEffect } from "react";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Dropdown } from 'primereact/dropdown';
import { useHistory,useParams } from 'react-router-dom';
import { QuestionDiamond, PersonBadge, Person, Pc, BarChartSteps, Lock, PersonBoundingBox } from 'react-bootstrap-icons';
import axios from "axios";


function Etudiant() {
    const history = useHistory();
    const [parcours, setparcours] = useState({name:'Aucun'});
    const [validation,setVlidation] = useState({
        mdp:"ok",
        nom_utilisateur:"ok",
        num_matricule:"ok",
        prenom:"ok",
        niveau:"ok",
        parcours:"ok",
        confmdp:"ok",
        role:"ok"
    })
    const [donneAjout, setdonneAjout] = useState({
        num_matricule:'',
        mdp:'',
        confmdp:'',
        niveau:'',
        parcours:'',
        role:''
    });
    const formAjout = (e) => {
        const ds = { ...donneAjout, [e.target.name]: e.target.value };
      setdonneAjout(ds);
      const valider = { ...validation, [e.target.name]: "ok" };
      setVlidation(valider);

    }
    const fonctNiveau = () => {
        const ds = { ...donneAjout, niveau: niveau.name };
        setdonneAjout(ds);
    }
    
    
    const typeParcours = [
        { name: 'DA21'},
        { name: 'AES' },
        { name: 'RPM' }
    ];
    const [niveau, setniveau] = useState({name:''})
    const typeNiveau = [
        { name: 'L1' },
        { name: 'L2' },
        { name: 'L3' },
        { name: 'M1' },
        { name: 'M2' }
    ];
    const [role, setrole] = useState(null)
    const typeRole = [
        { name: 'Aucun' },
        { name: 'Delegue' },
        { name: 'President ' }
    ];
    //Css

    const styleInput = {
        border: 'none',
        borderRadius: '0px 25px 25px 0px',
        opacity: '40%',
        color: 'Black',
        height: '33px'
    }
    const styleCoteD = {
        background: '#0F103E',
        opacity: '96%'
    }

    const styleCConn = {
        color: '#EBE7D9',
        fontFamily: 'Verdana',
        // Top:'20px'
    }
    const styleMarginB = {
        marginBottom: "20px"
        // Top:'20px'
    }
    
    const handleSubmit = async (event) => {
		event.preventDefault();
        console.clear();
        if (donneAjout.mdp === "") {
            setVlidation({mdp: "non"})
        }
        if (donneAjout.num_matricule === "") {
            setVlidation({num_matricule: "non"})
        }
        if (niveau.name === "") {
            setVlidation({niveau: "non"})
        }
        if (parcours.name === "") {
            setVlidation({parcours: "non"})
        }
        if (donneAjout.nom_utilisateur === "") {
            setVlidation({mdp: "non"})
        }
        if (donneAjout.prenom_utilisateur === "") {
            setVlidation({prenom_utilisateur: "non"})
        }
        if (role.name === "") {
            setVlidation({role: "non"})
        }
        const post_etudiant = {
            mdp: donneAjout.mdp,
            niveau: niveau.name,
            nom: donneAjout.nom_utilisateur,
            num_matricule: donneAjout.num_matricule,
            parcours: parcours.name,
            prenom: donneAjout.prenom_utilisateur,
            role: role.name
        }
			try {
			
			/*	const response = await axios.post(
					"http://127.0.0.1:5000/etudiant/add"
				);*/
             
              console.log(post_etudiant);
			} catch (error) {
				console.log(error.response);
			}
        }
    return (
        <div className="p-fluid">

            <div className="p-field p-col-12" style={styleMarginB}>
                <div className="p-inputgroup" style={{ padding: '0px 50px 0px 50px' }}>
                    <PersonBadge color="#0D0F34" size={33} style={{ backgroundColor: '#E7F2FA', borderRadius: '4px 0px 0px 4px' }} className="p-1" />
                    <span className="p-float-label">
                        <InputText id="inputtext" style={styleInput} className="p-inputtext-sm block mb-0" name="num_matricule" validateOnly={true} onChange={(e)=>formAjout(e)} />
                        <label htmlFor="inputtext" style={{ color: '#EEEFEF', fontSize: '0.8em' }} >Numéro matricule</label>
                    </span>
                </div>
                {  validation.num_matricule=='ok'? null : <label style={{color:"red",marginBottom:"2px",fontSize: '0.8em',fontSize: '0.8em'}}>numero matricule requis</label>}
            </div>
            <div className="p-field p-col-12" style={styleMarginB}>
                <div className="p-inputgroup" style={{ padding: '0px 50px 0px 50px' }}>
                    <Person color="#0D0F34" size={33} style={{ backgroundColor: '#E7F2FA', borderRadius: '4px 0px 0px 4px' }} className="p-1" />
                    <span className="p-float-label">
                        <InputText id="inputtext" style={styleInput} className="p-inputtext-sm block mb-0" name="nom_utilisateur" onChange={(e)=>formAjout(e)}  />
                        <label htmlFor="inputtext" style={{ color: '#EEEFEF', fontSize: '0.8em' }} >Nom d'utilisateur</label>
                    </span>
                </div>
                {  validation.nom_utilisateur=='ok'? null : <label style={{color:"red",marginBottom:"2px",fontSize: '0.8em'}}>nom requis</label>}
            </div>
            <div className="p-field p-col-12" style={styleMarginB}>
                <div className="p-inputgroup" style={{ padding: '0px 50px 0px 50px' }}>
                    <PersonBoundingBox color="#0D0F34" size={33} style={{ backgroundColor: '#E7F2FA', borderRadius: '4px 0px 0px 4px red' }} className="p-1" />
                    <span className="p-float-label">
                        <InputText id="inputtext" style={styleInput} className="p-inputtext-sm block mb-0" name="prenom_utilisateur" onChange={(e)=>formAjout(e)}  />
                        <label htmlFor="inputtext" style={{ color: '#EEEFEF', fontSize: '0.8em',borderColor:"red" }} >Prénom d'utilisateur</label>
                    </span>
                </div>
                {  validation.prenom=='ok'? null : <label style={{color:"red",marginBottom:"2px",fontSize: '0.8em'}}>prenom requis</label>}
            </div>
            <div className="p-field p-col-12" style={styleMarginB}>
                <div className="p-inputgroup" style={{ padding: '0px 50px 0px 50px' }}>
                    <Pc color="#0D0F34" size={33} style={{ backgroundColor: '#E7F2FA', borderRadius: '4px 0px 0px 4px' }} className="p-1" />
                    <span className="p-float-label">
                        <Dropdown inputId="dropdown" value={parcours} options={typeParcours} cla optionLabel="name" name='parcours' onChange={(e) => {setparcours(e.value);setdonneAjout({...donneAjout,parcours: parcours.name })}} style={styleInput} />
                        <label htmlFor="dropdown" style={{ color: '#EEEFEF', fontSize: '0.8em' }}>Parcours</label>
                    </span>
                </div>
                {  validation.parcours=='ok'? null : <label style={{color:"red",marginBottom:"2px",fontSize: '0.8em'}}>parcours requis</label>}
            </div>
            <div className="p-field p-col-12" style={styleMarginB}>  
                <div className="p-inputgroup" style={{ padding: '0px 50px 0px 50px' }}>
                    <BarChartSteps color="#0D0F34" size={33} style={{ backgroundColor: '#E7F2FA', borderRadius: '4px 0px 0px 4px' }} className="p-1" />
                    <span className="p-float-label">
                        <Dropdown inputId="dropdown" value={niveau} options={typeNiveau} cla optionLabel="name"  name='niveau'  onChange={(e) => {setniveau(e.value);fonctNiveau()}} style={styleInput} />
                        <label htmlFor="dropdown" style={{ color: '#EEEFEF', fontSize: '0.8em' }}>Niveau d'études</label>
                    </span>
                </div>
                {  validation.niveau=='ok'? null : <label style={{color:"red",marginBottom:"2px",fontSize: '0.8em'}}>niveau requis</label>}
            </div>
            <div className="p-field p-col-12" style={styleMarginB}> 
                <div className="p-inputgroup" style={{ padding: '0px 50px 0px 50px' }}>
                    <BarChartSteps color="#0D0F34" size={33} style={{ backgroundColor: '#E7F2FA', borderRadius: '4px 0px 0px 4px' }} className="p-1" />
                    <span className="p-float-label">
                        <Dropdown inputId="dropdown" value={role} options={typeRole} cla optionLabel="name"  name='role'  onChange={(e) => {setrole(e.value);setdonneAjout({...donneAjout,role: role.name })}} style={styleInput} />
                        <label htmlFor="dropdown" style={{ color: '#EEEFEF', fontSize: '0.8em' }}>Rôle en tant qu'étudiant</label>
                    </span>
                </div>
                {  validation.role=='ok'? null : <label style={{color:"red",marginBottom:"2px",fontSize: '0.8em'}}>role requis</label>}
            </div>
            <div className="p-field p-col-12" style={styleMarginB}>
                <div className="p-inputgroup" style={{ padding: '0px 50px 0px 50px' }}>
                    <Lock color="#0D0F34" size={33} style={{ backgroundColor: '#E7F2FA', borderRadius: '4px 0px 0px 4px' }} className="p-1" /> 
                    <span className="p-float-label">
                        <Password className="p-inputtext  " name="mdp" style={styleInput} toggleMask onChange={(e)=>formAjout(e)} />
                        <label htmlFor="inputtext" style={{ color: '#EEEFEF', fontSize: '0.8em' }} >Mot de passe</label>
                    </span>
                </div>
                {  validation.mdp=='ok'? null : <label style={{color:"red",marginBottom:"2px",fontSize: '0.8em'}}>mot de passe requis</label>}
            </div>
            <div className="p-field p-col-12" style={styleMarginB}>
                <div className="p-inputgroup" style={{ padding: '0px 50px 0px 50px' }}>
                    <Lock color="#0D0F34" size={33} style={{ backgroundColor: '#E7F2FA', borderRadius: '4px 0px 0px 4px' }} className="p-1" />
                    <span className="p-float-label">
                        <Password className="p-inputtext  " name="confmdp" style={styleInput}feedback={false} onChange={(e)=>(formAjout(e))} />
                        <label htmlFor="inputtext" style={{ color: '#EEEFEF', fontSize: '0.8em' }} >Confimer le mot de passe</label>
                    </span>
                </div>
                {  validation.confmdp=='ok'? null : <label style={{color:"red",marginBottom:"2px",fontSize: '0.8em',marginTop:"0px"}}>veuillez confirmez ici votre mot de passe requis</label>}
            </div>
            <div class="col-12" >
                <center>
                    <input type="submit" class="button button2" onClick={handleSubmit} value="Inscrire" />
                </center>
            </div>

        </div>
    );
}

export default Etudiant;