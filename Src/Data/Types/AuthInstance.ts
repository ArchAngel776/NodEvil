import Auth from "../../App/Auth";
import Session from "../../App/Controller/Session";

export type AuthInstance = { new (session : Session) : Auth };