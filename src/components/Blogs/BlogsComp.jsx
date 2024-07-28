import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/sea.jpg";
import Img2 from "../../assets/places/med.jpg";
import Img3 from "../../assets/places/road.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Top 10 Hidden Gems to Visit in Southeast Asia",
    description:
      "Explore the lesser-known wonders of Southeast Asia, from pristine beaches to vibrant cultural hotspots.",
    author: "David Pouillard",
    date: "May 22, 2024",
  },
  {
    id: 1,
    image: Img2,
    title: "Must-See Destinations in the Mediterranean: A Traveler's Guide",
    description:
      "Discover the must-see destinations in the Mediterranean, including historical sites, stunning coastlines, and charming villages.",
    author: "Gina Hopkins",
    date: "April 04, 2024",
  },
  {
    id: 1,
    image: Img3,
    title: "Ultimate Road Trip: Best Places to Visit in the American Southwest",
    description:
      "Plan your ultimate road trip with our guide to the best places to visit in the American Southwest, featuring breathtaking landscapes and unique attractions.",
    author: "Mark Tills",
    date: "March 17, 2024",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
