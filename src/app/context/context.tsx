"use client"
import React, { useContext, createContext, useState } from 'react';
type UserData = {
    id: number;
    name: string;
    email: string;
    country: string;
};
type StateContextType = {
    isModalOpen: boolean;
    handleModal: React.Dispatch<React.SetStateAction<boolean>>;
    userData: UserData[];
    setUserData: React.Dispatch<React.SetStateAction<UserData[]>>;
};

const StateContext = createContext<StateContextType | undefined>({
    isModalOpen: false,
    handleModal: () => {},
    userData: [],
    setUserData: () => {},
});

export const ContextProvider = ({ children }: {children: React.ReactNode}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userData, setUserData] = useState<UserData[]>([]);
const handleModal = ()  => {
    setIsModalOpen((isModalOpen)=>!isModalOpen);
}
    return (
        <StateContext.Provider value={{ isModalOpen, handleModal,userData, setUserData }}>
            {children}
        </StateContext.Provider>
    );
};
export const useStateContext = () => {
    return useContext(StateContext);
};
