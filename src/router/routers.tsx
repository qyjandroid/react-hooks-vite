import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home/index.tsx";
import ErrorPage from "@/pages/ErrorPage/index.tsx";
import Child1 from "@/pages/Home/Child1/index.tsx";
import Child2 from "@/pages/Home/Child2/index.tsx";
import NoMatch from "@/pages/NoMatch/index.tsx";

const homeChildrenLinkList = [
  {
    // path: "child1",
    name: "子路由1",
    index: true, //默认选中，注意设置index:true，不能设置path。
    element: <Child1 />,
  },
  {
    path: "child2",
    name: "子路由2",
    element: <Child2 />,
  },
];

// 路由配置
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home navList={homeChildrenLinkList}></Home>,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />, //设置为无path路径，是为了子路由报错，显示在子路由中error
        children: homeChildrenLinkList,
      },
    ],
  },
  {
    path: "/about",
    lazy: () => import("@/pages/About/About"), //懒加载
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <NoMatch></NoMatch>,
  },
]);

export default router;
