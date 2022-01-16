import React, { FC } from 'react';
import { Button, Form, Input, Typography } from 'antd';
import { ICard } from 'interfaces/card.interface';
import './CardForm.scss';

const { Text } = Typography;

interface Props {
    card: ICard | null;
    btnTitle: string;
    onSubmit: (card: ICard) => void;
}

const CardForm: FC<Props> = ({ card, btnTitle, onSubmit }) => {
    const { text, note, movedDate } = card || {};

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
                <Input data-testid='text-input' />
            </Form.Item>

            <Form.Item
                label='Note'
                name='note'
                rules={[{ required: true, message: 'Please input card note!' }]}
            >
                <Input.TextArea data-testid='note-input' />
            </Form.Item>

            {movedDate && (
                <Form.Item label='Moved date'>
                    <Text disabled>{new Date(movedDate).toLocaleString()}</Text>
                </Form.Item>
            )}

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
