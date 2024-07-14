import React from 'react';

export function PostIt({post, removePost}) {
    const {id, titulo, descripcion, importante} = post;

    const handleRemove = () => removePost(id);

    return (
            <section>
                <div className={`contenedor-post-it ${importante ? 'importante' : 'noImportante'}`}>
                    <div class="contenedor-contenido">
                            <div id="titulo-post">
                                {titulo}
                                <button onClick={handleRemove} className="btnX">
                                    <strong>x</strong>
                                </button>
                            </div>
                        <div id="descripcion-post">{descripcion}</div>
                    </div>
                </div>
            </section>
        )
    }