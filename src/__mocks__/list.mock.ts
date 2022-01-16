import { IList } from 'interfaces/list.interface';
import { mockCards } from './card.mock';

export const mockList: IList = {
    id: '1',
    title: 'Open',
    cards: mockCards,
};

export const onCreateCardClick = jest.fn();
