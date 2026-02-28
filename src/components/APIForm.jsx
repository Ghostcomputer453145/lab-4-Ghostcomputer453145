const APIForm = ({ inputs, handleChange, onSubmit }) => {

  const inputsInfo = [
    "Input a link to any website.",
    "jpeg, png, or webp",
    "true or false",
    "true or false",
    "Width in pixels",
    "Height in pixels",
  ];

  return (
    <div>
      <h2>Select Your Image Attributes:</h2>

      <form className="form-container">
        {Object.entries(inputs).map(([category, value], index) => (
          <li className="form" key={index}>
            <h2>{category}</h2>

            <input
              type="text"
              name={category}
              value={value}
              onChange={handleChange}
              className="textbox"
            />

            <p>{inputsInfo[index]}</p>
          </li>
        ))}
      </form>

      <button type="submit" className="button" onClick={onSubmit}>
        Take that Pic! 🎞
      </button>
    </div>
  );
};

export default APIForm;