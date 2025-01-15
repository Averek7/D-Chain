"use client";
import { useGlobalContext } from "@/context/GlobalContext";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import React, { useEffect, useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import RoleSelectionModal from "./RoleSelectionModal";
import axios from "axios";

export function Header({
    sidebar,
    toggleSidebar,
}: {
    sidebar: boolean;
    toggleSidebar: () => void;
}) {
    const { open, close } = useAppKit()
    const { address, isConnected } = useAppKitAccount();
    const { showRoleModal, setShowRoleModal, setUserRole, userRole } =
        useGlobalContext();
    const [isUserRegistered, setIsUserRegistered] = useState<boolean>(false);

    useEffect(() => {
        const checkUserRegistration = async () => {
            if (isConnected && address) {
                try {
                    const response = await axios.post("http://localhost:5000/api/login", {
                        walletAddress: address,
                    });
                    if (response.status === 200) {
                        setUserRole(response.data.user.role);
                        setIsUserRegistered(true);
                    }
                } catch (error) {
                    console.log("User not registered yet");
                    setIsUserRegistered(false);
                }
            }
        };

        checkUserRegistration();
    }, [address, isConnected]);

    const handleRoleSelect = async (role: string) => {
        try {
            const response = await axios.post("http://localhost:5000/api/register", {
                walletAddress: address,
                role,
            });
            if (response.status === 201) {
                console.log("User registered successfully");
                setUserRole(role);
            }
            setShowRoleModal(false);
        } catch (error) {
            console.log("Error registering user:", error);
        }
    };

    const handleCloseModal = () => {
        setShowRoleModal(false);
    };

    const handleButtonClick = () => {
        if (!isConnected && !isUserRegistered) {
            setShowRoleModal(true);
        }
    };

    return (
        <div
            className={`${sidebar ? "" : ""
                } z-[100] sticky top-0 w-full flex flex-col`}
        >
            <div
                className={`${sidebar ? "" : ""
                    } w-full bg-[#121418] flex flex-col items-center py-4 px-4 border-b border-[#1E2220]`}
            >
                <div className="w-full relative flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center cursor-pointer gap-2 z-10">
                        <div className="flex sm:hidden relative">{/* Mobile */}</div>
                        <RiMenuLine
                            onClick={() => toggleSidebar()}
                            className={`hidden sm:flex text-white w-7 h-7 hover:text-[#8033D7] transition-all duration-75 ${sidebar ? "text-[#8033d7]" : "text-white"
                                }`}
                        />
                    </div>
                    <div className="flex flex-row items-center gap-4">
                        <div className="text-lg font-semibold text-white">
                            Welcome, {isConnected ? userRole : "XYZ"}
                        </div>
                        <button className="bg-[#192634] hover:bg-[#121D28] transition-all w-full sm:w-fit flex items-center rounded-md h-10 px-5" onClick={() => { open(); handleButtonClick(); }}>
                            {!isConnected ? (<span className="connect-wallet text-white font-semibold rounded-md text-base">
                                Connect Wallet
                            </span>) :
                                <p className="connect-wallet text-white font-semibold rounded-md text-base">
                                    {address?.slice(0, 6)}...{address?.slice(-4)}
                                </p>}
                        </button>
                    </div>
                </div>
            </div>
            {isConnected && !isUserRegistered && (
                <RoleSelectionModal
                    isOpen={showRoleModal}
                    onClose={handleCloseModal}
                    onRoleSelect={handleRoleSelect}
                />
            )}
        </div>
    );
}

export default Header;
