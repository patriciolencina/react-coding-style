import { useContext, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { CommentsContext } from "../context/CommentsContext";

interface PropTypes {
  commentId: string;
}

const AddAnswer = ({ commentId }: PropTypes) => {
  const [text, setText] = useState<string>("");
  const { addAnswer } = useContext(CommentsContext);

  const onAddAnswer = () => {
    if (text && commentId) {
      addAnswer(commentId, text);
      setText("");
    }
  };

  return (
    <div className="add-answer">
      <TextField
        fullWidth
        value={text}
        label="Type answer here"
        onChange={(e) => setText(e.target.value)}
        color="secondary"
      />
      <Button variant="contained" disableElevation color="secondary" size="small" onClick={onAddAnswer}>
        Add
      </Button>
    </div>
  );
};

export default AddAnswer;
