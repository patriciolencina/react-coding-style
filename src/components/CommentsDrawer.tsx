import React, { useContext } from "react";
import { Drawer, Typography } from "@material-ui/core";
import { CommentsContext } from "../context/CommentsContext";
import AddComment from "./AddComment";
import graphJson from "../graph.json";
import Comment from "./Comment";

const { nodes } = graphJson;

const CommentsDrawer: React.FC = () => {
  const { nodeId, setNodeId, comments, answers } = useContext(CommentsContext);
  const node = nodes.find((node) => node.id === nodeId);
  const nodeComments = comments.filter((comment) => comment.nodeId === nodeId);

  const open = Boolean(nodeId);

  return (
    <Drawer
      anchor="right"
      classes={{
        root: "comments-drawer",
      }}
      open={open}
      onClose={() => {
        setNodeId(null);
      }}>
      <div className="top-section">
        <Typography variant="h5" gutterBottom>
          Comments
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Resource Type:</strong> {node?.resourceType}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Logical ID:</strong> {node?.logicalId}
        </Typography>
        <div className="comments">
          {nodeComments?.map((comment) => {
            const commentAnswers = answers.filter((answer) => answer.commentId === comment.id);
            return <Comment key={comment.id} answers={commentAnswers} comment={comment} />;
          })}
        </div>
      </div>
      <div className="bottom-section">
        <AddComment />
      </div>
    </Drawer>
  );
};

export default CommentsDrawer;
