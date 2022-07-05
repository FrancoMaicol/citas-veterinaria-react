function Header() {

    return (
            <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
             Seguimiento Pacientes{" "}<span className="text-blue-800">Veterinaria</span>  
            </h1>/**"text-5xl tamaño de la letra, "md:" se tomaria como un media query y a la par el "w-(width)" es de el tamaño, deben de estar juntos para que se aplica el media*/
    )
}

export default Header;