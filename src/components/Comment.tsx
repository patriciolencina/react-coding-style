import { useState } from "react";
import AddAnswer from "./AddAnswer";
import { IComment, IAnswer } from "../utils/interfaces";
import { Button } from "@material-ui/core";

interface Proptypes {
  comment: IComment;
  answers: IAnswer[];
}

const Comment = ({ comment, answers }: Proptypes) => {
  const [showAddAnswer, setShowAddAnswer] = useState<Boolean>(false);

  return (
    <div>
      <div className="comment-container">
        <div className="comment">{comment.text}</div>
        <Button onClick={() => setShowAddAnswer((prev) => !prev)}>{showAddAnswer ? "Hide" : "Reply"}</Button>
      </div>
      {answers.map((answer) => {
        return (
          <div key={answer.id} className="answer">
            {answer.text}
          </div>
        );
      })}
      {showAddAnswer && <AddAnswer commentId={comment.id} />}
    </div>
  );
};

export default Comment;
