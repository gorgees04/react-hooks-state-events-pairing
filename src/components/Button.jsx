const Button = ({ content, handleClick, votes }) => {
  return (
    <>
      <button onClick={handleClick}>
        {votes} {content}
      </button>
    </>
  );
};

export default Button;
