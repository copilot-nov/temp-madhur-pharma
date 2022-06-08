import { useMemo, useState } from "react";
import { Alert } from '../../../components/alert';
// import ProductManufacturing from "../ProductManufacturing";
import SelectPackingProcess from "./SelectPackingProcess";


const PackingMaterialsDispensing = (props) => {
    const { subTab } = props
    const [select, setSelect] = useState([])
    const [ingredientPayload, setIngredientPayload] = useState([])

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
            <div className="m-1 flex justify-center text-green-900 w-full ">
                <SelectPackingProcess select={select} setSelect={setSelect} />
            </div>
            <div className="grid grid-cols-3">

                {
                    select?.map((item, i) => {
                        return (
                            <div key={item} className="m-1 flex justify-between items-center text-green-900 w-full hover:shadow p-2">
                                <p className="text-sm"> <span className="mr-2">[{i + 1}.]</span> {item}</p>
                            </div>
                        )
                    })
                }
            </div>
            <br />
            {totalQty > 100 && <Alert type='error' msg={'invalid  !'} />}

        </div>
    )
}

export default PackingMaterialsDispensing;