import React, { useState, useEffect } from "react";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import Header from '../Menu/Header'
import {  useLocation } from 'react-router-dom';

export default function Groupe() {

    const Location = useLocation();
    const repere = {
        border: '1px solid black'
    }
    const repere1 = {
        border: '1px solid red'
    }
    return (
        <div>
            <Header active='Groupe' />
            <div class="grid mt-1 ml-1 mr-1">
                <div className="col-12 md:col-6 lg:col-12 " style={repere} >
                    <div class="grid">
                        <div class="col-4 " style={repere1}>

                        </div>
                        <div class="col-4 " style={repere1}>

                        </div>
                        <div class="col-4 " style={repere1}>

                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
