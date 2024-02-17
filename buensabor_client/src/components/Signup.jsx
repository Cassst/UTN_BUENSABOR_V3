import React from "react";
import { useForm } from "react-hook-form";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import Modal from "./Modal";
import { Link } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="max-w-md shadow w-full mx-auto flex item-center justify-center my-20">
      <div className="modal-action flex flex-col justify-center mt-0">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body"
          method="dialog"
        >
          <h3 className="font-bold text-lg text-black text-center">
            Coloque sus datos
          </h3>
          {/*Email*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black">E-mail</span>
            </label>
            <input
              type="email"
              placeholder="Correo de usuario"
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
              placeholder="Contraseña"
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

          {/*Boton Ingresar*/}
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Crear Cuenta"
              className="btn bg-green text-white"
              style={{ border: "none" }}
            />
          </div>
          <p className="text-center my-2">
            ¿Tiene ya una cuenta?{" "}
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="underline text-red"
            >
              Ingresar
            </button>
          </p>
          <Link to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>
        </form>
        {/*Redes Sociales*/}
        <div className="text-center space-x-3 mb-5">
          <button className="btn btn-circle btn-outline hover:bg-green hover:text-white">
            <FaGoogle />
          </button>
          <button className="btn btn-circle btn-outline hover:bg-green hover:text-white">
            <FaFacebookF />
          </button>
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default Signup;
