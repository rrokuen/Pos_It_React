import React from 'react';

export function PostIt({post, removePost}) {
    const {id, titulo, descripcion, importancia} = post;

    const handleRemove = () => removePost(id);

    return (
            <section>
                <div className={`contenedor-post-it ${importancia ? 'importante' : 'noImportante'}`}>
                    <div class="contenedor-contenido">
                        <button onClick={handleRemove} className="btnX">
                            <strong>x</strong>
                        </button>
                            <div id="titulo-post">
                                {titulo}
                            </div>
                        <div id="descripcion-post">{descripcion}</div>
                    </div>
                </div>
            </section>
        )
    }