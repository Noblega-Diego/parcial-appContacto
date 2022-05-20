import { useEffect, useState } from "react";
import { ContactoService } from '../services/ContactoService';
import { Contacto } from '../services/Contacto';
import { Row } from "react-bootstrap";


function RowContacto(params: { contacto: Contacto }) {

    const [contacto, setContacto] = useState<Contacto>();
    useEffect(() => {
        setContacto(params.contacto)
    }, [])
    return (
        <>
            <div className="grid-item"><img src={contacto?.fotourl}/></div>
            <div className="grid-item">{contacto?.apellido}</div>
            <div className="grid-item">{contacto?.nombre}</div>
            <div className="grid-item">{contacto?.telefono}</div>
            <div className="grid-item">{contacto?.email}</div>
        </>
    )
}



export function AgendaContacto() {

    const [contactos, setContactos] = useState<Contacto[]>([]);

    useEffect(() => {
        new ContactoService().findByIndice('A')
            .then((c) => { setContactos(c) })
            .catch(() => { })
    }, [])

    function Btn(params:{indice:string}){
        const filter = () =>{
            new ContactoService().findByIndice(params.indice)
            .then((c) => { setContactos(c) })
            .catch(() => { })
        }
        return (
            <div className="grid-item"><a href="#" onClick={filter}>{params.indice}</a></div>
        )
    }    
    return (
        <>
            <div className="grid-container-agenda">
                <div className="grid-item-agenda">Foto</div>
                <div className="grid-item-agenda">Apellido</div>
                <div className="grid-item-agenda">Nombre</div>
                <div className="grid-item-agenda">Telefono</div>
                <div className="grid-item-agenda">Email</div>

                {contactos.map((c) => <RowContacto key={c.id} contacto={c}></RowContacto>)}
            </div>

            <h3>Busqueda por Indice</h3>
            <div className="grid-container">
                {["A","B","C","D","E","F","G","H","I","K"]
                .map((i)=><Btn key={i} indice={i}></Btn>)}
            </div>
        </>
    )
}