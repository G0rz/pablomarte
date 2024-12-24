import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link} from "@nextui-org/react";

export default function DropdownButton(props) {
    return (<Dropdown backdrop="blur">
        <DropdownTrigger>
            <Button className="text-white bg-black/20 " variant="flat" color="default" radius="lg" size="sm">
                Listen
            </Button>
        </DropdownTrigger>
        <DropdownMenu variant="faded" aria-label="Static Actions" className={'text-center'}>
            {props.links.map((link) => {
                return <DropdownItem key={link.link} as={Link} href={link.link} isExternal>
                    {link.name}
                </DropdownItem>
            })}
        </DropdownMenu>
    </Dropdown>);
}