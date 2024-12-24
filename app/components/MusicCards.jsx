import {Card, CardFooter, Image, Button} from "@nextui-org/react";
import DropdownButton from "@/app/components/DropdownButton";

export default function MusicCards(props) {
    return (<Card isFooterBlurred className="border-none m-4" radius="lg">
        <Image
            isZoomed
            layout="responsive"
            className="object-cover"
            alt={props.song.name}
            src={props.song.image}
            height={300}
            width={300}
        />
        <CardFooter
            className="justify-around items-center text-center font-black before:bg-white/10 overflow-hidden absolute before:rounded-xl rounded-large bottom-0 w-full shadow-small hover:shadow-lg z-10">
            <p className="text-white">{props.song.name}</p>
            {props.song.links.length > 0 ? <DropdownButton links={props.song.links}/> :
                <p className="text-red-700">Available soon</p>}
        </CardFooter>

    </Card>);
}