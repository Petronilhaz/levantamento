
export const SelectComponent = ({ setColumnsQuantity }) => {
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const getColumns = () => {
    let result = document.getElementById("columns").value;
    setColumnsQuantity(result);
  };

  return (
    <>
    <select name="" id="columns">
      {options.map((opt, index) => {
        return (
          <option value={opt} key={index}>
            {opt}
          </option>
        );
      })}
    </select>
    <button onClick={getColumns}>Enviar</button>
    </>
  );
};
