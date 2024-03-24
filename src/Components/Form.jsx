import React, {useState} from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
  });

  const [error, setError] = useState(false);

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
  }

  function handleReset() {
    setFormData({
      nombre: "",
      correo: "",
    });
    setError(false)
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre Completo: </label>
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
          <p style={{ color: "yellow" }}>
            Por favor verifique su información nuevamente
          </p>
        )}
    </form>
    </div>
  );
};

export default Form;
