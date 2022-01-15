import { ICard } from './card.interface';

export interface IList {
    id: string;
    title: string;
    cards: Array<ICard>;
}
