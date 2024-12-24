import {Button, Link, Tooltip} from "@nextui-org/react";
import {AppleMusic} from "@/app/components/icons/AppleMusic";
import {Instagram} from "@/app/components/icons/Instagram";
import {Spotify} from "@/app/components/icons/Spotify";
import {AmazonMusic} from "@/app/components/icons/AmazonMusic";
import {Deezer} from "@/app/components/icons/Deezer";
import {Youtube} from "@/app/components/icons/Youtube";

const socialLinks = [{
    name: 'Instagram',
    link: 'https://www.instagram.com/paul.t30?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    icon: <Instagram fill={'#FFFFFF'}/>
}, {
    name: 'Spotify',
    link: 'https://open.spotify.com/artist/56CzSMvDKHkeNOZqtlqq3o?si=gbE8aZufR--w1d9pshQV4A',
    icon: <Spotify fill={'#FFFFFF'}/>
}, {
    name: 'Apple Music',
    link: 'https://music.apple.com/mx/artist/pablo-marte/1494510551',
    icon: <AppleMusic fill={'#FFFFFF'}/>
}, {
    name: 'Amazon Music',
    link: 'https://music.amazon.com.mx/artists/B083WNNZ92/pablo-marte',
    icon: <AmazonMusic fill={'#FFFFFF'}/>
}, {name: 'Deezer', link: 'https://deezer.page.link/nXWned21ZMWtzf9G6', icon: <Deezer fill={'#FFFFFF'}/>}, {
    name: 'Youtube', link: 'https://www.youtube.com/@Pablo.marte27', icon: <Youtube fill={'#FFFFFF'}/>
}];

const Footer = () => {
    return (<div className={'w-full flex flex-wrap justify-center items-center text-center min-h-[10vh]'}>
        {socialLinks.map((social, index) => {
            return <div key={index}>
                <Tooltip showArrow={true} content={social.name}>
                    <Button as={Link} href={social.link} isExternal isIconOnly
                            color={'foreground'}
                            aria-label={social.name}
                            className={'mx-1'}>
                        {social.icon}
                    </Button>
                </Tooltip>
            </div>;
        })}
        <p className={'w-full my-2'}>Copyright © <Link color={'foreground'} isBlock isExternal showAnchorIcon
                                                       href={'https://github.com/G0rz'}
                                                       aria-current={'G0rz'}>G0rz</Link> {new Date().getFullYear()}. All
            rights reserved.</p>
    </div>);
};

export default Footer;