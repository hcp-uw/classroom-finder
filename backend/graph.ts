class NodeC {
	val: number;

	constructor(val: number) {
		this.val = val;
	}
}

class Edge {
	src: NodeC;
	dst: NodeC;
	label: string;

	constructor(src: NodeC, dst: NodeC, label: string) {
		this.src = src;
		this.dst = dst;
		this.label = label;
	}
}

export class Graph {
    private inner: Map<NodeC, Set<Edge>>;

	constructor() {
		this.inner = new Map<NodeC, Set<Edge>>();
	}

    addNode(node: NodeC) {
        if (!this.inner.has(node)) {
            this.inner.set(node, new Set<Edge>());
        }
    }

    getNode(val: number): NodeC | null {
        const nodes: IterableIterator<NodeC> = this.inner.keys();
        for (const node of nodes) {
            if (node.val == val) {
                return node;
            }
        }
        return null;
    }

    containsNode(node: NodeC): boolean {
        return this.inner.has(node);
    }

    addEdge(edge: Edge) {
        const sourceNodeEdges: Set<Edge> | undefined = this.inner.get(edge.src);
        if (sourceNodeEdges === undefined) {
            throw new Error('The edge.src node should be in this graph');
        } else if (!this.inner.has(edge.dst)) {
            throw new Error('The edge.dst node should be in this graph');
        }

        if (sourceNodeEdges.has(edge)) {
            // already in this graph
            return;
        }
        sourceNodeEdges.add(edge);
    }

    listNodes(): IterableIterator<NodeC> {
        return this.inner.keys();
    }

    listChildren(parentNode: NodeC): Set<Edge> | undefined {
        return this.inner.get(parentNode);
    }
}
