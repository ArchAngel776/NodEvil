import RouterElement from "./RouterElement";

export default interface RouterStack extends Array<RouterElement> {
    [ index : number ] : RouterElement;
}