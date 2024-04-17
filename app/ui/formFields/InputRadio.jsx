const InputRadio = ({ id, text, options = [], name = "name" }) => {
  return (
    <div className="flex gap-2 items-center input-field">
      {text && (
        <label className="px-1" htmlFor={id}>
          {text}:
        </label>
      )}
      <div className="flex gap-3 items-center">
        {options.map((option) => {
          return (
            <span className="flex gap-1 items-center">
              <label htmlFor={option} className="capitalize font-semibold">
                {option}
              </label>
              <input type="radio" name={name} id={option} value={name} />;
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default InputRadio;
