import React from "react";

import { Book } from "@material-ui/icons";

import ItemUser from "./ItemUsers";

import "./styles.scss";

function UsersList({ repos, publicRepos }) {
  return (
    <section className="container-list-repos">
      <div>
        <Book
          style={{
            color: "black",
            width: "16px",
            height: "16px",
            marginRight: "6px"
          }}
        />
        <span>Repositórios {publicRepos && publicRepos}</span>
      </div>

      <section className="content-list">
        {repos &&
          repos.map((e, index) => {
            return <ItemUser key={index} repos={e} />;
          })}
      </section>
    </section>
  );
}

export default UsersList;
