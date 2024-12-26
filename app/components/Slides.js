const breakpoints = [3840, 1920, 1080, 640, 384, 256, 128];

export const slides = [{
    asset: '/assets/images/gallery/pablo_marte_1.jpg', width: 5, height: 5, alt: '', tittle: '', sizes: 0
}, {
    asset: '/assets/images/gallery/pablo_marte_2.jpg', width: 500, height: 500, alt: '', tittle: '', sizes: 0
}, {
    asset: '/assets/images/gallery/pablo_marte_3.webp', width: 500, height: 500, alt: '', tittle: '', sizes: 0
}, {
    asset: '/assets/images/gallery/pablo_marte_4.webp', width: 500, height: 500, alt: '', tittle: '', sizes: 0
}, {
    asset: '/assets/images/gallery/pablo_marte_5.webp', width: 500, height: 500, alt: '', tittle: '', sizes: 0
}, {
    asset: '/assets/images/gallery/pablo_marte_6.webp', width: 500, height: 500, alt: '', tittle: '', sizes: 0
}, {
    asset: '/assets/images/gallery/pablo_marte_7.webp', width: 500, height: 500, alt: '', tittle: '', sizes: 0
}, {
    asset: '/assets/images/gallery/pablo_marte_8.webp', width: 500, height: 500, alt: '', tittle: '', sizes: 0
}, {
    asset: '/assets/images/gallery/pablo_marte_9.webp', width: 500, height: 500, alt: '', tittle: '', sizes: 0
}].map(({asset, width, height}) => ({
    src: asset, width, height, srcSet: breakpoints.map((breakpoint) => ({
        src: asset, width: breakpoint, height: Math.round((height / width) * breakpoint),
    })),
}));

export default slides;
