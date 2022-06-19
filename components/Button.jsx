const Button = ({ text, ...props }) => {
  const { className } = props;
  return (
    <button
      {...props}
      className={`py-2 sm:py-3 px-5 border-2 font-semibold sm:text-lg md:text-lg text-film-accent border-film-accent cursor-pointer hover:bg-film-accent hover:text-film-dark tranform ease-in-out duration-200 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
