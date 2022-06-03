import IconCalendar from "./iconcalendar";
import IconDash from "./icondash";
import IconMore from "./iconmore";
import IconNotifi from "./iconnotifi";
import IconReport from "./iconreport";
import IconSettings from "./iconsettings";
import styles from "./leftm.module.css";
import React from "react";

import { Modal,Avatar, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
import { Mail } from "./login/iconmail";
import { Password } from "./login/iconpassword";

const Leftm = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => {
    setVisible(true);
  };
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <>
      <div className={styles.leftm}>
        <div className={styles.logo}>
          <img className={styles.logoimg} src="health.png" alt="" />
          <span className={styles.logotext}>健康管家</span>
        </div>
        <div className={styles.menu}>
          <span className={styles.menuhealthcenter}>健康中心</span>
          <div className={styles.menumain}>
            <div className={styles.menudashboard}>
              <div className={styles.menudashboardlimg}>
                <IconDash />
              </div>
              <div className={styles.menudashboardtext}>健康大屏</div>
            </div>
            <div className={styles.menudashboard}>
              <div className={styles.menudashboardlimg}>
                <IconReport />
              </div>
              <div className={styles.menudashboardtext}>定时管理</div>
            </div>
            <div className={styles.menudashboard}>
              <div className={styles.menudashboardlimg}>
                <IconCalendar />
              </div>
              <div className={styles.menudashboardtext}>报告管理</div>
            </div>
            <div className={styles.menudashboard}>
              <div className={styles.menudashboardlimg}>
                <IconNotifi />
              </div>
              <div className={styles.menudashboardtext}>消息中心</div>
            </div>
            <div className={styles.menudashboard}>
              <div className={styles.menudashboardlimg}>
                <IconSettings />
              </div>
              <div className={styles.menudashboardtext}>系统配置</div>
            </div>
          </div>
          <div className={styles.menurightborder}></div>
          <div className={styles.pro}>
            <div className={styles.proimg}>
              <Avatar
                size="sm"
                src="health.png" 
                color="primary"
                borderd
                squared
              />
            </div>
            <div className={styles.pronickname}>
              <div className={styles.pronicknamepro} onClick={handler}>
                <div className={styles.pronicknametextt}>
                  登录
                </div>
                <div className={styles.pronicknamemobile}>
                  {/* 189****5810 */}
                </div>
              </div>
              <div className={styles.pronicknameicon}>
                <IconMore />
              </div>
              <Modal
                closeButton
                preventClose
                blur
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
              >
                <Modal.Header>
                  <Text id="modal-title" size={18}>
                    欢迎使用
                    <Text b size={18}>
                      健康管理平台
                    </Text>
                  </Text>
                </Modal.Header>
                <Modal.Body>
                  <Input
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="Email"
                    contentLeft={<Mail fill="currentColor" />}
                  />
                  <Input
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="Password"
                    contentLeft={<Password fill="currentColor" />}
                  />
                  <Row justify="space-between">
                    <Checkbox>
                      <Text size={14}>记录登录</Text>
                    </Checkbox>
                    <Text size={14}>找回密码?</Text>
                  </Row>
                </Modal.Body>
                <Modal.Footer>
                  <Button auto flat color="error" onClick={closeHandler}>
                    关闭
                  </Button>
                  <Button auto onClick={closeHandler}>
                    登录
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leftm;
