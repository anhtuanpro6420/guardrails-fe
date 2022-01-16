import React from 'react';
import { render, screen } from '@testing-library/react';
import '__mocks__/media.mock';
import { onSubmit } from '__mocks__/card.mock';
import { mockRepo } from '__mocks__/repo.mock';
import RepoForm from '../index';

describe('RepoForm', () => {
    describe('Form UI', () => {
        test('should render text label', () => {
            render(
                <RepoForm
                    repo={mockRepo}
                    btnTitle='Create'
                    onSubmit={onSubmit}
                />
            );
            const nameLabel = screen.getByLabelText('Name');
            expect(nameLabel).toBeInTheDocument();
        });

        test('should render submit button', () => {
            render(
                <RepoForm
                    repo={mockRepo}
                    btnTitle='Create'
                    onSubmit={onSubmit}
                />
            );
            const submitButton = screen.getByTestId('submit-button');
            expect(submitButton).toBeInTheDocument();
        });
    });

    describe('Repo Form Updating', () => {
        test('should render correct name', () => {
            render(
                <RepoForm
                    repo={mockRepo}
                    btnTitle='Update'
                    onSubmit={onSubmit}
                />
            );
            const nameInput = screen.getByTestId('name-input');
            expect(nameInput).toHaveDisplayValue(mockRepo.name);
        });

        test('should render update button', () => {
            render(
                <RepoForm
                    repo={mockRepo}
                    btnTitle='Update'
                    onSubmit={onSubmit}
                />
            );
            const submitButton = screen.getByTestId('submit-button');
            expect(submitButton).toHaveTextContent('Update');
        });
    });

    describe('Repo Form Creating', () => {
        test('should render empty name', () => {
            render(
                <RepoForm repo={null} btnTitle='Create' onSubmit={onSubmit} />
            );
            const nameInout = screen.getByTestId('name-input');
            expect(nameInout).toHaveDisplayValue('');
        });

        test('should render create button', () => {
            render(
                <RepoForm repo={null} btnTitle='Create' onSubmit={onSubmit} />
            );
            const submitButton = screen.getByTestId('submit-button');
            expect(submitButton).toHaveTextContent('Create');
        });
    });
});
