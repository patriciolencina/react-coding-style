interface IArtifactLocation {
  uri: string;
}

interface IRegion {
  startLine: number;
  startColumn: number;
  endLine: number;
  endColumn: number;
}

interface IPhysicalLocation {
  artifactLocation: IArtifactLocation;
  region: IRegion;
}

interface ILocation {
  physicalLocation: IPhysicalLocation;
}

interface IPosition {
  x: number;
  y: number;
}

interface ISize {
  width: Number;
  height: Number;
}

interface INode {
  id: string;
  resourceType?: string;
  logicalId?: string;
  location?: ILocation;
  position?: IPosition;
  size?: ISize;
}

interface IEdge {
  id?: string;
  source: string;
  target: string;
  referenceType?: string;
}

export interface IGraphJson {
  nodes: Array<INode>;
  edges: Array<IEdge>;
}

export interface IComment {
  id: string;
  nodeId: string;
  text: string;
  datetime: string;
}

export interface IAnswer {
  id: string;
  commentId: string;
  text: string;
  datetime: string;
}
