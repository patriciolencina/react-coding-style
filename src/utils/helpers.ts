import { IGraphJson } from "./interfaces";
import { GRAPH_WIDTH, GRAPH_HEIGHT, VERTICAL_LINES, HORIZONTAL_LINES } from "./costants";

type numdefined = number | undefined;

function calculateWidth(startColumn: numdefined, endColumn: numdefined): number {
  if (typeof startColumn === "undefined" || typeof endColumn === "undefined") {
    return 160;
  }
  const columns = endColumn - startColumn;

  return (GRAPH_WIDTH / VERTICAL_LINES) * columns;
}

function calculateXPosition(startColumn: numdefined): number {
  if (typeof startColumn === "undefined") {
    return 8;
  }
  return (GRAPH_WIDTH / VERTICAL_LINES) * startColumn;
}

function calculateYPosition(startLine: numdefined): number {
  if (typeof startLine === "undefined") {
    return 8;
  }
  return (GRAPH_HEIGHT / HORIZONTAL_LINES) * startLine;
}

export function formatJson(json: IGraphJson): IGraphJson {
  let nodes = json.nodes.map((node) => {
    return {
      id: node.id,
      resourceType: node.resourceType,
      logicalId: node.logicalId,
      label: `${node.resourceType} | ${node.logicalId}`,
      position: {
        x: calculateXPosition(node.location?.physicalLocation.region.startColumn),
        y: calculateYPosition(node.location?.physicalLocation.region.startLine),
      },
      size: {
        height: (GRAPH_HEIGHT / HORIZONTAL_LINES) * 2.5,
        width: 300,
        // width: calculateWidth(
        //   node.location?.physicalLocation.region.startColumn,
        //   node.location?.physicalLocation.region.endColumn
        // ),
      },
    };
  });
  let edges = json.edges.map((edge) => {
    console.log(edge);

    return {
      id: edge.id,
      source: edge.source,
      target: edge.target,
      referenceType: edge.referenceType,
    };
  });

  return { nodes, edges };
}
