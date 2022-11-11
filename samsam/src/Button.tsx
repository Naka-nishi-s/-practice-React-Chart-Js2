const Button = (props: any) => {
  const buttonStyle = {
    margin: "20px",
    padding: "10px 30px",
    border: "1px solid #FFFFFF",
    borderRadius: "10px",
    backgroundColor: "skyblue",
    fontSize: "18px",
  };
  const { text, onClick } = props;

  return (
    <>
      <button onClick={onClick} style={buttonStyle}>
        {text}
      </button>
    </>
  );
};

export default Button;
