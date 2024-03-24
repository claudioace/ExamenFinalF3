import React, {useState} from "react";
import FormCard from "./FormCard";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
  });

  const [error, setError] = useState(false);
  const [showCard, setShowCard] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    console.log(formData);

    event.preventDefault();
    if (
      formData.nombre.trim().length <5 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)
      ) {
      
      setError(true);
      return;
    }
    setError(false);
    setShowCard(true);
    log("Carga de datos")
  }

  function handleReset() {
    setFormData({
      nombre: "",
      correo: "",
    });
    setError(false);
    setShowCard(false);
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre Completo: </label>
        <input
          type="text"
          name="nombre"
          placeholder="Ingresar nombre"
          onChange={handleChange}
          value={formData.nombre}
        />
        <label htmlFor="correo"> e-mail: </label>
        <input
          type="text"
          name="correo"
          placeholder="Ingresar correo electrónico"
          onChange={handleChange}
          value={formData.correo}
        />
        <button type="submit">Enviar</button>
        <button type="reset" onClick={handleReset}>
          Limpiar
        </button>
        {error && (
          <p className="errMsg">
            Por favor verifique su información nuevamente
          </p>
        )}
    </form>
    {showCard && (
    <FormCard
      nombre={formData.nombre}
    />
    )}
    </div>
  );
};

export default Form;
