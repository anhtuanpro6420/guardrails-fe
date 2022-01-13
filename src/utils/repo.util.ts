import { IRepo } from 'interfaces/repo.interface';

const createRepo = (newRepo: IRepo, repos: Array<IRepo> = []): Array<IRepo> => {
    return [...repos, { ...newRepo }];
};

const updateRepo = (
    updatedRepo: IRepo,
    repos: Array<IRepo> = []
): Array<IRepo> => {
    const cloneRepos: Array<IRepo> = [...repos];
    const repoIndex = cloneRepos.findIndex(
        (repo: IRepo) => repo.id === updatedRepo.id
    );
    const hasRepo: boolean = repoIndex > -1;
    if (hasRepo) {
        cloneRepos[repoIndex] = { ...updatedRepo };
    }
    return cloneRepos;
};

export { createRepo, updateRepo };
