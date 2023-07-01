
export const NamedInputs = ({ inputs, getForm, setData }) => {
    return(
        <>
        <form id="dataCollector">
            {
                inputs.map( (input, index) => {
                    return(
                        <>
                        <label>
                            {input}
                            <br />
                            <input type="text" id={"coluna-" + (index + 1)}></input>
                        </label>
                        <br />
                        </>
                    )
                })
            }
            <button type="submit" 
            //onClick={()=> getForm("dataCollector", setData)}
            >Enviar Dados</button>
        </form>
        </>
    )
}