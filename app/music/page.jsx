'use client'
import MusicCards from "@/app/components/MusicCards";

export default function Page() {

    const songs = [{
        name: 'Luna', image: '/assets/images/luna.webp', links: [{
            name: 'Spotify', link: 'https://open.spotify.com/intl-es/track/1Mj7FYp9wc3qjEVWBjdt55?si=0de1ead01cda44bd'
        }, {
            name: 'Apple Music', link: 'https://music.apple.com/mx/album/luna/1778749802?i=1778749803'
        }, {
            name: 'Amazon Music',
            link: 'https://music.amazon.com.mx/albums/B0DMF2VPZJ?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=MX&ref=dm_sh_fMjBfudsKYJptFcC52bZ7GKHl&trackAsin=B0DMDTFY6D'
        }, {
            name: 'Deezer', link: 'https://deezer.page.link/9mQGZryJ3c7sai8g8'
        }, {
            name: 'Youtube Music',
            link: 'https://music.youtube.com/playlist?list=OLAK5uy_nJNc7VrTQIbjdBNENv1x5A-iZ40vjM03Y&feature=shared'
        }]
    }, {
        name: 'Te Quiero A Ti', image: '/assets/images/tequieroati.webp', links: [{
            name: 'Spotify', link: 'https://open.spotify.com/intl-es/track/2eGbbEDMUKoGd3ezp4W3E4?si=3b7986401f274832'
        }, {
            name: 'Apple Music', link: 'https://music.apple.com/mx/album/te-quiero-a-ti/1753498529?i=1753498530'
        }, {
            name: 'Amazon Music',
            link: 'https://music.amazon.com.mx/albums/B0D7SYWBNW?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=MX&ref=dm_sh_caUAxvfDslYWgpt6XmFiNZawU&trackAsin=B0D7SZ4X66'
        }, {
            name: 'Deezer', link: 'https://deezer.page.link/AzSwt1tRBDbVmcYf8'
        }, {
            name: 'Youtube Music',
            link: 'https://music.youtube.com/playlist?list=OLAK5uy_nyeqBwhqzirCzKi5U3j8yhBmAnAwfeS84&feature=shared'
        }]
    }, {
        name: 'Partículas', image: '/assets/images/particulas.webp', links: [{
            name: 'Spotify', link: 'https://open.spotify.com/intl-es/track/6JyLCsGRxX67dqaLhINt88?si=526564779cda4fe2'
        }, {
            name: 'Apple Music', link: 'https://music.apple.com/mx/album/part%C3%ADculas/1746538885?i=1746538886'
        }, {
            name: 'Amazon Music',
            link: 'https://music.amazon.com.mx/albums/B0D47RTR6C?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=MX&ref=dm_sh_jRqhoHsxdAo573dl7dfkGz8Hg&trackAsin=B0D47SC53L'
        }, {
            name: 'Deezer', link: 'https://deezer.page.link/PDypSamiu8xQKBEv5'
        }, {
            name: 'Youtube Music',
            link: 'https://music.youtube.com/playlist?list=OLAK5uy_mhITLsYJtQQ8WoH8O-IdQqNq4UDjdyIGo&feature=shared'
        }]
    }, {
        name: 'Tu Amor Que Nunca Fue - Acoustic Version', image: '/assets/images/tuamorquenuncafue.webp', links: [{
            name: 'Spotify', link: 'https://open.spotify.com/intl-es/track/2TxmrJnWhNwgrIPuK0skG3?si=d6792a25c49b4e20'
        }, {
            name: 'Apple Music',
            link: 'https://music.apple.com/mx/album/tu-amor-que-nunca-fue-acoustic-version/1746568563?i=1746568565'
        }, {
            name: 'Amazon Music',
            link: 'https://music.amazon.com.mx/albums/B0D481Y868?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=MX&ref=dm_sh_DwoxeHPPfYrawEuvNocXtDIGC&trackAsin=B0D47XX5L4'
        }, {
            name: 'Deezer', link: 'https://deezer.page.link/fmtwTC1gWFgRkSwR6'
        }, {
            name: 'Youtube Music',
            link: 'https://music.youtube.com/playlist?list=OLAK5uy_lhu6lFqQFfBTyIRenUtJzouuJF0dGsLLc&feature=shared'
        }]
    }, {
        name: 'Al Ritmo De La Luz', image: '/assets/images/alritmodelaluz.webp', links: [{
            name: 'Spotify', link: 'https://open.spotify.com/intl-es/track/5r8KP7OCEqTsx4gdTvwOBy?si=df7d5b6ca4624128'
        }, {
            name: 'Apple Music', link: 'https://music.apple.com/mx/album/al-ritmo-de-la-luz/1746567063?i=1746567065'
        }, {
            name: 'Amazon Music',
            link: 'https://music.amazon.com.mx/albums/B0D47ZK47F?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=MX&ref=dm_sh_MF4TOPYF7ntseNptbMGfT5e07&trackAsin=B0D482KL82'
        }, {
            name: 'Deezer', link: 'https://deezer.page.link/mkjAiLWfeX4n3MVs5'
        }, {
            name: 'Youtube Music',
            link: 'https://music.youtube.com/playlist?list=OLAK5uy_nv7KaDJHWcdIzK9rPO7pI1xVfzmOooIlQ&feature=shared'
        }]
    }, {
        name: 'Galaxias', image: '/assets/images/galaxias.webp', links: [{
            name: 'Spotify', link: 'https://open.spotify.com/intl-es/track/1MLZ2IFN6cHdrTx9MAujGE?si=1bf791944a1a4d0e'
        }, {
            name: 'Apple Music', link: 'https://music.apple.com/mx/album/galaxias/1746567714?i=1746567715'
        }, {
            name: 'Amazon Music',
            link: 'https://music.amazon.com.mx/albums/B0D47ZYSPC?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=MX&ref=dm_sh_rTlekHBrGd7aqUKfohVGR6lBp&trackAsin=B0D47ZTMPM'
        }, {
            name: 'Deezer', link: 'https://deezer.page.link/9v85JfnzTq5FfhJ1A'
        }, {
            name: 'Youtube Music',
            link: 'https://music.youtube.com/playlist?list=OLAK5uy_nkVDnUcPqFZ-n8yOkNGMPWU5JOAPXzwr0&feature=shared'
        }]
    }, {
        name: 'Nightingale', image: '/assets/images/nightingale.webp', links: [{
            name: 'Spotify', link: 'https://open.spotify.com/intl-es/track/65Im2JvlJbpxhNVT7TE1gO?si=ad3bf3708dc143d8'
        }, {
            name: 'Apple Music', link: 'https://music.apple.com/mx/album/nightingale/1746568259?i=1746568261'
        }, {
            name: 'Amazon Music',
            link: 'https://music.amazon.com.mx/albums/B0D47XHS7Y?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=MX&ref=dm_sh_sBCN5Dztv7XPbAHdVSJhlHXkW&trackAsin=B0D481CSTK'
        }, {
            name: 'Deezer', link: 'https://deezer.page.link/VpLGSSkyoHJLDFNUA'
        }, {
            name: 'Youtube Music',
            link: 'https://music.youtube.com/playlist?list=OLAK5uy_nu8dOQ6a5VC-RrPXKHzkSVVS7vKnliRiQ&feature=shared'
        }]
    }, {
        name: 'Paísaje', image: '/assets/images/paisaje.webp', links: [{
            name: 'Spotify', link: 'https://open.spotify.com/intl-es/track/1Eb0HWY0uBw5Nb6kx1ULtx?si=36e1d6bbb51445d3'
        }, {
            name: 'Apple Music', link: 'https://music.apple.com/mx/album/paisaje/1746567241?i=1746567243'
        }, {
            name: 'Amazon Music',
            link: 'https://music.amazon.com.mx/albums/B0D47TLQMK?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=MX&ref=dm_sh_UxvyKnghD6lpxt4V7lb9fLA44&trackAsin=B0D47ZHJVX'
        }, {
            name: 'Deezer', link: 'https://deezer.page.link/4wQrdCj45MmykQRe9'
        }, {
            name: 'Youtube Music',
            link: 'https://music.youtube.com/playlist?list=OLAK5uy_kNey0F-68YLEBkEAnppu-NUKYAM_cDtSY&feature=shared'
        }]
    }, {
        name: 'Luminiscencia', image: '/assets/images/luminiscencia.webp', links: [{
            name: 'Spotify', link: 'https://open.spotify.com/intl-es/track/2mUFmpwVLnQLkL7AvGWmHt?si=8749876bb7e6482c'
        }, {
            name: 'Apple Music', link: 'https://music.apple.com/mx/album/luminiscencia/1746568512?i=1746568514'
        }, {
            name: 'Amazon Music',
            link: 'https://music.amazon.com.mx/albums/B0D47ZTPW9?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=MX&ref=dm_sh_htryYzHUuaSJENFE5QPTAu5HW&trackAsin=B0D482GXCN'
        }, {
            name: 'Deezer', link: 'https://deezer.page.link/enomf8rXEQ8cEchc7'
        }, {
            name: 'Youtube Music',
            link: 'https://music.youtube.com/playlist?list=OLAK5uy_kZ1SRwYypKKD6XB4rxP8IodvGUXo06jpg&feature=shared'
        }]
    }, {
        name: 'Leña al fuego', image: '/assets/images/leñaalfuego.webp', links: [{
            name: 'Spotify', link: 'https://open.spotify.com/intl-es/track/1o5YRUqoyWXOBTOArcGAGB?si=242bba82e664425d'
        }, {
            name: 'Apple Music', link: 'https://music.apple.com/mx/album/le%C3%B1a-al-fuego/1746569279?i=1746569284'
        }, {
            name: 'Amazon Music',
            link: 'https://music.amazon.com.mx/albums/B0D47YXLH9?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=MX&ref=dm_sh_IZBJPcJZpgcyOgdMgMUhklRwP&trackAsin=B0D47ZG1TQ'
        }, {
            name: 'Deezer', link: 'https://deezer.page.link/2aUY8ijxEDvSsrx16'
        }, {
            name: 'Youtube Music',
            link: 'https://music.youtube.com/playlist?list=OLAK5uy_nXxdhM2UD5Ac3fm6cVYQbB9EHf5uQnJv8&feature=shared'
        }]
    }, {
        name: 'Tiempo De Querer', image: '/assets/images/tiempodequerer.webp', links: [{
            name: 'Spotify', link: 'https://open.spotify.com/intl-es/track/59Lcw0DHyaKdwaZg2iN7ll?si=c4b6aa4bfb4f4e65'
        }, {
            name: 'Apple Music', link: 'https://music.apple.com/mx/album/tiempo-de-querer/1746568774?i=1746568775'
        }, {
            name: 'Amazon Music',
            link: 'https://music.amazon.com.mx/albums/B0D47ZQ2X9?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=MX&ref=dm_sh_WYZLp8rolUCb3DzkIvY9gZ2gG&trackAsin=B0D481YLH8'
        }, {
            name: 'Deezer', link: 'https://deezer.page.link/dKyEmde8xAie6Xqo7'
        }, {
            name: 'Youtube Music',
            link: 'https://music.youtube.com/playlist?list=OLAK5uy_kwC_r4_OEB_-PrK85I-keJFntwxi_Im3Q&feature=shared'
        }]
    }, {
        name: 'Petricor', image: '/assets/images/petricor.webp', links: [{
            name: 'Spotify', link: 'https://open.spotify.com/intl-es/track/02xx2NLs57xuz5uXjFZ1Sy?si=de7970053ce040f4'
        }, {
            name: 'Apple Music', link: 'https://open.spotify.com/album/7BoBjCLhn4BXvA0CaBhW2a?si=PHv7SIibTuiZgil870MYKA'
        }, {
            name: 'Amazon Music',
            link: 'https://music.amazon.com.mx/albums/B0D47ZY6CQ?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=MX&ref=dm_sh_pDrPojdRufVr8TYNLILbkSFis&trackAsin=B0D48228XD'
        }, {
            name: 'Deezer', link: 'https://deezer.page.link/ETeusN1ns4Lyw6bK6'
        }, {
            name: 'Youtube Music',
            link: 'https://music.youtube.com/playlist?list=OLAK5uy_mvLf7pkjZSSaJlN2tGMGvfyQpcf3kp4cw&feature=shared'
        }]
    }]

    return (<div className={'size-full text-center'}>
        <h1 className={'text-3xl md:text-5xl w-full text-center mb-4'}>SINGLES</h1>
        <div className={'flex flex-wrap justify-center items-center'}>
            {songs.length > 0 || songs.length !== undefined ? songs.map((song, index) => {
                return <MusicCards song={song} key={index}/>
            }) : <h2 className={'text-3xl md:text-5xl my-4'}>PROXIMAMENTE</h2>}
        </div>
    </div>);
}