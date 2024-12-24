'use client'
import {useState} from "react";
import {
    Navbar, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Image
} from "@nextui-org/react";
import {usePathname} from "next/navigation";

export default function Appbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const currentPath = usePathname();
    const menuItems = [{name: 'Music', link: '/music'}, {name: 'About Me', link: '/about-me'}, {
        name: 'Contact', link: '/contact'
    }, {name: "Gallery", link: '/gallery'},];

    return (<Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen} className={'bg-[#2380D1] h-[10vh]'}>
        <NavbarContent className={'md:hidden'}>
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            />
            <Button as={Link} href={'/'}
                    className={'text-white text-2xl ml-auto'}
                    color={'foreground'}
                    aria-label={'home'}
                    startContent={<Image
                        alt="logo"
                        className={'object-cover w-10 rounded-full'}
                        src={'/assets/images/pablo_marte_icon.jpg'}
                    />}
            >
                PABLO MARTE
            </Button>
        </NavbarContent>

        <NavbarContent className="hidden md:flex md:flex-wrap md:items-center md:gap-4 w-full" justify="center">
            <NavbarItem className={'font-bold mr-auto flex'}>
                <Button as={Link} href={'/'}
                        className={'text-white text-2xl'}
                        color={'foreground'}
                        aria-label={'home'}
                        startContent={<Image
                            alt="logo"
                            className={'object-cover w-10 rounded-full'}
                            src={'/assets/images/pablo_marte_icon.jpg'}
                        />}
                >
                    PABLO MARTE
                </Button>
            </NavbarItem>
            {menuItems.map((item, index) => {
                return <NavbarItem key={index} isActive={currentPath === item.link}>
                    <Link underline={currentPath === item.link ? "active" : ""}
                          color={'foreground'}
                          href={item.link}
                          isBlock
                          aria-current={item.name}>
                        {item.name}
                    </Link>
                </NavbarItem>
            })}
        </NavbarContent>
        <NavbarMenu>
            {menuItems.map((item, index) => {
                return <NavbarMenuItem key={index} isActive={currentPath === item.link}>
                    <Link
                        className="text-uppercase"
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
