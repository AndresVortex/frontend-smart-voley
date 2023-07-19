import React from "react";

export const RegisterScreen = () => {
  return (
    <section className="flex items-center flex-col h-screen justify-center w-full  ">
      <h1 className="text-2xl font-bold text-left p-5" >Crear entrenador</h1>
      <form className="register__box gradient-blue from-blue-700">
        <div className="register__box-group-inputs">
          <div className="register__box-item">
            <label htmlFor="name">Nombres</label>
            <input type="text" name="name" id="name"/>
          </div>
          <div className="register__box-item">
            <label htmlFor="">Apellidos</label>
            <input type="text" name="lastName" id="lastName" />
          </div>
        </div>
        <div className="register__box-group-inputs">
          <div className="register__box-item">
            <label htmlFor=""> Años de experiencia </label>
            <input type="text" name="" id="" />
          </div>
          <div className="register__box-item">
            <label htmlFor="">Fecha nacimiento</label>
            <input type="date" name="" id=""  />
          </div>
        </div>

        <div className="register__box-item">
          <label htmlFor="">Correo</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="register__box-item">
          <label htmlFor="">Contraseña</label>
          <input type="text" name="password" id="password" />
        </div>
        <div className="register__box-item">
          <label htmlFor="">Confirmar contraseña</label>
          <input type="text" name="confirmPassword" id="confirmPassword" />
        </div>
        <div className="box-button">
          <button className="register__box-button" >Crear</button>

        </div>
      </form>
    </section>
  );
};

export default RegisterScreen;