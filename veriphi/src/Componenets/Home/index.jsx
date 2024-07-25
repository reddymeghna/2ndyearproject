import React from 'react';
import styles from "./styles.module.css";
import LeftSection from '../left';
import RightSection from '../right';
const Home = () => {
  return (
    <div className={styles.mainpage}>
      <div className={styles.leftOut}>
        <LeftSection />
      </div>
      <div className={styles.rightOut}>
        <RightSection />
      </div>
    </div>
  );
};

export default Home;
