const ErrorExample = () => {
  let count = 0;

  handleClick = () => {
    count += 1;
  }

  return (
    <div>
      <h1>useState error example</h1>
      <h2>{ count }</h2>
      <div>
        <button type="button" onClick={handleClick} className="btn">Increament</button>  
      </div>
    </div>

  );
};

export default ErrorExample;
