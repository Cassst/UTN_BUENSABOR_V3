import React from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
      <div className="modal-box bg-white">
        <div className="modal-action flex flex-col justify-center mt-0">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body" method="dialog">
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
              <Link to="/signup" className="underline text-red">
                Crear una ahora
              </Link>
            </p>
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
      </div>
    </dialog>
  );
};

export default Modal;
