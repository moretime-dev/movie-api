const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      style={{
        backgroundColor: "grey",
        margin: "1em 0.5em",
        padding: "0 1em",
        fontSize: "2rem",
        fontWeight: "bold",
        color: "white",
        borderRadius: "1em",
        boxShadow: "2px 2px 5px black",
      }}
    >
      {props.buttonText}
    </button>
  );
};

export default Button;
