import { IList } from 'interfaces/list.interface';
import { mockCards } from './card.mock';

export const mockList: IList = {
    id: '1',
    title: 'Open',
    cards: mockCards,
};

export const mockLists: Array<IList> = [
    {
        id: '1',
        title: 'Open',
        cards: mockCards,
    },
    {
        id: '2',
        title: 'Confirmed',
        cards: mockCards,
    },
    {
        id: '3',
        title: 'False Positive',
        cards: mockCards,
    },
    {
        id: '4',
        title: 'Fixed',
        cards: mockCards,
    },
];

export const onDropIntoList = jest.fn();
export const onCreateCardClick = jest.fn();
export const onDragCardStart = jest.fn();
export const onCardClick = jest.fn();
export const onDeleteCardClick = jest.fn();
