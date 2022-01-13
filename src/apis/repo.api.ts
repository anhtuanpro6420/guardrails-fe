import { IRepo } from 'interfaces/repo.interface';
import axios from '../axios-instance';

const getReposAPI = async (): Promise<Array<IRepo>> => {
    const { data } = await axios.get(`/repo`);
    const { repos = [] }: { repos: Array<IRepo> } = data || {};
    return repos;
};

const getRepoDetailAPI = async (repoId: string): Promise<IRepo> => {
    const { data: repo }: { data: IRepo } = await axios.get(`/repo/${repoId}`);
    return repo;
};

const createRepoAPI = async (repoObj: IRepo): Promise<IRepo> => {
    const { data: repo }: { data: IRepo } = await axios.post(`/repo`, {
        ...repoObj,
    });
    return repo;
};

const updateRepoAPI = async (repoObj: IRepo): Promise<IRepo> => {
    const { id, name } = repoObj;
    const res = await axios.put(`/repo/${id}`, {
        id,
        name,
    });
    return res.data;
};

export { getReposAPI, getRepoDetailAPI, createRepoAPI, updateRepoAPI };
