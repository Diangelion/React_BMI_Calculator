const Table = () => {
  return (
    <div className="my-5">
      <h3 className="text-center">BMI Table</h3>
      <div className="d-flex justify-content-center">
        <table id="bmi_table" className="table table-dark">
          <thead>
            <tr>
              <th scope="col">BMI</th>
              <th scope="col">Categories</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Below 18.5</td>
              <td>Underweight</td>
            </tr>
            <tr>
              <td>18.5 to 24.9</td>
              <td>Healthy Weight (Ideal)</td>
            </tr>
            <tr>
              <td>25.0 to 29.9</td>
              <td>Overweight</td>
            </tr>
            <tr>
              <td>30 or higher</td>
              <td>Obesity</td>
            </tr>
            <tr>
              <td>40 or higher</td>
              <td>Class 3 Obesity</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
