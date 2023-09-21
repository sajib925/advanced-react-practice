import react from 'react';


const CreateUser = () => {
    return (
            <div  className=" w-full overflow-x-hidden overflow-y-auto h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-2xl max-h-full">
                    <div className="relative bg-white rounded-lg shadow p-4">
                        <div className="flex items-start justify-between pb-4 rounded-t">
                            <h3 className="text-xl font-bold text-gray-900">
                                New User Create
                            </h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                            </button>
                        </div>
                        <form className={"flex flex-col items-end w-full"}>
                                <div className="mb-6 w-full">
                                    <label className="block mb-2 text-sm font-medium text-gray-900">User Name</label>
                                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="User Name" />
                                </div>

                            <div className="mb-6 w-full">
                                <label className="block mb-2 text-sm font-medium text-gray-900">User Email</label>
                                <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="User Name" />
                            </div>
                            <div className="mb-6 w-full">
                                <label className="block mb-2 text-sm font-medium text-gray-900">User Country</label>
                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="User Name" />
                            </div>
                            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5">
                                Create User
                            </button>
                        </form>
                    </div>
                </div>
            </div>

    );
}

export default CreateUser;