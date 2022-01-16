import { ICard } from 'interfaces/card.interface';
import { IList } from 'interfaces/list.interface';

export const mockCard: ICard = {
    id: '1',
    text: 'Mock Card',
    note: 'Note Mock Card',
};

export const mockCards: Array<ICard> = [
    {
        id: '1',
        text: 'Mock Card 1',
        note: 'Note Mock Card 1',
    },
    {
        id: '2',
        text: 'Mock Card 2',
        note: 'Note Mock Card 2',
    },
    {
        id: '3',
        text: 'Mock Card 3',
        note: 'Note Mock Card 3',
    },
    {
        id: '4',
        text: 'Mock Card 4',
        note: 'Note Mock Card 4',
    },
];

export const mockList: IList = {
    id: '1',
    title: 'Mock List',
    cards: mockCards,
};

export const onDeleteCardClick = jest.fn();
