import Head from "next/head";
import Leftm from "../components/leftm";

export default function Dashboard() {
  return (
    <>

      <style jsx>{`
        .main {
          position: absolute;
          width: 96%;
          height: 96%;
          left: 2%;
          top: 2%;

          background: #ffffff;
          box-shadow: 60px 70px 80px rgba(28, 31, 46, 0.1);
          border-radius: 24px;
        }
        
      `}</style>
      <div className="main">
        <Leftm />
      </div>
    </>
  );
}
