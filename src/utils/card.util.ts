import { ICard } from 'interfaces/card.interface';
import { IList } from 'interfaces/list.interface';
import { IRepo } from 'interfaces/repo.interface';

export const addCardIntoRepoByList = (
    updateObj: { card: ICard; listId: string },
    repo: IRepo
) => {
    const { card, listId } = updateObj || {};
    const cloneRepo: IRepo = { ...repo };
    const { lists = [] } = cloneRepo || {};
    const cloneLists: Array<IList> = [...lists];
    const listIndex: number = cloneLists.findIndex(
        (ls: IList) => ls.id === listId
    );
    const hasList: boolean = listIndex > -1;
    if (!hasList) {
        return cloneRepo;
    }
    const { cards = [] } = cloneLists[listIndex] || {};
    const cloneCards: Array<ICard> = [...cards];
    cloneCards.push(card);
    cloneLists[listIndex].cards = cloneCards;
    cloneRepo.lists = cloneLists;
    return cloneRepo;
};

export const updateCardIntoRepoByList = (
    updateObj: { card: ICard; listId: string },
    repo: IRepo
) => {
    const { card, listId } = updateObj || {};
    const cloneRepo: IRepo = { ...repo };
    const { lists = [] } = cloneRepo || {};
    const cloneLists: Array<IList> = [...lists];
    const listIndex: number = cloneLists.findIndex(
        (ls: IList) => ls.id === listId
    );
    const hasList: boolean = listIndex > -1;
    if (!hasList) {
        return cloneRepo;
    }
    const { cards = [] } = cloneLists[listIndex] || {};
    const cloneCards: Array<ICard> = [...cards];
    const cardIndex: number = cloneCards.findIndex(
        (cd: ICard) => cd.id === card.id
    );
    const hasCard: boolean = cardIndex > -1;
    if (!hasCard) {
        return cloneRepo;
    }
    cloneCards[cardIndex] = { ...card };
    cloneLists[listIndex].cards = cloneCards;
    cloneRepo.lists = cloneLists;
    return cloneRepo;
};

export const deleteCardIntoRepoByList = (
    updateObj: { card: ICard; listId: string },
    repo: IRepo
) => {
    const { card, listId } = updateObj || {};
    const cloneRepo: IRepo = { ...repo };
    const { lists = [] } = cloneRepo || {};
    const cloneLists: Array<IList> = [...lists];
    const listIndex: number = cloneLists.findIndex(
        (ls: IList) => ls.id === listId
    );
    const hasList: boolean = listIndex > -1;
    if (!hasList) {
        return cloneRepo;
    }
    const { cards = [] } = cloneLists[listIndex] || {};
    const cloneCards: Array<ICard> = [...cards];
    cloneLists[listIndex].cards = cloneCards.filter(
        (cd: ICard) => cd.id !== card.id
    );
    cloneRepo.lists = cloneLists;
    return cloneRepo;
};
