import React, { ReactNode } from "react";
import Header from './Header'
import Sidebar from "./Sidebar";
import { useGlobalContext } from "@/context/GlobalContext";

interface Props {
    children: ReactNode;
}
function Layout({ children }: Props) {
    const { sidebar, setSidebar } = useGlobalContext();

    const toggleSidebar = () => {
        setSidebar(!sidebar);
        // setMobileSidebar(!sidebar);
    };

    return (
        <>
            <Header sidebar={sidebar} toggleSidebar={toggleSidebar} />
            <section className="relative flex flex-1 max-h-[calc(100%-5rem)]">
                <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
                <section className="w-full relative overflow-hidden">
                    <section className="relative w-full h-full md:pt-[0rem]">
                        <main
                            className={`marker:w-full h-full max-h-[calc(100%-0rem)]`}
                        >
                            <section className="w-full h-full overflow-x-hidden overflow-y-auto nobar">
                                <div
                                    id="scroll-element"
                                    className="w-full min-h-[1px] bg-transparent"
                                />
                                {children}
                                <div className="w-full">
                                    {/* <Footer /> */}
                                </div>
                            </section>
                        </main>
                    </section>
                </section>
            </section>
        </>
    )
}

export default Layout