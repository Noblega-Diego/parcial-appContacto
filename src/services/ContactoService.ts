import { Contacto } from './Contacto';

export class ContactoService{
    async getAll():Promise<Contacto[]>{
        return await (await fetch('http://168.194.207.98:8081/api_contacto/get_contactos.php')).json()
    }
    async getById(id:string):Promise<Contacto>{
        const contactos:Contacto[] = await (await fetch('http://168.194.207.98:8081/api_contacto/get_contactos.php')).json()
        return contactos.filter((c)=>{return c.id==id})[0];
    }
    async findByIndice(indice:string):Promise<Contacto[]>{
        return await (await fetch('http://168.194.207.98:8081/api_contacto/get_contactos.php?indice='+indice,)).json()
    }
    
    async save(contacto:Contacto):Promise<void>{
        await fetch('http://168.194.207.98:8081/api_contacto/post_contacto.php',{
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(contacto),
            method:'POST'
        })
    }

    async update(contacto:Contacto):Promise<void>{
        await fetch('http://168.194.207.98:8081/api_contacto/put_contacto.php',{
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(contacto),
            method:'PUT'
        })
    }

    async delete(id:String):Promise<void>{
        await fetch('http://168.194.207.98:8081/api_contacto/delete_contacto.php?id='+id,{
            method:'DELETE'
        })
    }
}