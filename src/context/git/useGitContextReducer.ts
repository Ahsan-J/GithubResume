import { useReducer } from "react";
import { IGitContext } from "./gitContextState";

const GitContextReducer = (state: IGitContext, action: IGitContext) => Object.assign({}, state, action);
export const useGitContextReducer = (initialState: IGitContext) => useReducer(GitContextReducer, initialState);