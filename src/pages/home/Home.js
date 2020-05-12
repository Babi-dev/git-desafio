import React from "react";

import UsersList from "../../components/UsersList";

export default function Home({ repos, user }) {
  console.log(repos);
  console.log(user);

  return (
    <main style={{ display: "flex", width: "100%", padding: "20px" }}>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start"
        }}
      >
        <img
          src={user && user.avatar_url}
          style={{
            width: "260px",
            height: "260px",
            borderRadius: "6px",
            marginRight: "40px"
          }}
        />

        <section style={{ display: "flex", flexDirection: "column" }}>
          <span>{user && user.name}</span>
          <span>{user && user.location}</span>
          <span>{user && user.blog}</span>
          <span>{user && user.email}</span>
        </section>
      </section>
      <section style={{ width: "100%" }}>
        <UsersList repos={repos} />
      </section>
    </main>
  );
}
