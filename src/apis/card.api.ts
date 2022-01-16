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
    const { id, text, note } = cardObj;
    const { data: card }: { data: ICard } = await axios.put(`/card/${id}`, {
        text,
        note,
        id,
    });
    return card;
};

const deleteCardAPI = async (cardId: string): Promise<ICard> => {
    const { data: card }: { data: ICard } = await axios.delete(
        `/card/${cardId}`
    );
    return card;
};

export { createCardAPI, updateCardAPI, deleteCardAPI };
