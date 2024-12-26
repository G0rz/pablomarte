'use client'

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const Home = () => {

    return (<div className={'flex flex-wrap justify-center items-center text-center'}>
        <h1 className={'text-3xl md:text-5xl w-full'}>LO MÁS NUEVO</h1>
        <div className={'w-1/2 p-4'}>
            <LiteYouTubeEmbed
                id="GvUWDPo7rY0"
                title={''}/>
        </div>
    </div>);
};

export default Home;