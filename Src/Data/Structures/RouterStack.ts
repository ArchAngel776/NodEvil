import ElementOfRouter from "../../App/Router/ElementOfRouter";

export default interface RouterStack extends Array<ElementOfRouter> {
    [ index : number ] : ElementOfRouter;
}