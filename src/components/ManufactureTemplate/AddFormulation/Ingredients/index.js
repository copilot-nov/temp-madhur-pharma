import { useMemo, useState } from "react";
import SelectIngredient from "./selectingredient";
import { Alert } from '../../../../components/alert';
import { connect } from "react-redux";
import { ADD_PRODUCTION_PROCESS_INGREGIENTS } from "../../../../redux/actions/admin";



const Ingredient = (props) => {
    const { subTab, selectedProcessData, formulationData, ADD_PRODUCTION_PROCESS_INGREGIENTS } = props
    const [select, setSelect] = useState([])
    const [ingredientPayload, setIngredientPayload] = useState([])
    const [ingredientId, setIngredientId] = useState([])
    const [handleResponse, setHandleResponse] = useState(null)


    const handleQty = async (e) => {
        let { name, value } = e.target
        let copydata = await ingredientPayload?.filter((item) => item?.name !== name)
        copydata.push({ name: name, quantity_pc: Number(value) })
        await setIngredientPayload(copydata)
    }
    useMemo(() => {
        let copydata = ingredientPayload?.filter((item) => !select.includes(item?.name))
        setIngredientPayload(copydata)
    }, [select])

    const totalQty = useMemo(() => {
        let qty = 0
        for (let i of ingredientPayload) {
            qty = qty + i.qty
        }
        return qty
    }, [ingredientPayload])

    const handleSubmit = async () => {
        let payload = {
            "data": []
        }
        formulationData.filter((data) => {
            if (data?.process_id === selectedProcessData?.id)
                ingredientPayload.map((item, i) => {
                    payload?.data.push({
                        "prod_proc_id": data?.id,
                        "quantity_pc": ingredientPayload[i].quantity_pc,
                        "ingredient_id": ingredientId[i],
                        "notes": "test"
                    })
                })
        })
      
        let istrue = await ADD_PRODUCTION_PROCESS_INGREGIENTS(payload)
        if (istrue?.status) {
            setHandleResponse(istrue)
        } else {
            setHandleResponse(istrue)
        }
    }

    return (
        <div className="p-2">
            <div>
                <div className="m-1 flex justify-center text-green-900 w-full ">
                    <SelectIngredient select={select} setSelect={setSelect} setIngredientId={setIngredientId} ingredientId={ingredientId} />
                </div>
                {handleResponse !== null && <Alert type={handleResponse?.status} msg={handleResponse?.msg} />}
                <div className="grid grid-cols-3">
                    
                    {
                        select?.map((item, i) => {
                            return (
                                <div key={item} className="m-1 flex justify-between items-center text-green-900 w-full hover:shadow p-2">
                                    <p className="text-sm"> <span className="mr-2">[{i + 1}.]</span> {item}</p>
                                    <input
                                        onChange={handleQty}
                                        name={item}
                                        placeholder='QTY.'
                                        type={'number'}
                                        style={{ width: 100, height: '2rem',backgroundColor:"black" }}
                                        className="focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 h-10 px-2"
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                {select?.length > 0 ?
                    <div className="pr-10 py-3 flex justify-end sm:px-6 mt-10">
                        <button
                            onClick={handleSubmit}
                            type="submit"
                            className=" py-2 px-8 border border-transparent shadow-sm text-sm font-medium text-white bg-green-900 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            Save
                        </button>
                    </div>
                    : ""}
                <br />
                {totalQty > 100 && <Alert type='error' msg={'invalid  !'} />}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        formulationData: state?.AdminReducer.formulationData,

    };
};
export default connect(mapStateToProps, { ADD_PRODUCTION_PROCESS_INGREGIENTS })(Ingredient);

