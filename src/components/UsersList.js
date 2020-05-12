import React from "react";

import ItemUser from "./ItemUsers";

function UsersList({ repos }) {
  return (
    <section style={{ width: "100%" }}>
      <span>Repositórios</span>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
        {repos &&
          repos.map((e, index) => {
            return <ItemUser key={index} repos={e} />;
          })}
      </div>
    </section>
  );
}

export default UsersList;
