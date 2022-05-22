const Leftm = () => (
  <>
    <style jsx>{`
        .leftm {
            width: 20%;
            height: 100%;
            left: 0px;
            top: 0px;
          }
          .logo {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 0px;
            gap: 8px;
  
            position: absolute;
            width: 123px;
            height: 32px;
            left: 38px;
            top: 54px;
            background-color: white;
          }
          .logoimg {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0px;
            gap: 8px;
  
            width: 32px;
            height: 32px;
  
            flex: none;
            order: 0;
            flex-grow: 0;
          }
          .logotext {
            width: 83px;
            height: 28px;
  
            flex: none;
            order: 1;
            flex-grow: 0;
          }
          .menu {
            width: 90%;
            height: 100%;
            left: 40px;
            top: 20%;
          }
          .menuhealthcenter {
            position: absolute;
            width: 56px;
            height: 21px;
            left: 40px;
            top: 20%;
  
            font-family: "Poppins";
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
  
            color: #3629b7;
          }
          .menumain {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0px;
            gap: 30px;
  
            position: absolute;
            width: 177px;
            height: 228px;
            left: 40px;
            top: 25%;
          }
          .menudashboard {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0px 0px 0px 2px;
            gap: 20px;
  
            width: 119px;
            height: 20px;
  
            flex: none;
            order: 0;
            flex-grow: 0;
          }
          .menudashboardlimg {
            width: 18px;
            height: 18px;
  
            flex: none;
            order: 0;
            flex-grow: 0;
          }
          .menudashboardlimg img {
            width: 20px;
          }
          .menudashboardtext {
            width: 79px;
            height: 21px;
            font-family: "Poppins";
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
  
            color: #838383;
  
            flex: none;
            order: 1;
            flex-grow: 0;
          }
          .menurightborder {
            position: absolute;
            width: 1px;
            height: 100%;
            left: 247px;
            top: 0px;
  
            background: #efecec;
          }
          .pro {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0px;
            gap: 8px;
  
            position: absolute;
            width: 204.25px;
            height: 42px;
            left: 24px;
            top: 80%;
          }
          .proimg {
            width: 36px;
            height: 36px;
  
            background: url(health.png);
  
            /* Inside auto layout */
  
            flex: none;
            order: 0;
            flex-grow: 0;
          }
          .proimg img {
            width: 20px;
          }
          .pronickname {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            padding: 0px;
            gap: 4px;
  
            width: 160.25px;
            height: 42px;
          }
          .pronicknamepro {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0px;
  
            width: 142px;
            height: 42px;
  
            /* Inside auto layout */
  
            flex: none;
            order: 0;
            flex-grow: 0;
          }
          .pronicknametextt {
            width: 109px;
            height: 24px;
  
            font-family: "Poppins";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            /* identical to box height, or 150% */
  
            color: #494949;
  
            /* Inside auto layout */
  
            flex: none;
            order: 0;
            flex-grow: 0;
          }
          .pronicknamemobile {
            width: 142px;
            height: 18px;
  
            font-family: "Poppins";
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 18px;
            /* identical to box height */
  
            color: #494949;
  
            /* Inside auto layout */
  
            flex: none;
            order: 1;
            flex-grow: 0;
          }
  
          .pronicknameicon {
            width: 14.25px;
            height: 14.25px;
  
            /* Inside auto layout */
  
            flex: none;
            order: 1;
            flex-grow: 0;
          }
          .pronicknameicon img {
            width: 10px;
          }
    `}</style>
    <div className="leftm">
      <div className="logo">
        <img className="logoimg" src="health.png" alt="" srcset="" />
        <span className="logotext">健康管家</span>
      </div>
      <div className="menu">
        <span className="menuhealthcenter">健康中心</span>
        <div className="menumain">
          <div className="menudashboard">
            <div className="menudashboardlimg">
              <img src="health.png" alt="" srcset="" />
            </div>
            <div className="menudashboardtext">健康大屏</div>
          </div>
          <div className="menudashboard">
            <div className="menudashboardlimg">
              <img src="health.png" alt="" srcset="" />
            </div>
            <div className="menudashboardtext">定时管理</div>
          </div>
          <div className="menudashboard">
            <div className="menudashboardlimg">
              <img src="health.png" alt="" srcset="" />
            </div>
            <div className="menudashboardtext">报告管理</div>
          </div>
          <div className="menudashboard">
            <div className="menudashboardlimg">
              <img src="health.png" alt="" srcset="" />
            </div>
            <div className="menudashboardtext">消息中心</div>
          </div>
          <div className="menudashboard">
            <div className="menudashboardlimg">
              <img src="health.png" alt="" srcset="" />
            </div>
            <div className="menudashboardtext">系统配置</div>
          </div>
        </div>
        <div className="menurightborder"></div>
        <div className="pro">
          <div className="proimg">
            <img src="health.png" alt="" srcset="" />
          </div>
          <div className="pronickname">
            <div className="pronicknamepro">
              <div className="pronicknametextt">东湖畔</div>
              <div className="pronicknamemobile">189****5810</div>
            </div>
            <div className="pronicknameicon">
              <img src="health.png" alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Leftm;
