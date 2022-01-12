import { IRepo } from 'interfaces/repo.interface';
import axios from '../axios-instance';

const getRepos = async (): Promise<Array<IRepo>> => {
    const { data } = await axios.get(`/repo`);
    const { repos = [] }: { repos: Array<IRepo> } = data || {};
    return repos;
};

const getRepoDetail = async (repoId: string): Promise<IRepo> => {
    const { data: repo }: { data: IRepo } = await axios.get(`/repo/${repoId}`);
    return repo;
};

export { getRepos, getRepoDetail };
