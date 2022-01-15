import { ICard } from 'interfaces/card.interface';
import axios from '../axios-instance';

const createCardAPI = async (
    cardObj: ICard,
    listId: string
): Promise<ICard> => {
    const { data: card }: { data: ICard } = await axios.post(
        `/list/${listId}/card`,
        {
            ...cardObj,
        }
    );
    return card;
};

const updateCardAPI = async (cardObj: ICard): Promise<ICard> => {
    const { id } = cardObj;
    const { data: card }: { data: ICard } = await axios.put(`/card/${id}`, {
        ...cardObj,
    });
    return card;
};

export { createCardAPI, updateCardAPI };