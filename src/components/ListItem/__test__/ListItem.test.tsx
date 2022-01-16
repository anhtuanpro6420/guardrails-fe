import React from 'react';
import { render, screen } from '@testing-library/react';
import {
    mockList,
    onCardClick,
    onCreateCardClick,
    onDeleteCardClick,
    onDragCardStart,
    onDropIntoList,
} from '__mocks__/list.mock';
import ListItem from '../index';

describe('ListItem', () => {
    test('should render correct list header', () => {
        render(
            <ListItem
                list={mockList}
                onDropIntoList={onDropIntoList}
                onCreateCardClick={onCreateCardClick}
                onDragCardStart={onDragCardStart}
                onCardClick={onCardClick}
                onDeleteCardClick={onDeleteCardClick}
            />
        );
        const listTitle = screen.getByText(RegExp(mockList.title, 'i'));
        expect(listTitle).toBeInTheDocument();
    });

    test('should render correct list header', () => {
        render(
            <ListItem
                list={mockList}
                onDropIntoList={onDropIntoList}
                onCreateCardClick={onCreateCardClick}
                onDragCardStart={onDragCardStart}
                onCardClick={onCardClick}
                onDeleteCardClick={onDeleteCardClick}
            />
        );
        const plusIcon = screen.getByTestId('plus-icon');
        expect(plusIcon).toBeInTheDocument();
    });

    test('should render correct cards', () => {
        const { container } = render(
            <ListItem
                list={mockList}
                onDropIntoList={onDropIntoList}
                onCreateCardClick={onCreateCardClick}
                onDragCardStart={onDragCardStart}
                onCardClick={onCardClick}
                onDeleteCardClick={onDeleteCardClick}
            />
        );
        expect(container.getElementsByClassName('card').length).toBe(
            mockList.cards.length
        );
    });
});
