import { useState, useRef } from "react";
import Result from "./Result";

const Calculator = () => {
  const inputHeight = useRef(null);
  const inputWeight = useRef(null);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const getValues = () => {
    setHeight(inputHeight.current.value);
    setWeight(inputWeight.current.value);
    setShowResult(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="mt-4">
      <div
        id="form_container"
        className="container w-lg-50 p-4 bg-light text-dark rounded my-2"
      >
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Height (in cm)</label>
            <input
              ref={inputHeight}
              type="number"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Input height"
            />
          </div>
          <div className="form-group">
            <label>Weight (in kg)</label>
            <input
              ref={inputWeight}
              type="number"
              className="form-control"
              placeholder="Input weight"
            />
          </div>
          <button
            type="submit"
            className="my-1 btn btn-dark"
            onClick={getValues}
          >
            Calculate
          </button>
        </form>
      </div>

      <div className="container mt-5">
        {showResult ? <Result height={height} weight={weight} /> : null}
      </div>
    </div>
  );
};

export default Calculator;
