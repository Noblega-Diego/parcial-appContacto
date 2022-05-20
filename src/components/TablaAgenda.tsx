import { useEffect, useState } from "react";
import { ContactoService } from '../services/ContactoService';
import { Contacto } from '../services/Contacto';
import { Button, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";


function RowContacto(params: { contacto: Contacto, onDelete:(id:string)=>{} }) {

    const [contacto, setContacto] = useState<Contacto>();
    useEffect(() => {
        setContacto(params.contacto)
    }, [])
    const onDelete= (e:any)=>{e.preventDefault(); params.onDelete(params.contacto.id)}
    return (
        <>
            <tr>
                <td><img src={contacto?.fotourl}></img></td>
                <td>{contacto?.apellido}</td>
                <td>{contacto?.nombre}</td>
                <td>{contacto?.telefono}</td>
                <td>{contacto?.email}</td>
                <td><Link to={'/formcontacto/'+contacto?.id}><Button>Editar</Button></Link></td>
                <td><Button onClick={onDelete}>Eliminar</Button></td>
            </tr>
        </>
    )
}

export function TablaAgenda() {
    const contactoService = new ContactoService();
    const [contactos, setContactos] = useState<Contacto[]>([]);

    useEffect(() => {
        contactoService.getAll()
            .then((c) => { setContactos(c) })
            .catch(() => { })
    }, [])

    const deleteContact = async (id:string)=>{
        await contactoService.delete(id);
        setContactos(await contactoService.getAll());
    };

    return (
        <>
            <Link to={'/formcontacto'}><Button>Agregar +</Button></Link>
            <Table>
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Apellido</th>
                        <th>Nombre</th>
                        <th>Telefono</th>
                        <th>Email</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {contactos.map((c) => <RowContacto key={c.id} contacto={c} onDelete={deleteContact}></RowContacto>)}
                </tbody>
            </Table>
        </>
    )
}