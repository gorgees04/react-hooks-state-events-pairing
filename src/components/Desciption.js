import Button from "./Button";
import { useState } from "react";
import Comments from "./Comments";
import CommentSearch from "./CommentSearch";

const Desciption = ({ data }) => {
  const [upvotes, setUpvotes] = useState(data.upvotes);
  const [downvotes, setDownvotes] = useState(data.downvotes);
  const [hideComments, setHideComments] = useState(true);
  const [userSearch, setUserSearch] = useState("");
  const [comments, setComments] = useState(data.comments);

  // handle votes click
  const handleClickUpvotes = (e) => {
    setUpvotes((prev) => prev + 1);
  };
  const handleClickDownvotes = (e) => {
    setDownvotes((prev) => prev + 1);
  };

  // handle hide comments click
  const handleClickHideComments = (e) => {
    setHideComments((prev) => !prev);
  };

  // handle Search changes
  const handleSearchChanges = (e) => {
    setUserSearch(e.target.value);
  };

  // filter by search user
  const filteredComments = comments.filter((data) => {
    let isTrue;
    if (userSearch.length === 0) {
      isTrue = true;
    } else {
      isTrue = data.user.startsWith(userSearch);
    }
    return isTrue;
  });

  // handle delete
  const handleDeleteClick = (id) => {
    const deleteItem = comments.filter((data) => id !== data.id);
    setComments(deleteItem);
  };

  // setComments(filteredComments);
  const allComments = filteredComments.map((comment) => {
    return (
      <Comments
        key={comment.id}
        user={comment.user}
        comment={comment.comment}
        handleDeleteClick={() => handleDeleteClick(comment.id)}
      />
    );
  });

  return (
    <div>
      <Button content={"👍"} votes={upvotes} handleClick={handleClickUpvotes} />
      <Button
        content={"👎"}
        votes={downvotes}
        handleClick={handleClickDownvotes}
      />
      <br /> <br />
      <div>
        <Button
          content={hideComments ? "Hide Comments" : "Show Comments"}
          handleClick={handleClickHideComments}
        />
        <hr />
        <CommentSearch
          userSearch={userSearch}
          handleSearchChanges={handleSearchChanges}
        />
        {hideComments && allComments}
      </div>
    </div>
  );
};

export default Desciption;
