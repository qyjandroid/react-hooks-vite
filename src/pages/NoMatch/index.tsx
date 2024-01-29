import Png404 from "@/assets/404.png";
import "./index.less";

const NoMatch: React.FC = () => {
  return (
    <div className="no-match-page">
      <div>
        <img src={Png404} alt="404" />
      </div>
      <h1>抱歉，未匹配到界面</h1>
    </div>
  );
};

export default NoMatch;
