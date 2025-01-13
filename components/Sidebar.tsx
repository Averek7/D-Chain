import { useGlobalContext } from "@/context/GlobalContext";
import Home from "@/public/assets/Home";
import Telegram from "@/public/assets/Telegram";
import Twitter from "@/public/assets/Twitter";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const topIconCss =
    "group cursor-pointer mb-2.5 transition-all flex items-center justify-center rounded-md w-12 h-9 bg-transparent hover:bg-[#1E2024] focus:bg-[#1E2024] text-[#ababac] hover:text-[#5F4DFF] focus:text-[#5F4DFF]";
const bottomIconCss =
    "cursor-pointer mb-2.5 transition-all flex items-center justify-center rounded-md w-12 h-9 bg-[#181A1D] hover:bg-[#1E2024] focus:bg-[#1E2024] text-[#ababac] hover:text-[#5F4DFF] focus:text-[#5F4DFF]";

const closedIconCss =
    "w-5 h-5 text-white group-hover:text-[#5F4DFF] group-focus:text-[#5F4DFF] transition-all opacity-50";
const activeIconCss = "w-5 h-5 text-[#5F4DFF] transition-all";

export default function Sidebar({
    sidebar,
    setSidebar,
}: {
    sidebar: boolean;
    setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const router = useRouter();
    const { userRole } = useGlobalContext();

    return (
        <div
            className={`${sidebar ? "min-w-[15rem] justify-between" : "w-[4.15rem]"
                } z-50 relative transition-width hidden bg-[#121418] text-white md:flex flex-col items-center pb-3.5 no-scrollbar overflow-y-auto h-[calc(100dvh-4.7rem)]`}
        >
            {sidebar ? (
                <OpenSidebar sidebar={sidebar} userRole={userRole} />
            ) : (
                <div
                    className={`${sidebar ? "fadeOutDown" : "fadeIn"
                        } flex flex-col items-center justify-between w-full h-full pt-4`}
                >
                    <div
                        onClick={() => {
                            if (router.pathname === "/") {
                                setSidebar(true);
                            } else {
                                router.push("/");
                                setSidebar(false);
                            }
                        }}
                        className={`${topIconCss}`}
                    >
                        <Home
                            className={
                                router.pathname === "/" ? activeIconCss : closedIconCss
                            }
                        />
                    </div>

                    <div className="w-full flex flex-col items-center mb-2">
                        <Link
                            href={"https://x.com/superbetgames"}
                            target="_blank"
                            className={`${bottomIconCss}`}
                        >
                            <Twitter className={`${closedIconCss}`} />
                        </Link>

                        <Link
                            href={"https://t.me/superbetgames "}
                            target="_blank"
                            className={`${bottomIconCss}`}
                        >
                            <Telegram className={`${closedIconCss}`} />
                        </Link>
                    </div>
                </div>

            )}
        </div>
    );
}

export const SidebarOpenElement = ({
    text,
    link,
}: {
    text: string;
    link?: string;
}) => {
    const router = useRouter();
    return (
        <div
            onClick={() => {
                link && router.push(link);
            }}
            className="w-full transition-all cursor-pointer rounded-md flex items-end gap-3 pl-4 py-2 bg-transparent hover:bg-[#1f2024] focus:bg-[#1f2024] group"
        >
            <span className="transition-all text-sm leading-[1rem] font-medium tracking-wider text-white text-opacity-90 group-hover:text-opacity-100 group-focus:text-opacity-100">
                {text}
            </span>
        </div>
    );
};

export const OpenSidebar = ({
    sidebar,
    userRole,
}: {
    sidebar: boolean;
    userRole: string;
}) => {
    const openLinkCss =
        "w-full gap-2 flex items-center justify-center text-sm font-semibold text-white text-opacity-50 hover:bg-white/10 transition duration-300 ease-in-out hover:transition hover:duration-300 hover:ease-in-out bg-[#191A1D] rounded-md text-center py-2 mb-2";
    const router = useRouter();
    const { setSidebar } = useGlobalContext();

    const sidebarContent: Record<string, { text: string; link: string }[]> = {
        Supplier: [
            { text: "Add Inventory", link: "/add-inventory" },
            { text: "View Stock", link: "/view-stock" },
            { text: "Track Shipments", link: "/track-shipments" },
        ],
        Manufacturer: [
            { text: "Add Production Data", link: "/add-production" },
            { text: "Approve Incoming Supplies", link: "/approve-supplies" },
        ],
        Retailer: [
            { text: "Track Deliveries", link: "/track-deliveries" },
            { text: "Receive Stock", link: "/receive-stock" },
            { text: "Verify Product Authenticity", link: "/verify-authenticity" },
        ],
    };

    return (
        <>
            <div className="w-full">
                <div
                    className={`${sidebar ? "fadeInUp" : "fadeOutDown"
                        } w-full flex flex-col p-4 gap-1.5`}
                >
                    <div
                        onClick={() => {
                            if (router.pathname === "/") {
                                setSidebar(true);
                            } else {
                                router.push("/");
                                setSidebar(false);
                            }
                        }}
                        className={`${topIconCss}`}
                    >
                        <SidebarOpenElement
                            text="Home"
                            link="/"
                        />
                    </div>
                    {sidebarContent[userRole]?.map((item) => (
                        <SidebarOpenElement key={item.text} text={item.text} link={item.link} />
                    ))}
                </div>
            </div>
            <div
                className={`${sidebar ? "fadeInUp" : "fadeOutDown"
                    } w-full flex flex-col p-4 mb-0`}
            >
                <Link
                    href="https://x.com/superbetgames"
                    className={`${openLinkCss}`}
                    target="_blank"
                >
                    <Twitter className="w-5 h-5" />
                    Twitter
                </Link>

                <Link
                    href="https://t.me/superbetgames "
                    className={`${openLinkCss}`}
                    target="_blank"
                >
                    <Telegram className="w-5 h-5" />
                    Telegram
                </Link>

            </div>
        </>
    );
};
