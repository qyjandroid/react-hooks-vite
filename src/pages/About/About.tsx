import { useEffect, useState } from "react";
import "./About.less";
import { useNavigate } from "react-router-dom";

export const Component: React.FC = () => {
  const [listData, setListData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setListData([]);
  }, []);

  const onClick = () => {
    //返回上一级界面
    navigate(-1);
  };

  const renderList = () => {
    if (!listData || listData.length === 0) {
      return (
        <div className="home-list">
          <div className="no-home-des">暂无数据</div>
        </div>
      );
    }
    return (
      <div className="about-list">
        {listData.map((item: any, index) => {
          return (
            <div className="about-list-item" key={index}>
              {item.name}
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div className="about-com">
      <div className="about-tip">
        <div className="go-back">
          <button type="button" onClick={onClick}>
            返回
          </button>
        </div>
        <div>关于界面</div>
      </div>
      <div className="about-container">{renderList()}</div>
    </div>
  );
};
