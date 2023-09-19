"use client";

import { useRouter } from "next/navigation";

function Acceso() {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (email === "ultra@group.com" && password === "ultra1") {
      router.replace("/admin");
    }
  };

  return (
    <main>
      <div className="form">
        <form onSubmit={handleSubmit} className="form__content">
          <div className="form__title">
            <h2>Iniciar sesion </h2>
          </div>
          <input
            className="form__input"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            className="form__input"
            type="password"
            name="password"
            placeholder="Contraseña"
            required
          />
          <button className="form__button" type="submit">
            Iniciar sesión
          </button>
        </form>
      </div>
    </main>
  );
}

export default Acceso;
