import Layout from "../components/layout";
import Menu from "../components/menu";
import Image from "next/image";
import { useState } from "react";
const moon = require("../assets/destination/image-moon.webp");
const mars = require("../assets/destination/image-mars.webp");
const europa = require("../assets/destination/image-europa.webp");
const titan = require("../assets/destination/image-titan.webp");

export default function Destination(props) {
  const [selected, setSelected] = useState(0);

  const dataDestination = [
    {
      planetName: "Moon",
      planetImage: moon,
      planetparagraph:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      planetdistance: "384,400 km",
      planettraveltime: "3 days",
    },
    {
      planetName: "Mars",
      planetImage: mars,
      planetparagraph:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      planetdistance: "225 mil. km",
      planettraveltime: "9 months",
    },
    {
      planetName: "Europa",
      planetImage: europa,
      planetparagraph:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      planetdistance: "628 mil. km",
      planettraveltime: "3 years",
    },
    {
      planetName: "Titan",
      planetImage: titan,
      planetparagraph:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      planetdistance: "1.6 bil. km",
      planettraveltime: "7 years",
    },
  ];

  return (
    <Layout title="Destination">
      <h5>01 Pick your destination</h5>
      <div className="destination__content grid grid-cols-2 items-center gap-8 tablet:grid-cols-1">
        <div className="image">
          <Image
            src={dataDestination[selected].planetImage}
            alt="Menu Logo"
            objectFit="contain"
            width={430}
            height={430}
          />
        </div>
        <div className="">
          <Menu
            insidepage={true}
            selected={dataDestination[selected].planetName}
            onSelected={(val) => setSelected(val)}
          />
          <h1>{dataDestination[selected].planetName}</h1>
          <p className="body text-white tablet:text-center">
            {dataDestination[selected].planetparagraph}
          </p>
          <div className="destination__divider"></div>
          <div className="destination__details grid">
            <div>
              <div className="body font-BarlowCondensed tablet:text-center">
                AVG. DISTANCE
              </div>
              <div className="subh1 uppercase text-white tablet:text-center">
                {dataDestination[selected].planetdistance}
              </div>
            </div>
            <div>
              <div className="body font-BarlowCondensed tablet:text-center">
                EST. TRAVEL TIME
              </div>
              <div className="subh1 uppercase text-white tablet:text-center">
                {dataDestination[selected].planettraveltime}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
