import { ICard } from './card.interface';
import { IList } from './list.interface';

export interface IDraggedInformation {
    draggedList: IList;
    draggedCard: ICard;
}
