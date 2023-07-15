import React from "react";

export const RegisterScreen = () => {
  return (
    <section className="register">
      <h1>Registro</h1>
      <form className="register__box">
        <div className="register__box-group-inputs">
          <div className="register__box-item">
            <label htmlFor="name">Nombres</label>
            <input type="text" name="name" id="name" />
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
            <input type="date" name="" id="" />
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
          <button className="register__box-button" >Crear entrenador</button>

        </div>
      </form>
    </section>
  );
};
