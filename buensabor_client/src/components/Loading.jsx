import React from "react";

const Loading = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <p className="font-semibold text-green">Cargando Recursos...</p> <span className="loading loading-ring loading-lg ml-5 text-green"></span>
    </div>
  );
};

export default Loading;
