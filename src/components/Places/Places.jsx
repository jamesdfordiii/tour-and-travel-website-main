import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/maldives.jpg";
import Img2 from "../../assets/places/bora.jpg";
import Img3 from "../../assets/places/machu.jpg";
import Img4 from "../../assets/places/santorini.jpg";
import Img5 from "../../assets/places/phuket.jpg";
import Img6 from "../../assets/places/galapagos.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Maldives",
    location: "Indian Ocean",
    description:
      "Dive into paradise with the Maldives' crystal-clear turquoise waters, overwater bungalows, and vibrant marine life, making it a dream destination for honeymooners and adventure seekers alike.",
    price: 9500,
    type: "Luxury Relaxation",
  },
  {
    img: Img2,
    title: "Bora Bora",
    location: "French Polynesia",
    description:
      "Experience the ultimate romantic getaway in Bora Bora, where lush mountains meet serene lagoons, and luxury resorts offer unparalleled views of the stunning aquamarine waters.",
    price: 8900,
    type: "Romantic Escape",
  },
  {
    img: Img3,
    title: "Machu Picchu",
    location: "Peru",
    description:
      "Journey to the ancient Incan city of Machu Picchu, perched high in the Andes Mountains, where breathtaking ruins and dramatic landscapes offer a glimpse into a mysterious and fascinating past.",
    price: 7200,
    type: "Historical Adventure",
  },
  {
    img: Img4,
    title: "Santorini",
    location: "Greece",
    description:
      "Discover the enchanting island of Santorini, known for its iconic white-washed buildings with blue domes, spectacular sunsets over the Aegean Sea, and rich history that dates back to ancient times.",
    price: 7800,
    type: "Scenic Relaxation",
  },
  {
    img: Img5,
    title: "Phuket",
    location: "Thailand",
    description:
      "Immerse yourself in the vibrant culture and stunning natural beauty of Phuket, with its pristine beaches, lush jungles, and bustling markets offering a perfect blend of relaxation and adventure.",
    price: 6500,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Galápagos Islands",
    location: "Ecuador",
    description:
      "Embark on a once-in-a-lifetime expedition to the Galápagos Islands, where unique wildlife encounters and untouched landscapes provide an unparalleled experience for nature enthusiasts and explorers.",
    price: 8200,
    type: "Nature Expedition",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
