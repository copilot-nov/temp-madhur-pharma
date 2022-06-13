
import CheckBox from '../../../assets/svg/unSelectCheck.svg'
import SelectedCheckBox from '../../../assets/svg/selectedCheck.svg'

const ListOfIngredients = ({ handleSearch, listOfFilter, select,handleSelect }) => {
    return (
        <>
            <input
                onChange={handleSearch}
                type="text"
                required
                className="mb-4 rounded w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Search for your product"
            />
            <div className='h-96 overflow-auto pt-4'>
                {
                    listOfFilter?.map((item) => {
                        return (
                            <button key={item?.id} onClick={() => { handleSelect(item) }} className="w-full hover:shadow flex items-center gap-2 p-2 mt-2">
                                <img className="w-6 h-6" src={select?.includes(item?.name) ? SelectedCheckBox : CheckBox} alt={item?.name} />
                                <div className="flex flex-col">
                                    <strong className="text-slate-900 text-sm font-medium dark:text-green-900">{item?.name}</strong>
                                </div>
                            </button>
                        )
                    })
                }

            </div>
        </>
    )
}

export default ListOfIngredients;