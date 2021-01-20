import CookieStructure from "./CookieStructure";

export default interface SessionStore {
    [ sessionKey : string ] : CookieStructure;
}