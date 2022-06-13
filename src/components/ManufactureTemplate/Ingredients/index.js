import { useMemo, useState } from "react";
import SelectIngredient from "./selectingredient";
import { Alert } from '../../../components/alert';
import ProductManufacturing from "../ProductManufacturing";


const Ingredient = (props) => {
    const { subTab } = props
    const [select, setSelect] = useState([])
    const [ingredientPayload, setIngredientPayload] = useState([])
    console.log(select)
    const handleQty = async (e) => {
        let { name, value } = e.target
        let copydata = await ingredientPayload?.filter((item) => item?.name !== name)
        copydata.push({ name: name, qty: Number(value) })
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

    return (
        <div className="p-2">
            <div>
                <div className="m-1 flex justify-center text-green-900 w-full ">
                    <SelectIngredient select={select} setSelect={setSelect} />
                </div>
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
                                        style={{ width: 100, height: '2rem' }}
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
                            type="submit"
                            className=" py-2 px-8 border border-transparent shadow-sm text-sm font-medium text-white bg-green-900 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            Save
                        </button>
                    </div>
                :""}
                <br />
                {totalQty > 100 && <Alert type='error' msg={'invalid  !'} />}
            </div>
        </div>
    )
}

export default Ingredient;
