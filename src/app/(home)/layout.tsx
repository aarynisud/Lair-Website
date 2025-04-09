import type { Metadata, Viewport } from "next"
import "../../styles/globals.css"

export const viewport: Viewport = {
    themeColor: "transparent"
}

export const metadata: Metadata = {
    title: "lair",
    description: "The only aesthetic multi-functional discord bot you need.",
    twitter: {
        site: "https://lair.rocks/",
        card: "player"
    },
    openGraph: {
        url: "https://lair.rocks/",
        type: "website",
        title: "lair",
        siteName: "lair.rocks",
        description: "The only aesthetic multi-functional discord bot you need.",
        images: [
            {
                url: "https://cdn.lair.rocks/lair.png",
                width: 500,
                height: 500,
                alt: "lair"
            }
        ]
    }
}

export default function lairMain({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`bg-lair-100 font-satoshi`}>{children}</body>
        </html>
    )
}
