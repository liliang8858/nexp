

import styles from './body.module.css'
import IconSeach from './iconsearch';
import IconWeather from './iconweather';

const Body = () => (
  <>
    <div className={styles.body}>
      <div className={styles.welcome}>
          <div className={styles.welcometext}>
              欢迎登入健康中心
          </div>
          <div className={styles.welcomesearch}>
              <div className={styles.welcomesearchbtn}>
                  <IconSeach />
              </div>
              <div className={styles.welcomesearchinput}>
                  <input type="text" placeholder='Search' />
              </div>
          </div>
      </div>
      <div className={styles.weather}>
          <div className={styles.weatherlogo}>
              <IconWeather />   
          </div>
          <div className={styles.weathertext}>
              It's a Sunny Day today!
          </div>
          <div className={styles.weatherspacse}></div>
          <div className={styles.weatherforget}>
              Don't forget to take your water bottle with  you.
          </div>
      </div>
    </div>
  </>
);

export default Body;
