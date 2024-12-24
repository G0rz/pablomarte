import {Image} from "@nextui-org/react";

const Page = () => {
    return (<div className={'flex flex-wrap justify-center items-center'}>
        <h1 className={'text-3xl md:text-5xl w-full text-center mb-4'}>ABOUT ME</h1>
        <div className="w-5/12">
            <Image
                isZoomed
                layout="responsive"
                className="object-cover"
                alt={'about me'}
                src={'/assets/images/aboutme.webp'}
                height={350}
            />
        </div>
        <p className={'text-lg w-5/12'}>
            En 2019 conocí la música por "casualidad" o al menos eso creo... a partir de ese momento comencé a
            componer sin tener conocimientos musicales y en noviembre de ese mismo año nació "Petricor", una canción
            creada totalmente de mi intuición, de mi experiencia y de mi sentir. Me enamoré de ese proceso de
            plasmar cosas increíbles como el sentir del ser humano en fragmentos musicales. Pablo Marte hace alusión
            a la frase para amarte y si estas escuchando estas canciones y más aun leyendo esto probablemente creas
            que es mera coincidencia, pero estoy seguro que no lo es.
        </p>
    </div>);
};

export default Page;