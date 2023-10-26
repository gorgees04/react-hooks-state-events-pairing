import React from "react";

function CommentSearch({ userSearch, handleSearchChanges }) {
  return (
    <div>
      <input
        type="text"
        placeholder="User comment.."
        value={userSearch}
        onChange={handleSearchChanges}
      />
    </div>
  );
}

export default CommentSearch;
