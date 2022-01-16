import MockAdapter from 'axios-mock-adapter';
import { createCardAPI, deleteCardAPI, updateCardAPI } from 'apis/card.api';
import { ICard } from 'interfaces/card.interface';
import { mockCard } from '__mocks__/card.mock';
import axios from '../../axios-instance';

describe('Card api', () => {
    test('should create a card', async () => {
        const mock = new MockAdapter(axios);
        const listId = '1';
        mock.onPost(`/list/${listId}/card`, mockCard).reply(201, mockCard);
        const card: ICard = await createCardAPI(mockCard, listId);
        expect(card).toEqual(mockCard);
    });

    test('should update a card', async () => {
        const mock = new MockAdapter(axios);
        mock.onPut(`/card/${mockCard.id}`, mockCard).reply(200, mockCard);
        const card: ICard = await updateCardAPI(mockCard);
        expect(card).toEqual(mockCard);
    });

    test('should delete a card', async () => {
        const mock = new MockAdapter(axios);
        mock.onDelete(`/card/${mockCard.id}`).reply(200, mockCard);
        const card: ICard = await deleteCardAPI(mockCard.id);
        expect(card).toEqual(mockCard);
    });
});
