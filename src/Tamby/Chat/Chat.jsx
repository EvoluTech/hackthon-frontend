import React, { useState, useEffect } from "react";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import Header from '../Menu/Header'

export default function Chat() {

    return(
        <div>
            <Header active='Chat'/>
            <h1>Hello</h1>
        </div>
    );
}