import {Image, Link} from "@nextui-org/react";

const Page = () => {
    return (<div className={'flex flex-wrap justify-center items-center text-center'}>
        <h1 className={'text-3xl md:text-5xl w-full mb-4'}>CONTACT</h1>
        <Image
            isZoomed
            layout="responsive"
            className="object-cover"
            alt={'about me'}
            src={'/assets/images/contactme.webp'}
            shadow={'md'}
            width={450}
        />
        <h2 className={'text-xl md:text-3xl w-full my-2'}>Management:
            <Link color="foreground"
                  className={'text-xl md:text-2xl'}
                  href={'mailto: pablomarte37@gmail.com'}>pablomarte37@gmail.com</Link>
        </h2>
    </div>)
};

export default Page;