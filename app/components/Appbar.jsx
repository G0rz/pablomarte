'use client'
import {useState} from "react";
import {
    Navbar, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button
} from "@nextui-org/react";
import {usePathname} from "next/navigation";

export default function Appbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const currentPath = usePathname();
    const menuItems = [{name: 'Music', link: '/music'}, {name: 'About Me', link: '/about-me'}, {
        name: 'Contact', link: '/contact'
    }, {name: "Gallery", link: '/gallery'},];

    return (<Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent className={'md:hidden'}>
            <NavbarMenuToggle
                              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            />
        </NavbarContent>

        <NavbarContent className="hidden md:flex gap-4" justify="center">
            {menuItems.map((item, index) => {
                return <NavbarItem key={index} isActive={currentPath === item.link}>
                    <Link color={currentPath === item.link ? "primary" : "foreground"} href={item.link}
                          aria-current={item.name}>
                        {item.name}
                    </Link>
                </NavbarItem>
            })}
        </NavbarContent>
        <NavbarMenu>
            {menuItems.map((item, index) => {
                return <NavbarMenuItem key={index}>
                    <Link
                        color={currentPath === item.link ? "primary" : "foreground"}
                        className="w-full"
                        href={item.link}
                        size="lg"
                    >
                        {item.name}
                    </Link>
                </NavbarMenuItem>
            })}
        </NavbarMenu>
    </Navbar>);
}
