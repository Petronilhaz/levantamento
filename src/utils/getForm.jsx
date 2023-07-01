import { inputs, setInputs } from '../components/DataCollectionCreator'

export function getForm() {
    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", (event) => {
      event.preventDefault();
      let inputData = [];
      inputs.map((input, index) => {
        inputData.push(document.getElementById("coluna-" + (index + 1)).value);

        return setInputs(inputData);
      });
    });
  }