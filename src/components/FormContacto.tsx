import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { Contacto } from '../services/Contacto';
import { useParams } from "react-router-dom";
import { ContactoService } from '../services/ContactoService';

export function FormContacto() {
    const contactoService = new ContactoService();
    const {id} = useParams()
    const [contacto, setContacto] = useState<Contacto>();

    useEffect(()=>{
        if(id == '0'){
        }else
        contactoService.getById(id!)
        .then(setContacto);
    }, [])

    async function save() {
        if(id =='0'){
            await contactoService.save(contacto!)
        }else{
            await contactoService.update(contacto!)
        }
    }

    function handleNombreChange(e:any) {
        e.preventDefault();
        setContacto((c:any)=>{return {...c, nombre:e.target.value}});
    }
    function handleApellidoChange(e:any) {
        e.preventDefault();
        setContacto((c:any)=>{return {...c, apellido:e.target.value}});
    }
    function handleTelefonoChange(e:any) {
        e.preventDefault();
        setContacto((c:any)=>{return {...c, telefono:e.target.value}});
    }
    function handleEmailChange(e:any) {
        e.preventDefault();
        setContacto((c:any)=>{return {...c, email:e.target.value}});
    }
    function handleFotourlChange(e:any) {
        e.preventDefault();
        setContacto((c:any)=>{return {...c, fotourl:e.target.value}});
    }
    
    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" value={contacto?.nombre} onChange={handleNombreChange}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" value={contacto?.apellido} onChange={handleApellidoChange}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="text" value={contacto?.telefono} onChange={handleTelefonoChange}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" value={contacto?.email} onChange={handleEmailChange}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Foto Url</Form.Label>
                    <Form.Control type="text" value={contacto?.fotourl} onChange={handleFotourlChange}></Form.Control>
                </Form.Group>
                <Button onClick={save}>Save</Button>
            </Form>
        </>
    )
}