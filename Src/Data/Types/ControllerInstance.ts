import Controller from "../../App/Controller";
import Session from "../../App/Controller/Session";

export type ControllerInstance = { new (session : Session) : Controller };