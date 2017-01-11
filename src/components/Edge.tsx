import { Edge as ReactJsonGrapEdge } from "react-json-graph-forked";
import { GRAPH_WIDTH, GRAPH_HEIGHT, VERTICAL_LINES, HORIZONTAL_LINES } from "../utils/costants";

class Edge extends ReactJsonGrapEdge {
  renderPath(path: string) {
    const { id, referenceType } = this.props;

    return (
      <svg>
        <title>{referenceType}</title>

        <defs>
          <path id={id} d={path} />
        </defs>

        <path
          id={id}
          style={{
            strokeWidth: 2,
            stroke: "#3F51B5",
            cursor: "pointer",
            fill: "transparent",
          }}
          d={path}
        />

        <text>
          <textPath xlinkHref={`#${id}`} fill="#000" startOffset="50%" text-anchor="middle">
            {referenceType}
          </textPath>
        </text>
      </svg>
    );
  }
}

export default Edge;
