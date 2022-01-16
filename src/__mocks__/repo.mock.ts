import { IRepo } from 'interfaces/repo.interface';
import { mockLists } from './list.mock';

export const mockRepo: IRepo = {
    id: '1',
    name: 'Mock Repo',
    lists: mockLists,
};

export const mockRepos: Array<IRepo> = [
    {
        id: '1',
        name: 'Mock Repo 1',
        lists: mockLists,
    },
    {
        id: '2',
        name: 'Mock Repo 2',
        lists: mockLists,
    },
];

export const onItemClick = jest.fn();
export const onEditClick = jest.fn();
export const onDeleteClick = jest.fn();
export const onCreateClick = jest.fn();
