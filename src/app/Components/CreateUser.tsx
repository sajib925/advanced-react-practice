import { useStateContext } from "@/app/context/context";
import { useState } from "react";

const CreateUser = () => {
    // @ts-ignore
    const { isModalOpen, handleModal, userData, setUserData } = useStateContext();
    const initialState = {
        id: "",
        name: "",
        email: "",
        country: "",
    };
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        country: "",
    });

    const handleFormChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        const newErrors = {
            name: "",
            email: "",
            country: "",
        };

        if (!formData.name) {
            newErrors.name = "Name is required";
        }

        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!regex.test(formData.email)) {
            newErrors.email = "This is not a valid email";
        }

        if (!formData.country) {
            newErrors.country = "Country is required";
        }

        setErrors(newErrors);

        return Object.values(newErrors).every((error) => !error);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (validate()) {
            setUserData([...userData, formData]);
            setFormData(initialState);
        }
    };

    return (
        <div
            className={`${
                isModalOpen ? "top-0" : "-top-full"
            } fixed right-0 left-0 w-full h-full ease-in-out duration-300`}
        >
            <div
                className="max-w-[580px] w-full absolute top-[10%] left-[50%] -translate-x-[50%] bg-white rounded-lg shadow p-4"
            >
                <div className="flex items-start justify-between pb-4 rounded-t">
                    <h3 className="text-xl font-bold text-gray-900">New User Create</h3>
                    <button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                        onClick={handleModal}
                    >
                        <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                        </svg>
                    </button>
                </div>
                <form className={"flex flex-col items-end w-full"} onSubmit={handleSubmit}>
                    <div className="mb-6 w-full">
                        <label className="block mb-2 text-sm font-medium text-gray-900">User Name</label>
                        <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="User Name"
                            name="name"
                            value={formData.name}
                            onChange={handleFormChange}
                        />
                        <span className="text-red-800 pt-4">{errors.name}</span>
                    </div>

                    <div className="mb-6 w-full">
                        <label className="block mb-2 text-sm font-medium text-gray-900">User Email</label>
                        <input
                            type="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="User Email"
                            name="email"
                            value={formData.email}
                            onChange={handleFormChange}
                        />
                        <span className="text-red-800 pt-4">{errors.email}</span>
                    </div>
                    <div className="mb-6 w-full">
                        <label className="block mb-2 text-sm font-medium text-gray-900">User Country</label>
                        <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="User Country"
                            name="country"
                            value={formData.country}
                            onChange={handleFormChange}
                        />
                        <span className="text-red-800 pt-4">{errors.country}</span>
                    </div>
                    <button
                        type="submit"
                        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5"
                    >
                        Create User
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateUser;
