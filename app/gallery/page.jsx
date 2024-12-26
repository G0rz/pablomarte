'use client'
import {ColumnsPhotoAlbum} from "react-photo-album";
import "react-photo-album/columns.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import {useState} from "react";
import slides from "@/app/components/Slides";
import Image from "next/image";
import "react-photo-album/rows.css";

function renderNextImage(RenderImageProps, RenderImageContext) {
    return (
        <div
            style={{
                width: "100%",
                position: "relative",
                aspectRatio: `${RenderImageContext.width} / ${RenderImageContext.height}`,
            }}
        >
            <Image
                fill
                src={RenderImageContext.photo}
                alt={RenderImageProps.alt}
                title={RenderImageProps.title}
                sizes={RenderImageProps.sizes}
                placeholder={"blurDataURL" in RenderImageContext.photo ? "blur" : undefined}
            />
        </div>
    );
}


const Page = () => {
    const [index, setIndex] = useState(-1);
    return (
        <>
            <ColumnsPhotoAlbum
                render={{image: renderNextImage}}
                defaultContainerWidth={1200}

                photos={slides} columns={3}
                skeleton={<div style={{width: "100%", padding: 8}}/>}
                onClick={({index}) => setIndex(index)}/>

            <Lightbox
                slides={slides}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                plugins={[Fullscreen, Slideshow, Zoom]}
            />
        </>
    )
};

export default Page;