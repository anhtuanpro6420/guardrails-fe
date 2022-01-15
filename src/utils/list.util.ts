import { ICard } from 'interfaces/card.interface';
import { IList } from 'interfaces/list.interface';
import { IRepo } from 'interfaces/repo.interface';

export const addCardIntoList = (card: ICard, list: IList) => {
    const cloneList: IList = { ...list };
    const { cards = [] } = cloneList;
    const newCards: Array<ICard> = [...cards, { ...card }];
    cloneList.cards = newCards;
    return cloneList;
};

export const removeCardFromList = (card: ICard, list: IList) => {
    const cloneList: IList = { ...list };
    const { cards = [] } = cloneList;
    const cloneCards: Array<ICard> = [...cards];
    const cardIndex: number = cloneCards.findIndex(
        (cd: ICard) => cd.id === card.id
    );
    const hasCard: boolean = cardIndex > -1;
    if (hasCard) {
        cloneCards.splice(cardIndex, 1);
    }
    cloneList.cards = cloneCards;
    return cloneList;
};

export const updateListForRepo = (list: IList, repo: IRepo | null) => {
    if (!repo) {
        return null;
    }
    const cloneRepo: IRepo = { ...repo };
    const { lists = [] } = cloneRepo || {};
    const cloneLists: Array<IList> = [...lists];
    const listIndex: number = cloneLists.findIndex(
        (ls: IList) => ls.id === list.id
    );
    const hasList: boolean = listIndex > -1;
    if (!hasList) {
        return cloneRepo;
    }
    cloneLists[listIndex] = list;
    cloneRepo.lists = cloneLists;
    return cloneRepo;
};
