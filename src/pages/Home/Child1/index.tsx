import { useAppDispatch, useAppSelector } from "@/hooks/storeHooks";
import "./index.less";
import { updateUserInfo } from "@/store/reducers/user";

interface IChild1Props {}
const Child1: React.FC<IChild1Props> = () => {
  const nickName = useAppSelector((state) => state.user.nickName);

  const dispatch = useAppDispatch();

  const updateInfo = () => {
    dispatch(updateUserInfo({ nickName: "更新后的昵称", userId: "666" }));
  };

  return (
    <div className="child1-com">
      <div className="child1-tip">子路由1界面</div>

      <div>{nickName}</div>

      <button type="button" onClick={updateInfo}>
        更新store name
      </button>
    </div>
  );
};

export default Child1;
