import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "../styles/components/modal.module.scss";

export default function MenuComponent(props) {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(null);

  const listmenu = [
    {
      label: '<span class="font-bold m-4">00</span> Home',
      link: "/",
    },
    {
      label: '<span class="font-bold m-4">01</span> Destination',
      link: "/destination",
    },
    {
      label: '<span class="font-bold m-4">02</span> Crew',
      link: "/crew",
    },
    {
      label: '<span class="font-bold m-4">03</span> Technology',
      link: "/technology",
    },
  ];

  const listmenuinside = [
    {
      label: "Moon",
    },
    {
      label: "Mars",
    },
    {
      label: "Europa",
    },
    {
      label: "Titan",
    },
  ];

  const handleClick = (val) => {
    if (props.onSelected) {
      props.onSelected(val);
    }
  };

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  });

  const resize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  return (
    <div className="menu__container">
      <div
        className={`menu-icon ${isMobile && !props.insidepage ? "mobile" : ""}`}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <Image
          src="/icon/icon-hamburger.svg"
          alt="Menu Logo"
          width={32}
          height={32}
        />
      </div>
      <div
        className={styles["modal-backdrop-dark"] + (openMenu ? "" : " hidden")}
        onClick={() => setOpenMenu(false)}
      ></div>
      <div
        className={
          `menu__list__container ${
            props.insidepage ? "insidepage" : "justify-center"
          } ${isMobile && !props.insidepage ? "mobile " : ""}` +
          (openMenu ? "visible" : "")
        }
      >
        {!props.insidepage
          ? listmenu.map((val, idx) => {
              return (
                <div
                  className={
                    `menu__list` +
                    (router.pathname == val.link ? " menu__list__selected" : "")
                  }
                  key={idx}
                >
                  <Link className="link" href={val.link}>
                    <div dangerouslySetInnerHTML={{ __html: val.label }}></div>
                  </Link>
                </div>
              );
            })
          : listmenuinside.map((val, idx) => {
              return (
                <div
                  className={
                    `menu__list` +
                    (props.selected == val.label ? " menu__list__selected" : "")
                  }
                  key={idx}
                >
                  <div className="link" onClick={() => handleClick(idx)}>
                    <div dangerouslySetInnerHTML={{ __html: val.label }}></div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}
