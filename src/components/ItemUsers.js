import React from "react";

import { Book } from "@material-ui/icons";

export default function ItemUser({ repos }) {
  return (
    <section className="content-item-repos">
      <section style={{ display: "flex", flexDirection: "column" }}>
        <a href={repos.html_url}>
          <Book
            style={{
              color: "black",
              width: "14px",
              height: "14px",
              marginRight: "6px"
            }}
          />
          <span>{repos.name}</span>
        </a>
        <p>{repos.description}</p>
      </section>

      <section>
        <p>{repos.language}</p>
      </section>
    </section>
  );
}
