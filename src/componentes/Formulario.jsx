/* eslint-disable react/prop-types */
import { useState } from "react";
const Formulario = ({ mensajeAlerta }) => {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [confirmarContraseña, setConfirmarContraseña] = useState("");
    const formatoCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const minimoContraseña = /^(.{8,})$/;


    const validarInput = (e) => {
        e.preventDefault();
        if (
            nombre === "" ||
            correo === "" ||
            contraseña === "" ||
            confirmarContraseña === ""
        ) {
            mensajeAlerta({
                error: true,
                colorEstado: "danger mt-3",
                mensajeEstado: "Completa todos los campos!",
            });
            return;
        }
        if (!formatoCorreo.test(correo)) {
            mensajeAlerta({
                error: true,
                colorEstado: "danger mt-3",
                mensajeEstado: "El formato del correo no es el apropiado!",
            });
            return;
        }
        if (contraseña != confirmarContraseña) {
            mensajeAlerta({
                error: true,
                colorEstado: "danger mt-3",
                mensajeEstado: "La contraseña no es identica!",
            });
            return;
        }
        if (!minimoContraseña.test(contraseña)) {
            mensajeAlerta({
                error: true,
                colorEstado: "danger mt-3",
                mensajeEstado: "La contraseña debe tener un mínimo de 8 caracteres!",
            });
            return;
        }
        mensajeAlerta({
            error: false,
            colorEstado: "success mt-3",
            mensajeEstado: "Registro exitoso!",
        });
        setNombre("");
        setCorreo("");
        setContraseña("");
        setConfirmarContraseña("");
    };
    return (
        <>
            <form onSubmit={validarInput} noValidate>
                <div className="form-group">
                    <input
                        className="form-control mt-3"
                        type="text"
                        placeholder="Nombre"
                        onChange={(e) => setNombre(e.target.value)}
                        value={nombre}
                    />
                    <input
                        className="form-control mt-3"
                        type="email"
                        placeholder="Correo"
                        onChange={(e) => setCorreo(e.target.value)}
                        value={correo}
                    />
                    <input
                        className="form-control mt-3"
                        type="password"
                        placeholder="Contraseña"
                        onChange={(e) => setContraseña(e.target.value)}
                        value={contraseña}
                    />
                    <input
                        className="form-control mt-3"
                        type="password"
                        placeholder="Confirmar contraseña"
                        onChange={(e) => setConfirmarContraseña(e.target.value)}
                        value={confirmarContraseña}
                    />
                    <button
                        className="btn btn-success form-control mt-3"
                        type="submit"
                    >
                        Registrarse
                    </button>
                </div>
            </form>
        </>
    );
};

export default Formulario;
