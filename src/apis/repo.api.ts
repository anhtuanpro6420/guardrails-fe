import { IRepo } from 'interfaces/repo.interface';
import axios from '../axios-instance';

const getRepos = async (): Promise<Array<IRepo>> => {
    const { data } = await axios.get(`/repo`);
    const { repos = [] }: { repos: Array<IRepo> } = data || {};
    return repos;
};

export { getRepos };
