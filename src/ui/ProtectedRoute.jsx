import styled from "styled-components";

import Spinner from "./Spinner";

import { useUser } from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1. 登录授权用户
  const { isLoading, isAuthenticated } = useUser();

  //2. 如果没有授权，重新定位login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  //3. 登录时，显示spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //4. 如果有授权用户，render界面
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
