import { PostIt } from "./Post_It";
import { useRef, useState } from "react";
import { v4 as uuid } from 'uuid';
export function MyPostIt() {
    const tituloRef = useRef();
    const descripcionRef = useRef();
    const importante = useRef();
    
    return (
        <body>
            <header>
                <div class="contenedor_header">
                    <h1>Post It Simultator!</h1>
                    <div class="inpts_header">
                        <input type="text" placeholder="Título" id="inptTitulo"></input>
                        <input type="text" placeholder="Descripción" id="inptDescripcion"></input>
                        <input type="checkbox" id="inptCheckbox"></input>
                        <label>Importante!</label>
                        <button class="btnAgg">Agregar</button>
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