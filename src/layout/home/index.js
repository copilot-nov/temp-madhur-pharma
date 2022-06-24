import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import AddModal from '../../components/addmodal';
import Navbar from '../../components/navbar'
import TextInput from '../../components/searchInput';
import SelectManagmentType from '../../components/SelectManagmentType';
import TailwindTableCss from '../../components/tailwind-table';
import { selectModuleColumn } from '../../utility/selectModuleColumn';

const Homelayout = (props) => {
    const { usermanagmentList, CustomerManagmentList, ingredientList, materialList, productList, manufacturingTemplateList, orderList } = props?.AdminReducer
    const [selected, setSelected] = useState(selectModuleColumn[1])
    const [data, setData] = useState([])
    // console.log(manufacturingTemplateList)
    // console.log(materialList)
    const dataBycondition = () => {
        if (selected?.name === 'Customer Management') {
            return CustomerManagmentList
        } else if (selected?.name === 'User Management') {
            return usermanagmentList
        } else if (selected?.name === 'Product Management') {
            return productList
        } else if (selected?.name === 'Material Management') {
            return materialList
        } else if (selected?.name === 'Ingredient Management') {
            return ingredientList
        } else if (selected?.name === 'Manufacturing Template') {
            return manufacturingTemplateList
        } else if (selected?.name === 'Order Management') {
            return orderList
        }
    }
    // console.log(selected)
    //  console.log(selected?.name)
    useEffect(() => {
        setData(dataBycondition())
    }, [dataBycondition, orderList, manufacturingTemplateList, productList, CustomerManagmentList, usermanagmentList, materialList, ingredientList])
    // console.log(data)
    return (
        <div>
            <Navbar current={"/home"} />
            <div className='sm:mx-6 mx-2 mt-10'>
                <SelectManagmentType selected={selected} setSelected={setSelected} selectModuleColumn={selectModuleColumn} />
            </div>
            <div className="grid grid-cols-6 gap-6 sm:mx-6 mx-2 mt-8">
                <div className="col-span-6 sm:col-span-3">
                    <div className='flex items-center justify-start'>
                        <TextInput />
                        <AddModal
                            titleModal={selected?.name}
                            formulationId={selected?.id}
                            classes='flex items-center justify-start px-3 py-2 cursor-pointer p-1 text-green-900'
                            btnTitle={
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                </svg>
                            }
                        />
                    </div>
                </div>
            </div>
            <div className='sm:mx-6 mx-2 mt-6 shadow'>
                <TailwindTableCss columns={selected?.columns || selectModuleColumn[1]?.columns} data={data} title={selected?.name} />
            </div>
            {/* <AlertMsgComponent /> */}
        </div>
    );
};


const mapStateToProps = (state) => {
    // console.log(state)
    return {
        AdminReducer: state?.AdminReducer,
    };
};
export default connect(mapStateToProps, null)(Homelayout);
