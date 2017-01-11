import { useContext, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { CommentsContext } from "../context/CommentsContext";

const AddComments = () => {
  const [text, setText] = useState<string>("");
  const { addComment } = useContext(CommentsContext);

  const onAddComment = () => {
    if (text) {
      addComment(text);
      setText("");
    }
  };

  return (
    <div className="add-comment">
      <TextField fullWidth value={text} label="Type comment here" onChange={(e) => setText(e.target.value)} />
      <Button variant="contained" disableElevation color="primary" size="small" onClick={onAddComment}>
        Add
      </Button>
    </div>
  );
};

export default AddComments;
