export type CellType = "code" | "text";

export type Cell = {
  id: string;
  content: string;
  type: CellType;
};
