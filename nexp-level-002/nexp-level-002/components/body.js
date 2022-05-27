

import styles from './body.module.css'
import IconSeach from './iconsearch';

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
                  Search
              </div>
          </div>
      </div>
    </div>
  </>
);

export default Body;
