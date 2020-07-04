import { gql } from '@apollo/client';

export const GET_GIT_USER_DETAIL = gql`
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
      repositories (last: 50) {
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
`;
