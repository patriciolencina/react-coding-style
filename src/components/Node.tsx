import { Badge } from "@material-ui/core";
import CommentIcon from "@material-ui/icons/Comment";
import { Node as ReactJsonGrapNode } from "react-json-graph-forked";
import { CommentsContext } from "../context/CommentsContext";

class Node extends ReactJsonGrapNode {
  renderContainer({ content, isDragging }: any) {
    console.log(this.props);
    const { id, width, height } = this.props;

    return (
      <CommentsContext.Consumer>
        {({ setNodeId, comments }) => {
          const nodeComments = comments.filter((comment) => comment.nodeId === id);

          return (
            <div className="node" title={content} style={{ width, height }}>
              <div className="node-label">{content}</div>
              <div className="comment-icon">
                <Badge
                  badgeContent={nodeComments.length}
                  color="secondary"
                  classes={{
                    badge: "badge",
                  }}>
                  <CommentIcon
                    onClick={() => {
                      setNodeId(id);
                    }}
                  />
                </Badge>
              </div>
            </div>
          );
        }}
      </CommentsContext.Consumer>
    );
  }
}

export default Node;
