import MockAdapter from 'axios-mock-adapter';
import { mockRepo, mockRepos } from '__mocks__/repo.mock';
import { IRepo } from 'interfaces/repo.interface';
import {
    createRepoAPI,
    deleteRepoAPI,
    getRepoDetailAPI,
    getReposAPI,
    updateRepoAPI,
} from 'apis/repo.api';
import axios from '../../axios-instance';

describe('Repo api', () => {
    test('should get repos', async () => {
        const mock = new MockAdapter(axios);
        mock.onGet(`/repo`).reply(200, { repos: mockRepos });
        const repos: Array<IRepo> = await getReposAPI();
        expect(repos).toEqual(mockRepos);
    });

    test('should get repo detail', async () => {
        const mock = new MockAdapter(axios);
        mock.onGet(`/repo/${mockRepo.id}`).reply(200, mockRepo);
        const repo: IRepo = await getRepoDetailAPI(mockRepo.id);
        expect(repo).toEqual(mockRepo);
    });

    test('should create repo', async () => {
        const mock = new MockAdapter(axios);
        mock.onPost(`/repo`, mockRepo).reply(201, mockRepo);
        const repo: IRepo = await createRepoAPI(mockRepo);
        expect(repo).toEqual(mockRepo);
    });

    test('should update repo', async () => {
        const mock = new MockAdapter(axios);
        mock.onPut(`/repo/${mockRepo.id}`, mockRepo).reply(200, mockRepo);
        const repo: IRepo = await updateRepoAPI(mockRepo);
        expect(repo).toEqual(mockRepo);
    });

    test('should delete repo', async () => {
        const mock = new MockAdapter(axios);
        mock.onDelete(`/repo/${mockRepo.id}`).reply(200, mockRepo);
        const repo: IRepo = await deleteRepoAPI(mockRepo.id);
        expect(repo).toEqual(mockRepo);
    });
});
