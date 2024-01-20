import React, { useCallback } from "react";
import { GitContextInitialState, IGitContext } from "./GitContextState";
import {useGitContextReducer} from "./useGitContextReducer";
import { GitContext } from "./useGitContext";

type propTypes = {
    state?: IGitContext,
    onChange?: React.Dispatch<IGitContext>;
}

const GitContextProvider = React.memo<React.PropsWithChildren<propTypes>>((props) => {
    const { state: initialState = GitContextInitialState, onChange } = props;
    const [state, dispatch] = useGitContextReducer(initialState);

    const onChangeState: React.Dispatch<IGitContext> = useCallback((newState,) => {
        dispatch(newState);
        if(onChange) onChange(newState);
    }, [dispatch, onChange]);

    return <GitContext.Provider value={[state, onChangeState]}>{props.children}</GitContext.Provider>
});

export default GitContextProvider;
