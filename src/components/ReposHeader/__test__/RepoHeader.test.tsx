import React from 'react';
import { render, screen } from '@testing-library/react';
import { onCreateClick } from '__mocks__/repo.mock';
import ReposHeader from '../index';

describe('RepoHeader', () => {
    test('should render correct repo header', () => {
        render(<ReposHeader onCreateClick={onCreateClick} />);
        const repoHeader = screen.getByText(RegExp('Repositories', 'i'));
        expect(repoHeader).toBeInTheDocument();
    });

    test('should render create repo icon', () => {
        render(<ReposHeader onCreateClick={onCreateClick} />);
        const createButton = screen.getByTestId('create-repo-button');
        expect(createButton).toBeInTheDocument();
    });
});
