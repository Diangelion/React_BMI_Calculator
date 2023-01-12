import Table from "./Table";

const Result = (props) => {
  const refreshPage = () => {
    window.location.reload();
  };

  if (props.weight != 0 && props.height != 0) {
    const BMI = Math.round(
      props.weight / ((props.height / 100) * (props.height / 100))
    );

    let category = "";
    if (BMI < 18.5) category = "Underweight";
    else if (BMI >= 18.5 && BMI < 25) category = "Healthy Weight";
    else if (BMI >= 25 && BMI < 30) category = "Overweight";
    else if (BMI >= 30 && BMI < 40) category = "Obesity";
    else if (BMI >= 40) category = "Class 3 Obesity";

    return (
      <div>
        <div>
          <h3>Result</h3>
          <div className="alert alert-dark" role="alert">
            Your BMI result is {BMI}. Your BMI category is {category}.
          </div>
          <button className="btn btn-light" onClick={refreshPage}>
            Recalculate
          </button>
        </div>
        <Table />
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <h3>Result</h3>
          <div className="alert alert-dark" role="alert">
            Please input correct weight and height!
          </div>
          <button className="btn btn-light" onClick={refreshPage}>
            Recalculate
          </button>
        </div>
      </div>
    );
  }
};

export default Result;
