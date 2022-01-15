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
