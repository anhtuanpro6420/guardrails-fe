import React from 'react';
import { render, screen } from '@testing-library/react';
import '__mocks__/media.mock';
import { mockCard, onSubmit } from '__mocks__/card.mock';
import CardForm from '../index';

describe('CardForm', () => {
    describe('Form UI', () => {
        test('should render text label', () => {
            render(
                <CardForm
                    card={mockCard}
                    btnTitle='Create'
                    onSubmit={onSubmit}
                />
            );
            const textLabel = screen.getByLabelText('Text');
            expect(textLabel).toBeInTheDocument();
        });

        test('should render note label', () => {
            render(
                <CardForm
                    card={mockCard}
                    btnTitle='Create'
                    onSubmit={onSubmit}
                />
            );
            const noteLabel = screen.getByLabelText('Note');
            expect(noteLabel).toBeInTheDocument();
        });

        test('should render text input', () => {
            render(
                <CardForm
                    card={mockCard}
                    btnTitle='Create'
                    onSubmit={onSubmit}
                />
            );
            const textInput = screen.getByTestId('text-input');
            expect(textInput).toBeInTheDocument();
        });

        test('should render note input', () => {
            render(
                <CardForm
                    card={mockCard}
                    btnTitle='Create'
                    onSubmit={onSubmit}
                />
            );
            const noteInput = screen.getByTestId('note-input');
            expect(noteInput).toBeInTheDocument();
        });

        test('should render submit button', () => {
            render(
                <CardForm
                    card={mockCard}
                    btnTitle='Create'
                    onSubmit={onSubmit}
                />
            );
            const submitButton = screen.getByTestId('submit-button');
            expect(submitButton).toBeInTheDocument();
        });
    });

    describe('Card Form Updating', () => {
        test('should render correct text', () => {
            render(
                <CardForm
                    card={mockCard}
                    btnTitle='Update'
                    onSubmit={onSubmit}
                />
            );
            const textInput = screen.getByTestId('text-input');
            expect(textInput).toHaveDisplayValue(mockCard.text);
        });

        test('should render correct note', () => {
            render(
                <CardForm
                    card={mockCard}
                    btnTitle='Update'
                    onSubmit={onSubmit}
                />
            );
            const noteInput = screen.getByTestId('note-input');
            expect(noteInput).toHaveDisplayValue(mockCard.note);
        });
    });

    describe('Card Form Creating', () => {
        test('should render empty text', () => {
            render(
                <CardForm card={null} btnTitle='Create' onSubmit={onSubmit} />
            );
            const textInput = screen.getByTestId('text-input');
            expect(textInput).toHaveDisplayValue('');
        });

        test('should render empty note', () => {
            render(
                <CardForm card={null} btnTitle='Create' onSubmit={onSubmit} />
            );
            const noteInput = screen.getByTestId('note-input');
            expect(noteInput).toHaveDisplayValue('');
        });
    });

    describe('Button testing', () => {
        test('should render create button', () => {
            render(
                <CardForm card={null} btnTitle='Create' onSubmit={onSubmit} />
            );
            const submitButton = screen.getByTestId('submit-button');
            expect(submitButton).toHaveTextContent('Create');
        });

        test('should render update button', () => {
            render(
                <CardForm
                    card={mockCard}
                    btnTitle='Update'
                    onSubmit={onSubmit}
                />
            );
            const submitButton = screen.getByTestId('submit-button');
            expect(submitButton).toHaveTextContent('Update');
        });
    });
});
