import React from "react";

export default function ItemUser({ repos }) {
  return (
    <>
      <a
        href={repos.html_url}
        style={{
          textDecoration: "none"
        }}
      >
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "1px solid #d1d5da",
            borderRadius: "3px",
            height: "114px",
            padding: "16px",
            margin: "10px 20px 10px 0"
          }}
        >
          <section style={{ display: "flex", flexDirection: "column" }}>
            <span>{repos.name}</span>
            <span>{repos.description}</span>
          </section>

          <section>
            <span>{repos.language}</span>
          </section>
        </section>
      </a>
    </>
  );
}
