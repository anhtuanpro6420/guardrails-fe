import { ICard } from 'interfaces/card.interface';
import { IList } from 'interfaces/list.interface';
import { IRepo } from 'interfaces/repo.interface';
import {
    addCardIntoRepoByList,
    deleteCardIntoRepoByList,
    updateCardIntoRepoByList,
} from 'utils/card.util';
import { mockCard } from '__mocks__/card.mock';
import { mockRepo } from '__mocks__/repo.mock';

describe('Card utils', () => {
    test('should add card into repo by list successfully', () => {
        const listId = '1';
        const mockCardId = 'mockCardId';
        const updateObj: { card: ICard; listId: string } = {
            card: { ...mockCard, id: mockCardId },
            listId,
        };
        const repo: IRepo = addCardIntoRepoByList(updateObj, mockRepo);
        const { lists = [] } = repo || {};
        const foundList: IList =
            lists.find((ls: IList) => ls.id === listId) || ({} as IList);
        const { cards = [] } = foundList || {};
        const foundMockCard: ICard =
            cards.find((cd: ICard) => cd.id === mockCardId) || ({} as ICard);
        expect(foundMockCard).toEqual(updateObj.card);
    });

    test('should update card into repo by list successfully', () => {
        const listId = '1';
        const updateObj: { card: ICard; listId: string } = {
            card: mockCard,
            listId,
        };
        const repo: IRepo = updateCardIntoRepoByList(updateObj, mockRepo);
        const { lists = [] } = repo || {};
        const foundList: IList =
            lists.find((ls: IList) => ls.id === listId) || ({} as IList);
        const { cards = [] } = foundList || {};
        const foundMockCard: ICard =
            cards.find((cd: ICard) => cd.id === mockCard.id) || ({} as ICard);
        expect(foundMockCard).toEqual(mockCard);
    });

    test('should delete card into repo by list successfully', () => {
        const listId = '1';
        const mockCardId = '1';
        const updateObj: { card: ICard; listId: string } = {
            card: mockCard,
            listId,
        };
        const repo: IRepo = deleteCardIntoRepoByList(updateObj, mockRepo);
        const { lists = [] } = repo || {};
        const foundList: IList =
            lists.find((ls: IList) => ls.id === listId) || ({} as IList);
        const { cards = [] } = foundList || {};
        const foundMockCard: ICard =
            cards.find((cd: ICard) => cd.id === mockCardId) || ({} as ICard);
        expect(foundMockCard).toEqual({});
    });
});
