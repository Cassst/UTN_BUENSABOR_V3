import { useEffect } from "react";

const Loading = () => {
  useEffect(() => {
    console.log("Loading component mounted");
    return () => {
      console.log("Loading component unmounted");
    };
  }, []);

  console.log("Loading component rendered");

  return (
    <div className="h-screen flex items-center justify-center">
      <p className="font-semibold text-green">Cargando Recursos...</p>{" "}
      <span className="loading loading-ring loading-lg ml-5 text-green"></span>
    </div>
  );
};

export default Loading;