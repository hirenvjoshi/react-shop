const SLICK_SLIDER_SETTINGS = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
        breakpoint: 600,
        settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
        breakpoint: 480,
        settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

export default SLICK_SLIDER_SETTINGS;