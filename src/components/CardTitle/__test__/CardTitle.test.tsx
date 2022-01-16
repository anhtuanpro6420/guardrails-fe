import React from 'react';
import { render, screen } from '@testing-library/react';
import { mockCard, onDeleteCardClick } from '__mocks__/card.mock';
import { mockList } from '__mocks__/list.mock';
import CardTitle from '../index';

describe('CardTitle', () => {
    test('should render correct card title', () => {
        render(
            <CardTitle
                card={mockCard}
                list={mockList}
                onDeleteCardClick={onDeleteCardClick}
            />
        );
        const cardTitle = screen.getByText(RegExp(mockCard.text, 'i'));
        expect(cardTitle).toBeInTheDocument();
    });

    test('should render delete icon', () => {
        render(
            <CardTitle
                card={mockCard}
                list={mockList}
                onDeleteCardClick={onDeleteCardClick}
            />
        );
        const deleteIcon = screen.getByTestId('delete-icon');
        expect(deleteIcon).toBeInTheDocument();
    });
});
