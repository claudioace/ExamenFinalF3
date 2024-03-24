const FormCard = ({ nombre }) => {
  return (
    <div
      style={{ 
        borderRadius:"10px",
        border: "2px solid white",
        backgroundColor: "grey",
        padding: "1rem",
        marginTop: "3rem"
       }}
    >
      <h3>
        Gracias {nombre}, te contactaremos cuanto antes via email
      </h3>
    </div>
  );
};

export default FormCard;
