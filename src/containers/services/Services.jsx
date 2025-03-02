import PortfolioCard from "@/components/PortfolioCard/PortfolioCard";
import React from "react";

const data = [
  {
    id: 1,
    src: "https://assets.website-files.com/6315d6de2357050021f26e96/6317426cb417e779ec15be2b_icons8-school-director-256%20(2).png",
    title: "Graphic Design",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    src: "https://assets.website-files.com/6315d6de2357050021f26e96/63174377e79d9d53b1e0ea02_icons8-laptop-and-phone-256%20(1).png",
    title: "Development",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Services = () => {
  return (
    <div className="portfolio">
      <div className="container relative z-[1] mx-auto flex flex-col my-32 gap-10 flex-wrap flex-shrink flex-grow basis-[0%] max-w-[300px] sm:max-w-[355px] md:max-w-sm lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl w-full">
        <h3 className="mt-3 text-4xl">
          We worry about the details so you don't have to. When you work with
          our web agency, you can be certain that your website meets every
          standard.
        </h3>
        <div>
          <div className="grid grid-rows-3 lg:grid-rows-2 lg:grid-cols-2 xl:grid-rows-1 xl:grid-cols-3">
            {data.map((item) => (
              <PortfolioCard key={item.id} {...item} />
            ))}
            <div className="image">
              <img
                className="aspect-square h-[300px] sm:h-[355px] md:h-[380px] lg:h-[340px] xl:h-[290px] 2xl:h-[360px] object-cover overflow-hidden"
                src="https://assets.website-files.com/6315d6de2357050021f26e96/631743540533da71eeb889f3_photo-2-p-500.jpg"
                alt="portfolio_image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
