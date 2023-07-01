import { useEffect, useState } from "react";
import { SelectComponent } from "./SelectComponent";
import { InputsForm } from "../Form/index.jsx";
import { NamedInputs } from "./NamedInputs";

export const DataCollectionCreator = () => {
  const [columnsQuantity, setColumnsQuantity] = useState(0);
  const [inputs, setInputs] = useState([]);
  const [renderNamedInputs, setRenderNamedInputs] = useState(false);
  const [data, setData] = useState([]);

  function getForm(id, setState) {
    const formulario = document.getElementById(id);

    formulario.addEventListener("submit", (event) => {
      event.preventDefault();
      let inputData = [];
      inputs.map((input, index) => {
        inputData.push(document.getElementById("coluna-" + (index + 1)).value);
        return setState(inputData);
      });
    });
  }

  useEffect(() => {
    const newInputs = Array.from({ length: columnsQuantity});
    console.log('tem id ?', newInputs);
    setInputs(newInputs);
  }, [columnsQuantity]);

  useEffect(() => {
    console.log("useEffect ", inputs);
    console.log("useEffect ", renderNamedInputs);
    console.log("useEffect data", data);
  }, [inputs, renderNamedInputs, data]);

  return (
    <>
      <h2>Estruture seu levantamento</h2>
      <label>
        Quantas colunas devem haver ?
        <br />
        <SelectComponent setColumnsQuantity={setColumnsQuantity} />
      </label>
      <br />
      <InputsForm
        inputs={inputs}
        setInputs={setInputs}
        getForm={getForm}
        setRenderNamedInputs={setRenderNamedInputs}
      />

      {renderNamedInputs === true ? (
        <NamedInputs inputs={inputs} getForm={getForm} setData={setData} />
      ) : null}
    </>
  );
};
