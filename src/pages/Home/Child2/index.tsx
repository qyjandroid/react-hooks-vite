import "./index.less";

interface IChild2Props {}
const Child2: React.FC<IChild2Props> = () => {
  return (
    <div className="child2-com">
      <div className="child2-tip">子路由2界面</div>
      <div className="child2-bg"></div>
    </div>
  );
};

export default Child2;
