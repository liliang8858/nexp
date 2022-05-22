
import styles from './leftm.module.css'

const Leftm = () => (
  <>
    <div className={styles.leftm}>
      <div className={styles.logo}>
        <img className={styles.logoimg} src="health.png" alt="" srcset="" />
        <span className={styles.logotext}>健康管家</span>
      </div>
      <div className={styles.menu}>
        <span className={styles.menuhealthcenter}>健康中心</span>
        <div className={styles.menumain}>
          <div className={styles.menudashboard}>
            <div className={styles.menudashboardlimg}>
              <img src="health.png" alt="" srcset="" />
            </div>
            <div className={styles.menudashboardtext}>健康大屏</div>
          </div>
          <div className={styles.menudashboard}>
            <div className={styles.menudashboardlimg}>
              <img src="health.png" alt="" srcset="" />
            </div>
            <div className={styles.menudashboardtext}>定时管理</div>
          </div>
          <div className={styles.menudashboard}>
            <div className={styles.menudashboardlimg}>
              <img src="health.png" alt="" srcset="" />
            </div>
            <div className={styles.menudashboardtext}>报告管理</div>
          </div>
          <div className={styles.menudashboard}>
            <div className={styles.menudashboardlimg}>
              <img src="health.png" alt="" srcset="" />
            </div>
            <div className={styles.menudashboardtext}>消息中心</div>
          </div>
          <div className={styles.menudashboard}>
            <div className={styles.menudashboardlimg}>
              <img src="health.png" alt="" srcset="" />
            </div>
            <div className={styles.menudashboardtext}>系统配置</div>
          </div>
        </div>
        <div className={styles.menurightborder}></div>
        <div className={styles.pro}>
          <div className={styles.proimg}>
            <img src="health.png" alt="" srcset="" />
          </div>
          <div className={styles.pronickname}>
            <div className={styles.pronicknamepro}>
              <div className={styles.pronicknametextt}>东湖畔</div>
              <div className={styles.pronicknamemobile}>189****5810</div>
            </div>
            <div className={styles.pronicknameicon}>
              <img src="health.png" alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Leftm;
