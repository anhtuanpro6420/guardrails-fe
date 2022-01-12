import { ICard } from './card.interface';

export interface IList {
    id: number;
    title: string;
    cards: Array<ICard>;
}
