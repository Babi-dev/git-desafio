import React, { useState, useEffect } from 'react';
import Home from './Home';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from "react-router";
import * as ActionsApplication from '../../store/application/actions/users.action';

function PageHome(props){

  const dispatch = useDispatch();
  const usersRedux = useSelector( state => state.usersReducer.users );

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    const { match } = props;

    async function loadUsers(nome){
        let response = await ActionsApplication.loadUsers(nome);

        dispatch(response);
    }

    loadUsers(match.params.login?match.params.login:'camunda');

  },[dispatch]);

  useEffect(()=>{
            setUsers(usersRedux);
  },[usersRedux]);

  return (
      <Home users={users} />
  )
}

export default withRouter(PageHome);