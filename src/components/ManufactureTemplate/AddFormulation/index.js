import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { GET_PROCESS_MASTER_LIST } from "../../../redux/actions/admin";
// import ProcessMaster from "./process-master";
import ManufactureTemplateTabs from "./tabs";


// const processMasterList = [
//     'Product Formulation',
//     'Ingredient Dispensing',
//     'Product Manufacturing',
//     'Product Unloading',
//     'Packing Material Dispensing',
//     'Cleaning & Inspection',
//     'Data Coding',
//     'Filling & Packing',
//     'Weighing',
//     'Dispatch'
// ]
const ManufactureTemplate = (props) => {
    const { GET_PROCESS_MASTER_LIST, processMaster, isOpen, titleModal, setIsOpen, closeModal, manufacturingTemplateEditResponse, Id } = props
    const [select, setSelcted] = useState([])
    const [processId, setProcessId] = useState([])
    const [selectedProcessData, setSelectedProcessData] = useState()
    const [selectedMaterial, setSelectedMaterial] = useState([])


    // const [ processName, setProcessName]= useState


    const handleSelect = (value) => {
        setSelectedProcessData(value)
        setProcessId([...processId, value?.id])
        // console.log(value)
        let copydata = []
        if (select?.includes(value?.name)) {
            copydata = select?.filter(item => item !== value?.name)
            setSelcted(copydata)
        } else {
            setSelcted([...select, value?.name])
        }
    }
    // console.log(titleModal)

    // const handleSubmitProcess =()=> {

    // }

    // console.log(processMaster)

    useEffect(() => {
        GET_PROCESS_MASTER_LIST()
    }, [GET_PROCESS_MASTER_LIST])


    const getNext = () => {
        let index = processMaster.indexOf(select)
        // console.log(index)
    }

    return (
        <div >
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="lg:w-xl transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="mx-1 border-b border-gray-900 text-lg font-medium text-green-900 sm:px-6 px-2 py-2 mb-1"
                                    >
                                        {titleModal}
                                    </Dialog.Title>
                                    <div style={{ width: '1400px', minWidth: '400px', height: '90vh' }}>
                                        <ManufactureTemplateTabs
                                            processMasterList={processMaster}
                                            select={select}
                                            tabsName={select}
                                            handleSelect={handleSelect}
                                            processId={processId}
                                            selectedProcessData={selectedProcessData}
                                            setSelectedMaterial={setSelectedMaterial}
                                            selectedMaterial={selectedMaterial}
                                            manufacturingTemplateEditResponse={manufacturingTemplateEditResponse}
                                            Id={Id}
                                        />

                                        <div>
                                            {select?.length > 0 &&
                                                <div className="bottom-12 right-10 right fixed flex justify-end">
                                                    <button
                                                        // onClick={() => { setIsOpen(false) }}
                                                        className="mr-2 inline-flex justify-center py-2 px-8 border border-green-900 shadow-sm text-sm font-medium text-green-900 bg-white hover:bg-green-100 hover:text-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                                    >
                                                        Cancel</button>
                                                    <button onClick={getNext} className="bg-green-900 px-6 py-2 text-white hover:bg-green-800">Submit</button>
                                                </div>
                                            }
                                        </div>

                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        processMaster: state.AdminReducer?.processMaster
    };
};
export default connect(mapStateToProps, { GET_PROCESS_MASTER_LIST })(ManufactureTemplate);