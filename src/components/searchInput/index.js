
export default function TextInput() {

    return (
        <div className="sm:w-72 w-full">
            <input
                type="text"
                placeholder="Search bar"
                className="focus:outline-none focus-visible:border-gray-500 placeholder:text-gray-900 border border-gray-700 w-full h-10 px-2 py-1"
            />
        </div>
    )
}
