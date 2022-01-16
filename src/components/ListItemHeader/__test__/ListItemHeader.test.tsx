import React from 'react';
import { render, screen } from '@testing-library/react';
import { mockList, onCreateCardClick } from '__mocks__/list.mock';
import ListItemHeader from '../index';

describe('ListItemHeader', () => {
    test('should render correct list header', () => {
        render(
            <ListItemHeader
                list={mockList}
                onCreateCardClick={onCreateCardClick}
            />
        );
        const listTitle = screen.getByText(RegExp(mockList.title, 'i'));
        expect(listTitle).toBeInTheDocument();
    });

    test('should render plus icon', () => {
        render(
            <ListItemHeader
                list={mockList}
                onCreateCardClick={onCreateCardClick}
            />
        );
        const plusIcon = screen.getByTestId('plus-icon');
        expect(plusIcon).toBeInTheDocument();
    });
});
