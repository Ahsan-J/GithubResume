import { IGitUser } from "@/model/git";

export type IGitContext = {
    user: IGitUser | null;
};

export const GitContextInitialState: IGitContext = {
   user: null
};
