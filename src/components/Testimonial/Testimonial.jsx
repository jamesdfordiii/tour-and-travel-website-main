import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Daphne",
    text: "Tour Travel Haven took my trip to Machu Picchu to a whole new level. The attention to detail and personalized itinerary made the experience seamless and unforgettable. I can't wait to book my next adventure with them!",
    img: "https://www.cityheadshots.com/uploads/5/1/2/1/5121840/editor/mjb-2465.jpg?1643119031",
  },
  {
    id: 2,
    name: "Griswald Family",
    text: "Our Bora Bora getaway was beyond magical, thanks to Tour Travel Haven. The luxurious resort, breathtaking views, and exceptional service made it the perfect romantic escape. We felt pampered every step of the way.",
    img: "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2015_22/589816/vacation-movie-chevy-chase-today-tease-150528.jpg",
  },
  {
    id: 3,
    name: "Dahlila",
    text: "Exploring the Galápagos Islands was a dream come true, and TravelLux made it even better. Their knowledgeable guides and carefully planned excursions allowed us to fully immerse ourselves in the incredible wildlife and natural beauty of the islands. Truly a once-in-a-lifetime experience!",
    img: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2024/01/02/1420/SEDSH-P0042-Woman-Floating-Pool-Aerial.jpg/SEDSH-P0042-Woman-Floating-Pool-Aerial.16x9.jpg?imwidth=1920",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-md bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Customer Feedback
            </p>
            <h1 className="text-4xl font-bold">Testimonials</h1>
            <p className="text-lg text-gray-400">
              Read firsthand accounts from adventurers, honeymooners, and nature
              enthusiasts who have explored the world's most enchanting
              destinations with us.
            </p>
          </div>
          {/* testimonial section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[800px] mx-auto gap-12"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-12">
                    <div className="flex flex-col justify-center items-center gap-6 text-center shadow-lg p-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                      <img
                        src={img}
                        alt=""
                        className="rounded-full block mx-auto"
                      />
                      <h1 className="text-2xl font-bold">{name}</h1>
                      <p className="text-lg text-gray-500">{text}</p>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
