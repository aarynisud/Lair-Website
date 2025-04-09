"use client"
import Link from "next/link"

interface NavItemProps {
    label: string
    destination: string
    isActive: boolean
}

const NavItem: React.FC<NavItemProps> = ({ label, destination, isActive, ...props }) => {
    return (
        <Link
            href={destination}
            className={`font-medium ${isActive ? "text-lair-main py-5 border-b-2 border-lair-pink pb-8" : "text-zinc-500"}`}
            {...props}>
            {label}
        </Link>
    )
}

export default NavItem
