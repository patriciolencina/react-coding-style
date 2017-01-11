import ReactJsonGraph from "react-json-graph-forked";
import Node from "./Node";
import Edge from "./Edge";

import { IGraphJson } from "../utils/interfaces";
import { GRAPH_WIDTH, GRAPH_HEIGHT, VERTICAL_LINES, HORIZONTAL_LINES } from "../utils/costants";
import { formatJson } from "../utils/helpers";

interface GraphPropTypes {
  graphJson: IGraphJson;
}

const Graph = ({ graphJson }: GraphPropTypes) => {
  return (
    <div
      className="graph"
      style={{
        backgroundSize: `${GRAPH_WIDTH / VERTICAL_LINES}px ${GRAPH_HEIGHT / HORIZONTAL_LINES}px`,
      }}>
      <ReactJsonGraph
        width={GRAPH_WIDTH}
        height={GRAPH_HEIGHT}
        json={formatJson(graphJson)}
        onChange={() => {}}
        Node={Node}
        Edge={Edge}
      />
    </div>
  );
};

export default Graph;
