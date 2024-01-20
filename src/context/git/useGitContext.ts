import React, { createContext, useContext } from "react";
import { GitContextInitialState, IGitContext } from "./GitContextState";

export const GitContext = createContext<[IGitContext, React.Dispatch<IGitContext>]>([GitContextInitialState, e => e]);

export const useGitContext = () => {
    return useContext(GitContext);
}