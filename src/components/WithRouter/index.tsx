import { useLocation, useNavigate, useParams } from "react-router-dom";

function withRouter(Component: any) {
  function ComponentWithRouterProp(props: any) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return (
      <Component
        {...props}
        router={{ location: location, navigate: navigate, params: params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

export default withRouter;
