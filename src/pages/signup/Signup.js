import React, { useState } from "react";
import "../signup/signup.css";
import img from "../../images/login3.jpg";
import { useForm } from "react-hook-form";
import { db } from "../../DB/firebase";
import { toast } from "react-toastify";

const Signup = () => {
  const { register, handleSubmit, reset } = useForm();
  const [datos, setDatos] = useState([]);

  const GetUser = async () => {
    db.collection("users").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setDatos(docs);
    });
  };

  const onSubmit = (data) => {
    GetUser();
    console.log(datos);

    //To do Las contraseñas primero

    if (
      data.password !== "" &&
      data.passwordConfirm !== "" &&
      data.password === data.passwordConfirm
    ) {
      const info = {
        email: data.email,
        password: data.password,
        nombre: data.usuario,
        state: true,
        apellido: "",
        direccion: "",
        telefono: "",
        rol: 1,
        eliminado: false,
        profesion: "",
      };

      // 1: medico
      // 2: Secretaria
      // 3: Admin

      db.collection("users").doc().set(info);
      toast("Nuevo usuario agregado", { type: "success", autoClose: 2000 });
      setTimeout(() => {
        localStorage.setItem("emailUser", info.email);
        localStorage.setItem("nameUser", info.nombre);
        window.location = "/";
      }, 1000);
    } else {
      toast("Las contraseñas no son iguales", {
        type: "error",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="d-flex align-items-center min-vh-100 py-3 py-md-0">
      <div className="container">
        <div className="card login-card">
          <div className="row no-gutters">
            <div className="col-md-5">
              <img src={img} alt="login" className="login-card-img"></img>
            </div>
            <div className="col-md-7">
              <div className="card-body">

                <p className="login-card-description">Crear cuenta</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="usuario"
                      className="form-control"
                      placeholder="Nombre de usuario"
                      required
                      {...register("usuario")}
                    ></input>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      required
                      {...register("email")}
                    ></input>
                  </div>
                  <div className="form-group mb-4">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Contraseña"
                      required
                      {...register("password")}
                    ></input>
                  </div>
                  <div className="form-group mb-4">
                    <input
                      type="password"
                      name="passwordConfirm"
                      className="form-control"
                      placeholder="Confirmar Contraseña"
                      required
                      {...register("passwordConfirm")}
                    ></input>
                  </div>
                  <input
                    className="btn btn-block login-btn mb-4"
                    type="submit"
                    value="Registrate"
                    onClick={() => {
                      setTimeout(() => {
                        reset({
                          usuario: "",
                          email: "",
                          password: "",
                          passwordConfirm: "",
                        });
                      }, 1000);
                    }}
                  ></input>
                  <a href="/login">¿Ya tienes cuenta?</a>
                </form>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
