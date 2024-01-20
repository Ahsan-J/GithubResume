import { useGitContext } from "@/context/git/useGitContext";
import { IGitUser } from "@/model/git";
import { useLazyQuery, gql } from "@apollo/client";
import { useEffect } from "react";

const query = gql`
  query GetGitUser ($username: String!) {
    user(login: $username) {
      login
      id
      name
      bio
      websiteUrl
      url
      createdAt
      location
      repositories (last: 100) {
        totalCount
        nodes {
          primaryLanguage {
            color
            id
            name
          }
        } 
      }

      followers {
        totalCount
      }

      pinnedItems(last: 10) {
        nodes {
          ... on Repository {
            name
            viewerPermission
            description
            forkCount
            stargazers {
              totalCount
            }
            url
            createdAt
            pushedAt
            primaryLanguage {
              name
              id
              color
            }
          }
        }
        totalCount
      }
    }
  }
`

export const useGitUserFetch = (username?: string) => {
    const [state, dispatch] = useGitContext();

    const [loadUserDetail, responseState ] = useLazyQuery<{user: IGitUser}>(query, { variables: { username } });
    
    useEffect(() => {
        if (username && state.user?.login != username) {
            loadUserDetail();
        }
    }, [loadUserDetail, state.user?.login, username]);

    
    useEffect(() => {
        dispatch({ user: responseState.data?.user || null });
    }, [dispatch, responseState.data])

    return responseState;
}