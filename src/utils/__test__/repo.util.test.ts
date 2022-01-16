import { IRepo } from 'interfaces/repo.interface';
import { createRepo, deleteRepo, updateRepo } from 'utils/repo.util';
import { mockLists } from '__mocks__/list.mock';
import { mockRepo, mockRepos } from '__mocks__/repo.mock';

describe('Repo utils', () => {
    test('should add repo successfully', () => {
        const repos: Array<IRepo> = createRepo(mockRepo, mockRepos);
        expect(repos).toHaveLength(mockRepos.length + 1);
    });

    test('should update name of repo successfully', () => {
        const updateObj: IRepo = {
            id: mockRepos[0].id,
            name: 'Update repo',
            lists: mockLists,
        };
        const repos: Array<IRepo> = updateRepo(updateObj, mockRepos);
        expect(repos[0].name).toEqual(updateObj.name);
    });

    test('should update lists of repo successfully', () => {
        const updateObj: IRepo = {
            id: mockRepos[0].id,
            name: 'Update repo',
            lists: mockLists,
        };
        const repos: Array<IRepo> = updateRepo(updateObj, mockRepos);
        expect(repos[0].lists).toEqual(updateObj.lists);
    });

    test('should delete repo successfully', () => {
        const deleteObj: IRepo = {
            id: mockRepos[0].id,
            name: 'Delete repo',
            lists: mockLists,
        };
        const repos: Array<IRepo> = deleteRepo(deleteObj, mockRepos);
        expect(repos).toHaveLength(mockRepos.length - 1);
    });
});
