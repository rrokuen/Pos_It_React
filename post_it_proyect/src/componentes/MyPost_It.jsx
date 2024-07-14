import React from "react";
import { PostIt } from "./Post_It";
import { useRef, useState } from "react";
import { v4 as uuid } from 'uuid';
import '../styles.css'

export function MyPostIt() {

    const tituloRef = useRef();
    const descripcionRef = useRef();
    const importanciaRef = useRef();

    const [postList, setPostList] = useState([
        {id: uuid(), titulo: "Titulo no Importante", descripcion: "Descripción no Importante", importante: false},
        {id: uuid(), titulo: "Titulo Importante", descripcion: "Descripción Importante", importante: true}
    ])  

    function addPost() {
        console.log("Presionando boton agregar");
        const titulo = tituloRef.current.value;
        const descripcion = descripcionRef.current.value;
        const importancia = importanciaRef.current.checked;
        console.log(`Se escribió ${titulo} ${descripcion} ${importancia}`);

        if(descripcion.trim() === ''){
            alert('Descripción obligatoria');

            return
        }

        const newPost = {
            id:uuid(),
            titulo:titulo,
            descripcion:descripcion,
            importancia:importancia
        };

        const newPostList = [...postList, newPost];
        setPostList(newPostList);
        alert('Se agregó Post-It');
    }

    function removePost(id){
        console.log('Función eliminar');
        const updateList = postList.filter(post => post.id !== id);
        setPostList(updateList);
    }

    return (
        <body>
            <header>
                <div class="contenedor_header">
                    <h1>Post It Simultator!</h1>
                    <div class="inpts_header">
                        <input ref={tituloRef} type="text" placeholder="Título" id="inptTitulo"></input>
                        <input ref={descripcionRef} type="text" placeholder="Descripción" id="inptDescripcion"></input>
                        <input ref={importanciaRef} type="checkbox" id="inptCheckbox"></input>
                        <label>Importante!</label>
                        <button onClick={addPost} class="btnAgg">Agregar</button>
                    </div>
                </div>
            </header>
            <main>
                <div class="contenedor-general">
                    {postList.map(post =>(
                        <PostIt 
                        post={post} 
                        removePost={removePost} 
                        key={post.id} 
                        className={post.importante ? 'importante' : 'noImportante'}/>
                    ))}
                </div>
            </main>
        </body>
        
    )
}