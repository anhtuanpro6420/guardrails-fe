import { IRepo } from 'interfaces/repo.interface';
import { mockLists } from './list.mock';

export const mockRepo: IRepo = {
    id: '1',
    name: 'Mock Repo',
    lists: mockLists,
};
