import Layout from "../components/layout";
import Menu from "../components/menu-circles";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "../styles/pages/technology.module.scss";
const launch_vehicle_landscape = require("../assets/technology/image-launch-vehicle-landscape.jpg");
const space_capsule_landscape = require("../assets/technology/image-space-capsule-landscape.jpg");
const spaceport_landscape = require("../assets/technology/image-spaceport-landscape.jpg");
const launch_vehicle_portrait = require("../assets/technology/image-launch-vehicle-portrait.jpg");
const space_capsule_portrait = require("../assets/technology/image-space-capsule-portrait.jpg");
const spaceport_portrait = require("../assets/technology/image-spaceport-portrait.jpg");

export default function Technology(props) {
  const [selected, setSelected] = useState(0);
  const [isMobile, setIsMobile] = useState(null);

  const technologyData = [
    {
      technologyterm: "Launch vehicle",
      technologyparagraph:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      technologyImageLandscape: launch_vehicle_landscape,
      technologyImagePortrait: launch_vehicle_portrait,
    },
    {
      technologyterm: "Space capsule",
      technologyparagraph:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      technologyImageLandscape: space_capsule_landscape,
      technologyImagePortrait: space_capsule_portrait,
    },
    {
      technologyterm: "Spaceport",
      technologyparagraph:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      technologyImageLandscape: spaceport_landscape,
      technologyImagePortrait: spaceport_portrait,
    },
  ];

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  });

  const resize = () => {
    if (window.innerWidth <= 767) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  return (
    <Layout title="Technology">
      <h5>03 Space launch 101</h5>

      <div className={"flex items-center " + styles["technology__content"]}>
        <div
          className={`${styles["technology__content__words"]} flex flex-nowrap`}
        >
          <Menu
            length={technologyData.length}
            selected={selected}
            onSelected={(val) => setSelected(val)}
          />
          <div className={`${styles["technology__details"]}`}>
            <h5 className="font-BarlowCondensed uppercase tablet:my-4">
              THE TERMINOLOGY...
            </h5>
            <h3 className="uppercase text-white">
              {technologyData[selected].technologyterm}
            </h3>
            <p className="body text-white tablet:text-center">
              {technologyData[selected].technologyparagraph}
            </p>
          </div>
        </div>
        <div className={`${styles["technology__image"]}`}>
          <Image
            src={
              isMobile
                ? technologyData[selected].technologyImageLandscape
                : technologyData[selected].technologyImagePortrait
            }
            alt={technologyData[selected].technologyterm}
          />
        </div>
      </div>
    </Layout>
  );
}
