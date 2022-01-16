import React from 'react';
import { render, screen } from '@testing-library/react';
import {
    mockRepo,
    onDeleteClick,
    onEditClick,
    onItemClick,
} from '__mocks__/repo.mock';
import RepoItem from '../index';

describe('RepoItem', () => {
    test('should render repo name', () => {
        render(
            <RepoItem
                repo={mockRepo}
                onItemClick={onItemClick}
                onEditClick={onEditClick}
                onDeleteClick={onDeleteClick}
            />
        );
        const repoName = screen.getByText(RegExp(mockRepo.name, 'i'));
        expect(repoName).toBeInTheDocument();
    });

    test('should render edit icon', () => {
        render(
            <RepoItem
                repo={mockRepo}
                onItemClick={onItemClick}
                onEditClick={onEditClick}
                onDeleteClick={onDeleteClick}
            />
        );
        const editIcon = screen.getByTestId('edit-repo-icon');
        expect(editIcon).toBeInTheDocument();
    });

    test('should render delete icon', () => {
        render(
            <RepoItem
                repo={mockRepo}
                onItemClick={onItemClick}
                onEditClick={onEditClick}
                onDeleteClick={onDeleteClick}
            />
        );
        const deleteIcon = screen.getByTestId('delete-repo-icon');
        expect(deleteIcon).toBeInTheDocument();
    });
});
