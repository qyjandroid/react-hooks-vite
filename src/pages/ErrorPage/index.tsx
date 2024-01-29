import { useRouteError } from "react-router-dom";
import "./index.less";

export default function ErrorPage() {
  const error = useRouteError() as any;
  console.error(error);

  return (
    <div className="error-page">
      <h1>页面出错了!</h1>
      <p>错误原因：</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
