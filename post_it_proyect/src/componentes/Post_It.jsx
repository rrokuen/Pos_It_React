export function PostIt({post, setImportante}) {
    const {id, titulo, descripcion, importante} = post;

    const newImportante = () => setImportante(id);

    const tituloPost = titulo;
    const descripcionPost = descripcion;

    if(importante){
        return (
            <h1>Es importante</h1>
        )
    }

    return (
        <h1>No es importante</h1>
    )
}