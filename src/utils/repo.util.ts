import { IRepo } from 'interfaces/repo.interface';

const createRepo = (newRepo: IRepo, repos: Array<IRepo> = []): Array<IRepo> => {
    return [...repos, { ...newRepo }];
};

export { createRepo };
