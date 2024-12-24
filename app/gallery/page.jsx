'use client'
import Appbar from "@/app/components/Appbar";
import {Image} from "@nextui-org/react";
import {useEffect} from "react";
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import fjGallery from 'flickr-justified-gallery';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import Footer from "@/app/components/Footer";

const photos = [{
    dataLgSize: "",
    dataPinterestText: "Pin it2",
    dataTweetText: "lightGallery slide  2",
    className: "gallery__item",
    dataSrc: "/assets/images/gallery/pablo_marte_1.jpg",
    dataSubHtml: "<h4>Photo by - <a href='https://unsplash.com/@therawhunter' >Massimiliano Morosinotto </a></h4><p> Location - <a href='https://unsplash.com/s/photos/tre-cime-di-lavaredo%2C-italia'>Tre Cime di Lavaredo, Italia</a>This is the Way</p>",
    src: '/assets/images/gallery/pablo_marte_1.jpg'
}, {
    dataLgSize: "",
    dataPinterestText: "Pin it2",
    dataTweetText: "lightGallery slide  2",
    className: "gallery__item",
    dataSrc: "/assets/images/gallery/pablo_marte_2.jpg",
    dataSubHtml: "<h4>Photo by - <a href='https://unsplash.com/@therawhunter' >Massimiliano Morosinotto </a></h4><p> Location - <a href='https://unsplash.com/s/photos/tre-cime-di-lavaredo%2C-italia'>Tre Cime di Lavaredo, Italia</a>This is the Way</p>",
    src: '/assets/images/gallery/pablo_marte_2.jpg'
}, {
    dataLgSize: "",
    dataPinterestText: "Pin it2",
    dataTweetText: "lightGallery slide  2",
    className: "gallery__item",
    dataSrc: "/assets/images/gallery/pablo_marte_3.webp",
    dataSubHtml: "<h4>Photo by - <a href='https://unsplash.com/@therawhunter' >Massimiliano Morosinotto </a></h4><p> Location - <a href='https://unsplash.com/s/photos/tre-cime-di-lavaredo%2C-italia'>Tre Cime di Lavaredo, Italia</a>This is the Way</p>",
    src: '/assets/images/gallery/pablo_marte_3.webp'
}, {
    dataLgSize: "",
    dataPinterestText: "Pin it2",
    dataTweetText: "lightGallery slide  2",
    className: "gallery__item",
    dataSrc: "/assets/images/gallery/pablo_marte_4.webp",
    dataSubHtml: "<h4>Photo by - <a href='https://unsplash.com/@therawhunter' >Massimiliano Morosinotto </a></h4><p> Location - <a href='https://unsplash.com/s/photos/tre-cime-di-lavaredo%2C-italia'>Tre Cime di Lavaredo, Italia</a>This is the Way</p>",
    src: '/assets/images/gallery/pablo_marte_4.webp'
}, {
    dataLgSize: "",
    dataPinterestText: "Pin it2",
    dataTweetText: "lightGallery slide  2",
    className: "gallery__item",
    dataSrc: "/assets/images/gallery/pablo_marte_5.webp",
    dataSubHtml: "<h4>Photo by - <a href='https://unsplash.com/@therawhunter' >Massimiliano Morosinotto </a></h4><p> Location - <a href='https://unsplash.com/s/photos/tre-cime-di-lavaredo%2C-italia'>Tre Cime di Lavaredo, Italia</a>This is the Way</p>",
    src: '/assets/images/gallery/pablo_marte_5.webp'
}, {
    dataLgSize: "",
    dataPinterestText: "Pin it2",
    dataTweetText: "lightGallery slide  2",
    className: "gallery__item",
    dataSrc: "/assets/images/gallery/pablo_marte_6.webp",
    dataSubHtml: "<h4>Photo by - <a href='https://unsplash.com/@therawhunter' >Massimiliano Morosinotto </a></h4><p> Location - <a href='https://unsplash.com/s/photos/tre-cime-di-lavaredo%2C-italia'>Tre Cime di Lavaredo, Italia</a>This is the Way</p>",
    src: '/assets/images/gallery/pablo_marte_6.webp'
}, {
    dataLgSize: "",
    dataPinterestText: "Pin it2",
    dataTweetText: "lightGallery slide  2",
    className: "gallery__item",
    dataSrc: "/assets/images/gallery/pablo_marte_7.webp",
    dataSubHtml: "<h4>Photo by - <a href='https://unsplash.com/@therawhunter' >Massimiliano Morosinotto </a></h4><p> Location - <a href='https://unsplash.com/s/photos/tre-cime-di-lavaredo%2C-italia'>Tre Cime di Lavaredo, Italia</a>This is the Way</p>",
    src: '/assets/images/gallery/pablo_marte_7.webp'
}, {
    dataLgSize: "",
    dataPinterestText: "Pin it2",
    dataTweetText: "lightGallery slide  2",
    className: "gallery__item",
    dataSrc: "/assets/images/gallery/pablo_marte_8.webp",
    dataSubHtml: "<h4>Photo by - <a href='https://unsplash.com/@therawhunter' >Massimiliano Morosinotto </a></h4><p> Location - <a href='https://unsplash.com/s/photos/tre-cime-di-lavaredo%2C-italia'>Tre Cime di Lavaredo, Italia</a>This is the Way</p>",
    src: '/assets/images/gallery/pablo_marte_8.webp'
}, {
    dataLgSize: "",
    dataPinterestText: "Pin it2",
    dataTweetText: "lightGallery slide  2",
    className: "gallery__item",
    dataSrc: "/assets/images/gallery/pablo_marte_9.webp",
    dataSubHtml: "<h4>Photo by - <a href='https://unsplash.com/@therawhunter' >Massimiliano Morosinotto </a></h4><p> Location - <a href='https://unsplash.com/s/photos/tre-cime-di-lavaredo%2C-italia'>Tre Cime di Lavaredo, Italia</a>This is the Way</p>",
    src: '/assets/images/gallery/pablo_marte_9.webp'
}];

const Page = () => {

    useEffect(() => {
        fjGallery(document.querySelectorAll('.gallery'), {
            itemSelector: '.gallery__item',
            rowHeight: 200,
            lastRow: 'start',
            gutter: 3,
            rowHeightTolerance: 0.1,
            calculateItemsHeight: false
        });
    }, []);

    return (<div className={'w-full'}>
        <LightGallery
            plugins={[lgZoom, lgVideo]}
            mode="lg-fade"
            pager={false}
            thumbnail={true}
            galleryId={'around the world'}
            autoplayFirstVideo={false}
            download={false}
            elementClassNames={'gallery'}
            mobileSettings={{
                controls: false, showCloseIcon: false, download: false, rotate: false,
            }}
        >
            {photos.length > 0 ? photos.map((photo, index) => {
                return <a key={index}
                    // data-lg-size={photo.dataLgSize}
                    // data-pinterest-text={photo.dataPinterestText}
                    // data-tweet-text={photo.dataTweetText}
                          className={photo.className}
                          data-src={photo.dataSrc}
                    // data-sub-html={photo.dataSubHtml}
                >
                    <Image
                        className={'cursor-pointer'}
                        alt={photo.dataTweetText}
                        src={photo.src}
                    />
                </a>
            }) : null}
        </LightGallery>
    </div>);
};

export default Page;