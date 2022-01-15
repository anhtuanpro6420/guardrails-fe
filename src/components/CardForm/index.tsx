import React, { FC } from 'react';
import { Button, Form, Input } from 'antd';
import { ICard } from 'interfaces/card.interface';
import './CardForm.scss';

interface Props {
    card: ICard | null;
    btnTitle: string;
    onSubmit: (card: ICard) => void;
}

const CardForm: FC<Props> = ({ card, btnTitle, onSubmit }) => {
    const { text, note } = card || {};

    const onFinish = (cardObj: ICard) => {
        onSubmit({ ...card, ...cardObj });
    };

    return (
        <Form
            name='Card'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ text, note }}
            onFinish={onFinish}
        >
            <Form.Item
                label='Text'
                name='text'
                rules={[{ required: true, message: 'Please input card text!' }]}
            >
                <Input data-testid='card-text' />
            </Form.Item>

            <Form.Item
                label='Note'
                name='note'
                rules={[{ required: true, message: 'Please input card note!' }]}
            >
                <Input.TextArea data-testid='card-note' />
            </Form.Item>

            <Form.Item className='button-container'>
                <Button
                    type='primary'
                    htmlType='submit'
                    data-testid='submit-button'
                >
                    {btnTitle}
                </Button>
            </Form.Item>
        </Form>
    );
};

export default CardForm;
