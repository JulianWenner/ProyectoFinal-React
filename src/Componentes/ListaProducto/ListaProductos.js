import { useEffect, useState } from "react"
import {data} from "../Data/Data"
import ItemsList from "../ItemsList/ItemsList"

const ListaProductos = () => {
    
    const[listaProductos,setlistaProductos]=useState([])

    const getPorductos= new Promise((resolve, reject) => {
        setTimeout (()=>{
            resolve(data)
        },3000)
    })
    
    useEffect(()=>{
        getPorductos.then((respuesta)=>{
         setlistaProductos(respuesta)
        })
         },[])

         
  return (
    <div> 
        <ItemsList listaProductos={listaProductos}/>
    </div>
  )
}

export default ListaProductos