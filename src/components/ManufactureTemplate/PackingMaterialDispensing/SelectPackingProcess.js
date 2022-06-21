import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import ListOfPackingProcess from './PackingList'
import { connect } from 'react-redux'

// const materialList = [
//     { id: 1, name: 'Cyclopentasiloxane' },
//     { id: 2, name: 'Dimethiconol' },
//     { id: 3, name: 'Polydimethylsiloxane' },
//     { id: 4, name: 'Squalene Oil' },
//     { id: 5, name: 'Argania Spinosa Kernel Oil' },
//     { id: 6, name: 'Baobab Oil' },
//     { id: 7, name: 'Vitamin E-Acetate' },
//     { id: 8, name: 'Geogaard' },
//     { id: 9, name: 'Aqua Tonus Fragrance' },
// ]
const SelectPackingProcess = (props) => {
    const { select, setSelect, materialList, setMaterialId, materialId} = props
    const [listOfFilter, setListOfFilter] = useState(materialList)
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const handleSearch = async (e) => {
        let { value } = e.target
        let searchResult = await materialList?.filter((item) => item?.name.toLowerCase().includes(value.toLowerCase()))
        await setListOfFilter(searchResult)
    }
    // console.log(select)
    const handleSelect = (value) => {
        
        let copydata = []
        if (select?.includes(value?.name)) {
            copydata = select?.filter(item => item !== value?.name)
            setSelect(copydata)
            
        } else {
            setSelect([...select, value?.name])
            setMaterialId([...materialId, value?.id])

        }
    }

    return (
        <div className="flex justify-start items-center w-full">
            <button
                type="button"
                onClick={openModal}
                className="w-1/2 border border-gray-700 h-10 px-4 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                <div className='flex justify-start items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-700 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span className='ml-4 text-gray-700'>Search for Materials</span>
                </div>
            </button>

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
                                <Dialog.Panel className="w-full max-w-md transform bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title as="h3" className="mb-2 text-lg font-medium leading-6 text-gray-900">
                                        Select Materials
                                    </Dialog.Title>
                                    <ListOfPackingProcess handleSearch={handleSearch} listOfFilter={listOfFilter} select={select} handleSelect={handleSelect} />
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
    return {
        materialList: state?.AdminReducer.materialList,

    };
};
export default connect(mapStateToProps, null)(SelectPackingProcess);
