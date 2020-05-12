import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import Home from "./Home";
import * as ActionsApplication from "../../store/application/actions/users.action";

function PageHome({ match }) {
  const dispatch = useDispatch();
  const reposUser = useSelector(state => state.usersReducer.users.repos);
  const userInfos = useSelector(state => state.usersReducer.users.user_infos);

  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadUsers(nome) {
      let response = await ActionsApplication.loadUsers(nome);

      dispatch(response);
    }

    loadUsers(match.params.login ? match.params.login : "camunda");
  }, [dispatch]);

  useEffect(() => {
    setRepos(reposUser);
  }, [reposUser]);

  useEffect(() => {
    setUser(userInfos);
  }, [userInfos]);

  return <Home repos={repos} user={user} />;
}

export default withRouter(PageHome);
