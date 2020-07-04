interface enumType {
    [id: string]: string;
}

export const RepositoryPermission: enumType = {
    ADMIN: 'Public can read, clone, and push to this repository',
    MAINTAIN: 'Public can read, clone, and push to this repository',
    READ: 'Public can read and clone this repository.',
    TRIAGE: 'Public can read and clone this repository',
    WRITE: 'Can read, clone, and push to this repository',
};