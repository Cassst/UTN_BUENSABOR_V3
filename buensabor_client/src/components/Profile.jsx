/* eslint-disable react/prop-types */
import React from "react";

const Profile = ({ user }) => {
  return (
    <div className="drawer-end mr-20">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-4"
          className="drawer-button btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            {user.photoURL ? (
              <img alt="Avatar" src={user.photoURL} />
            ) : (
              <img alt="Avatar" src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" />
            )}
          </div>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <a>Perfil</a>
          </li>
          <li>
            <a>Compras</a>
          </li>
          <li>
            <a>Configuración</a>
          </li>
          <li>
            <a>Salir</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
