import  react from 'react';


const UserTable = () => {
    return (
        <section>
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center gap-y-8 mt-10">
                    <div className="flex items-center justify-between w-full">


                        <form>
                            <div className="relative">
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input type="search" className="block w-full py-3 pr-10 pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-gray-400 outline-none" placeholder="Search" />

                            </div>
                        </form>


                        <h1 className="text-2xl font-bold text-neutral-700">User Table</h1>
                        <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5">
                            Create User
                        </button>
                    </div>

                    <div className="relative overflow-x-auto w-full">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead
                                className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    User Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    User Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Country Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple MacBook Pro 17"
                                </th>
                                <td className="px-6 py-4">
                                    Silver
                                </td>
                                <td className="px-6 py-4">
                                    Laptop
                                </td>
                                <td className="px-6 py-4">
                                    $2999
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Microsoft Surface Pro
                                </th>
                                <td className="px-6 py-4">
                                    White
                                </td>
                                <td className="px-6 py-4">
                                    Laptop PC
                                </td>
                                <td className="px-6 py-4">
                                    $1999
                                </td>
                            </tr>
                            <tr className="bg-white dark:bg-gray-800">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Magic Mouse 2
                                </th>
                                <td className="px-6 py-4">
                                    Black
                                </td>
                                <td className="px-6 py-4">
                                    Accessories
                                </td>
                                <td className="px-6 py-4">
                                    $99
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default UserTable