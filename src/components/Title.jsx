import React from "react";

function Title({ title, views, createdAt }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>
        {views} Views | Uploaded {createdAt}
      </p>
    </div>
  );
}

export default Title;
