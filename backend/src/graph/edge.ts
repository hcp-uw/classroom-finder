import { NodeC } from "./node";

export class Edge {
	src: NodeC;
	dst: NodeC;
	label: string;

	constructor(src: NodeC, dst: NodeC, label: string) {
		this.src = src;
		this.dst = dst;
		this.label = label;
	}
}
