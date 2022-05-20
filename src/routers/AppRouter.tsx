import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AgendaContacto } from '../components/AgendaContacto';
import {TablaAgenda } from '../components/TablaAgenda';
import { FormContacto } from '../components/FormContacto';

export function AppRouter() {
    return (
        <>
            <Routes>
                <Route path='/' element={<AgendaContacto></AgendaContacto>}></Route>
                <Route path='/contactos' element={<AgendaContacto></AgendaContacto>}></Route>
                <Route path='/itemscontactos' element={<TablaAgenda></TablaAgenda>}></Route>
                <Route path='/formcontacto/:id' element={<FormContacto></FormContacto>}></Route>
            </Routes>
        </>
    )
}