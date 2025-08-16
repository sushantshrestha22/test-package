const Button = ({ children, onClick, type = "button", className = "" }) => {
  console.log("Button component rendered with props:");
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
