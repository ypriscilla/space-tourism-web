import Layout from "../components/layout";
import Menu from "../components/menu-dots";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/pages/crew.module.scss";
const commander = require("../assets/crew/image-douglas-hurley.webp");
const mission_specialist = require("../assets/crew/image-mark-shuttleworth.webp");
const pilot = require("../assets/crew/image-anousheh-ansari.webp");
const flight_engineer = require("../assets/crew/image-victor-glover.webp");

export default function Crew(props) {
  const [selected, setSelected] = useState(0);

  const crewData = [
    {
      crewname: "Douglas Hurley",
      crewposition: "Commander",
      crewimage: commander,
      crewparagraph:
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
      crewname: "Mark Shuttleworth",
      crewposition: "Mission Specialist",
      crewimage: mission_specialist,
      crewparagraph:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
      crewname: "Anousheh Ansari",
      crewposition: "Flight Engineer",
      crewimage: pilot,
      crewparagraph:
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    },
    {
      crewname: "Victor Glover",
      crewposition: "Pilot",
      crewimage: flight_engineer,
      crewparagraph:
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    },
  ];
  return (
    <Layout title="Crew">
      <h5>02 Meet your crew</h5>
      <div
        className={`${styles["crew__content"]} grid grid-cols-2 items-center gap-8 tablet:grid-cols-1`}
      >
        <div className={`${styles["crew__details"]}`}>
          <h4 className="uppercase text-white tablet:text-center">
            {crewData[selected].crewposition}
          </h4>
          <h3 className="uppercase text-white tablet:text-center">
            {crewData[selected].crewname}
          </h3>
          <p className="body tablet:text-center">
            {crewData[selected].crewparagraph}
          </p>
          <Menu
            length={crewData.length}
            selected={selected}
            onSelected={(val) => setSelected(val)}
          />
        </div>
        <div className={styles["crew__image"]}>
          <Image
            src={crewData[selected].crewimage}
            alt={crewData[selected].crewimage}
            objectFit="contain"
          />
        </div>
      </div>
    </Layout>
  );
}
