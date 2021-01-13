import SqlBuilder from "../../App/Model/SqlBuilder";
import QueryBuilderSchema from "../Structures/QueryBuilderSchema";

export type SqlBuilderInstance = { new(schema : QueryBuilderSchema) : SqlBuilder };