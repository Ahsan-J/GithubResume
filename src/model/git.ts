export interface IGitUser {
    login: string;
    id: string;
    name: string;
    bio: string;
    websiteUrl: string;
    url: string;
    createdAt: string;
    location: string;
    repositories: IGitItemList<IGitRepository>;
    followers: IGitItemList;
    pinnedItems: IGitItemList<IGitRepository>;
}

interface IGitItemList<T = undefined> {
    totalCount: number;
    nodes: T extends undefined ? undefined : Array<T>;
}

export interface IGitRepository {
    "name": string,
    "viewerPermission": "ADMIN",
    "description": string,
    "forkCount": number,
    "stargazers": {
        "totalCount": number,
        "__typename": "StargazerConnection"
    },
    "url": string,
    "createdAt": string,
    "pushedAt": string,
    "primaryLanguage": IGitRepositoryLanguage,
    "__typename": "Repository"
}

export interface IGitRepositoryLanguage {
    "color": string,
    "id": string,
    "name": string,
    "__typename": "Language"
}