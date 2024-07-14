import { PostIt } from "./Post_It";
import { useRef, useState } from "react";
import { v4 as uuid } from 'uuid';

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

        if(titulo.trim() === ''){
            alert('Campos vacíos');
            
            return;
        }
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
                    <section>
                        <div class="contenedor-post-it noImportante">
                            <div class="contenedor-contenido ">
                                <strong><div id="titulo-post">Ejemplo titulo<button class="btnX"><strong>x</strong></button></div></strong>
                                <div id="descripcion-post">Ejemplo descripcion</div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div class="contenedor-post-it importante">
                            <div class="contenedor-contenido">
                                <strong><div id="titulo-post">Ejemplo titulo<button class="btnX"><strong>x</strong></button></div></strong>
                                <div id="descripcion-post">Ejemplo descripcion</div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </body>
        
    )
}