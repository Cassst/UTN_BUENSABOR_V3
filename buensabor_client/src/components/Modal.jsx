import React, { useContext, useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { set, useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signUpWithGmail, signUpWithPhone, signUpWithUser } =
    useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  //Redirigir de inicio a una pagina en especifico
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  //Ingreso por usuario
  const onSubmit = (data) => {
    const email = data.email;
    const pass = data.password;
    //console.log("email: " + email + " pass: " + pass);
    signUpWithUser(email, pass)
      .then((result) => {
        const user = result.user;
        alert("Ingreso Correctamente");
        document.getElementById("my_modal_5").close();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage("Datos Incorrectos, revise sus credenciales");
      });
  };

  //Ingreso por gmail
  const handleLogin = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        alert("Ingreso Correctamente");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(error);
      });
  };
  //Ingreso por facebook
  //navigate(from, { replace: true });
  //Ingreso por telefono
  //navigate(from, { replace: true });
  return (
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
      <div className="modal-box bg-white">
        <div className="modal-action flex flex-col justify-center mt-0">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body"
            method="dialog"
          >
            <h3 className="font-bold text-lg text-black">Ingresar Datos</h3>
            {/*Email*/}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">E-mail</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered bg-white"
                required
                {...register("email")}
              />
            </div>
            {/*Contraseña*/}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Contraseña</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered bg-white"
                required
                {...register("password")}
              />
              <label className="label mt-1">
                <a href="#" className="label-text-alt link link-hover">
                  ¿Restaurar Contraseña?
                </a>
              </label>
            </div>
            {/*Seccion Error*/}
            {errorMessage ? (
              <p className="text-red text-xs italic text-center">
                {errorMessage}
              </p>
            ) : (
              ""
            )}
            {/*Boton Ingresar*/}
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Ingresar"
                className="btn bg-green text-white"
                style={{ border: "none" }}
              />
            </div>
            <p className="text-center my-2">
              ¿No posee una cuenta?{" "}
              <Link to="/Signup" className="underline text-red">
                Crear una ahora
              </Link>
            </p>
            <button
              htmlFor="my_modal_5"
              onClick={() => document.getElementById("my_modal_5").close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          {/*Redes Sociales*/}
          <div className="text-center space-x-3 mb-5">
            <button
              className="btn btn-circle btn-outline hover:bg-green hover:text-white"
              onClick={handleLogin}
            >
              <FaGoogle />
            </button>
            <button className="btn btn-circle btn-outline hover:bg-green hover:text-white">
              <FaFacebookF />
            </button>
            <button className="btn btn-circle btn-outline hover:bg-green hover:text-white">
              <MdPhoneIphone />
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
