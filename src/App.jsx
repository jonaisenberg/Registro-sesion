import { useState } from "react";
import "./App.css";
import Registro from "./componentes/Registro";

function App() {
    const [estado, setEstado] = useState({
        error: false,
        mensajeEstado: "",
        colorEstado: "",
    });
    const mensajeAlerta = (alerta) => {
        setEstado(alerta);
    };
    return (
        <>
            <Registro estado={estado} mensajeAlerta={mensajeAlerta} />
        </>
    );
}

export default App;
