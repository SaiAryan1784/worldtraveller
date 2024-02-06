const Toast = ({ text }) => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: text !== "" ? "50px" : "-40px",
        right: "calc(50vw - 100px)",
        width: "200px",
        textAlign: "center",
        padding: "6px",
        background: "#8A9BCA",
        fontSize: "15px",
        borderRadius: "10px",
        color: "#C3DED3",
        transition: "bottom 200ms ease",
        zIndex: "1",
      }}
    >
      {text}
    </div>
  );
};

export default Toast;
