import {START, END, StateGraph} from "@langchain/langgraph";
import * as z from "zod";
import { LLMNode } from "./node.js";

const stateFormat = z.object({
    messages : z.array(z.any())
}
)


const graph = new StateGraph(stateFormat)
.addNode("LLMNode", LLMNode)
.addEdge(START, "LLMNode")
.addEdge("LLMNode", END)
.compile()


export default graph