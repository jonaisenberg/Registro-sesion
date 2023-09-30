/* eslint-disable react/prop-types */
import Formulario from "./Formulario";
import Alerta from "./Alert";
import SocialIcon from "./SocialButton";

const Registro = ({ estado, mensajeAlerta }) => {
    return (
        <>
            <h1>Crea una cuenta</h1>
            <SocialIcon
                facebook="fa-brands fa-facebook fa-2xl"
                github="fa-brands fa-github fa-2xl"
                linkedin="fa-brands fa-linkedin-in fa-2xl"
            />
            <h6>O usa tu email para registrarte</h6>
            <Formulario mensajeAlerta={mensajeAlerta} />
            <Alerta
                colorEstado={estado.colorEstado}
                mensajeEstado={estado.mensajeEstado}
            />
        </>
    );
};

export default Registro;
