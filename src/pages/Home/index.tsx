import { Outlet, NavLink } from "react-router-dom";
import "./index.less";
import { useEffect } from "react";
import { getUserInfo } from "@/services/api/user";

interface IHomeProps {
  navList: any[];
}
const Home: React.FC<IHomeProps> = ({ navList }) => {
  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    getUserInfo(1)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  return (
    <div className="home-com">
      <div className="home-tip">首页界面</div>
      <div className="home-container">
        <div className="home-nav">
          <ul>
            {navList.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={item.path ? item.path : "."}
                    className={({ isActive, isPending }) =>
                      isActive ? "link-active" : isPending ? "link-pending" : ""
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
            <li>
              <NavLink
                to={`about`}
                className={({ isActive, isPending }) =>
                  isActive ? "link-active" : isPending ? "link-pending" : ""
                }
              >
                关于我的
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="home-nav-container">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;
