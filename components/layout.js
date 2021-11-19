import { useEffect } from "react";
import Menu from "./menu";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Layout(props) {
  const router = useRouter();

  const backgroundImages = {
    "/": {
      class: "bg-homeDesktop mobile:bg-homeMobile tablet:bg-homeTablet",
      page: "home",
    },
    "/crew": {
      class: "bg-crewDesktop mobile:bg-crewMobile tablet:bg-crewTablet",
      page: "crew",
    },
    "/destination": {
      class:
        "bg-destinationDesktop mobile:bg-destinationMobile tablet:bg-destinationTablet",
      page: "destination",
    },
    "/technology": {
      class:
        "bg-technologyDesktop mobile:bg-technologyMobile tablet:bg-technologyTablet",
      page: "technology",
    },
  };

  return (
    <div
      className={
        "layout bg-cover bg-no-repeat bg-center tablet:bg-fixed " +
        backgroundImages[router.pathname].class
      }
    >
      <Head>
        <meta
          name="description"
          content="Frontend Mentor | Space tourism website"
        />
        <title>{props.title}</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <div className="layout__header py-10">
        <div className="logo flex-1 ml-8">
          <Image
            src="/icon/logo.svg"
            alt="Space Tourism Logo"
            width={32}
            height={32}
          />
        </div>
        <div className="divider"></div>
        <div className="flex-2 bg-white tablet:px-5 bg-opacity-5 backdrop-blur tablet:bg-transparent">
          <Menu />
        </div>
      </div>
      <div className={"layout__body " + backgroundImages[router.pathname].page}>
        {props.children}
      </div>
    </div>
  );
}
