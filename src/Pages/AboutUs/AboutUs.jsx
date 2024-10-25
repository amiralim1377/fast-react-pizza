import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.aboutusWrapper}>
      <div className={styles.imageWrapper}>
        <img
          src="https://www.caterboss.ie/site/uploads/sys_articles/pizzeria.png"
          alt=""
        />
      </div>
      <div className={styles.textWrapper}>
        <p>
          Do You Want To kNOW About Us?
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
          distinctio repellat ipsum officiis reprehenderit iusto magnam
          accusamus saepe veniam natus voluptatibus quibusdam nihil debitis amet
          ratione, recusandae sapiente officia aut praesentium mollitia
          pariatur. Nostrum iste autem quasi quo asperiores natus repellat
          numquam exercitationem modi aut veniam commodi iusto reiciendis quidem
          duc.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
