import { useState } from "react";
import Button from "./Button";
const Comments = ({ user, comment, handleDeleteClick }) => {
  const [upvotes, setUpvotes] = useState(0);
  const [downvotes, setDownvotes] = useState(0);

  const handleClickUpvotes = (e) => setUpvotes((prev) => prev + 1);
  const handleClickDownvotes = (e) => setDownvotes((prev) => prev + 1);
  return (
    <div>
      <h2>{user}</h2>
      <p>{comment}</p>
      <div>
        <Button
          content={"👍"}
          votes={upvotes}
          handleClick={handleClickUpvotes}
        />
        <Button
          content={"👎"}
          votes={downvotes}
          handleClick={handleClickDownvotes}
        />
      </div>
      <br />
      <Button content={"X"} handleClick={handleDeleteClick} />
    </div>
  );
};

export default Comments;
