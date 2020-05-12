import React from "react";
import { LocationOn, Link, Email } from "@material-ui/icons";

import UsersList from "../../components/UsersList";

import "./styles.scss";

export default function Home({ repos, user }) {
  return (
    <main className="main-home">
      <section className="content-infos-user">
        <img alt="avatar" src={user && user.avatar_url} />

        <div>
          <span className="username">{user && user.name}</span>

          {user && user.location && (
            <section style={{ display: "flex" }}>
              <LocationOn
                color="action"
                style={{ width: "20px", height: "20px", marginRight: "6px" }}
              />
              <span>{user.location}</span>
            </section>
          )}

          {user && user.blog && (
            <section style={{ display: "flex" }}>
              <Link
                color="action"
                style={{ width: "20px", height: "20px", marginRight: "6px" }}
              />
              <span>{user && user.blog}</span>
            </section>
          )}

          {user && user.email && (
            <section style={{ display: "flex" }}>
              <Email
                color="action"
                style={{ width: "20px", height: "20px", marginRight: "6px" }}
              />
              <span>{user.email}</span>
            </section>
          )}
        </div>
      </section>

      <>
        <UsersList repos={repos} publicRepos={user && user.public_repos} />
      </>
    </main>
  );
}
