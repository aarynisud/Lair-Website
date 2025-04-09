"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMemo } from "react"
import lair from "../../../../public/lair.png"
import NavItem from "./NavItem"
import UserMenu from "./UserMenu"

interface NavbarProps {
    children?: React.ReactNode
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
    const pathname = usePathname()
    const routes = useMemo(
        () => [
            {
                label: "Commands",
                destination: "/commands",
                isActive: pathname == "/commands"
            },
            {
                label: "Docs",
                destination: "https://docs.lair.rocks",
                isActive: pathname == "https://docs.lair.rocks"
            }
        ],
        [pathname]
    )

    return (
        <div className="bg-[#0B0C0C] w-[100%] h-[95px] mb-20">
            <div className="2xl:container 2xl:mx-auto px-10 md:px-[8vw] 2xl:px-52 py-4">
                <div className="flex items-center justify-between mt-3">
                    <Link href="/" className="flex space-x-3">
                        <Image
                            src={lair}
                            alt="lair"
                            width={35}
                            height={35}
                            className="rounded-lg"
                        />
                        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#caca90] via-white to-[#caca90]">
                            lair
                        </h1>
                    </Link>
                    <div className="hidden lg:block space-x-12">
                        {routes.map(item => {
                            return (
                                <NavItem
                                    key={item.label}
                                    label={item.label}
                                    destination={item.destination}
                                    isActive={item.isActive}
                                />
                            )
                        })}
                    </div>
                    <UserMenu />
                </div>
            </div>
            <hr className="border-lair-card-border mt-2" />
            <div className="2xl:container 2xl:mx-auto px-12 py-4 2xl:px-52 2xl:py-4 mt-8">
                {children}
            </div>
        </div>
    )
}

export default Navbar
