import { ICard } from 'interfaces/card.interface';
import { IList } from 'interfaces/list.interface';
import { IRepo } from 'interfaces/repo.interface';
import {
    addCardIntoList,
    removeCardFromList,
    updateListForRepo,
} from 'utils/list.util';
import { mockCard } from '__mocks__/card.mock';
import { mockList } from '__mocks__/list.mock';
import { mockRepo } from '__mocks__/repo.mock';

describe('List utils', () => {
    test('should add card into list successfully', () => {
        const list: IList = addCardIntoList(mockCard, mockList);
        expect(list.cards).toHaveLength(mockList.cards.length + 1);
    });

    test('should remove card from list successfully', () => {
        const { cards = [] } = mockList || {};
        const removeCard: ICard = cards[0];
        const list: IList = removeCardFromList(removeCard, mockList);
        expect(list.cards).toHaveLength(mockList.cards.length - 1);
    });

    test('should update list for repo successfully', () => {
        const repo: IRepo =
            updateListForRepo(mockList, mockRepo) || ({} as IRepo);
        const { lists = [] } = repo || {};
        const foundList: IList =
            lists.find((ls: IList) => ls.id === mockList.id) || ({} as IList);
        expect(foundList).toEqual(mockList);
    });
});
