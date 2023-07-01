//import { getForm } from '../../utils/getForm';

export const InputsForm = ({ inputs, setInputs, getForm, setRenderNamedInputs }) => {

  const handleClick = () => {
    getForm("colunms-name-form", setInputs)
    setRenderNamedInputs(true)
  }

    return(
        <>
         <form id="colunms-name-form">
        {inputs.map((input, index) => {
          return (
            <>
              <label>
                Nome da {index + 1}º coluna ?
                <br />
                <input type="text" id={"coluna-" + (index + 1)} />
              </label>
              <br />
            </>
          );
        })}

        <button type="submit" onClick={handleClick} >
          Enviar
        </button>
      </form>
        </>
    )
}