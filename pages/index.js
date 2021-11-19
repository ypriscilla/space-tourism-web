import Layout from "../components/layout";
import styles from "../styles/pages/home.module.scss";

export default function Home(props) {
  return (
    <Layout title="Home">
      <div
        className={`${styles["home__content"]} grid grid-cols-2 items-center justify-around absolute bottom-20 tablet:-translate-y-2/4 tablet:bottom-auto tablet:top-2/4 tablet:grid-rows-2 tablet:grid-cols-1 gap-10`}
      >
        <div>
          <h5 className="tablet:text-center">So, you want to travel to</h5>
          <h1 className="tablet:text-center">Space</h1>
          <div className="body tablet:text-center">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </div>
        </div>
        <div
          className={`${styles["home__explore"]} rounded-full h-48 w-48 flex items-center justify-center bg-white m-auto font-Bellefair text-3xl cursor-pointer uppercase tablet:h-44 tablet:w-44`}
        >
          Explore
        </div>
      </div>
    </Layout>
  );
}
