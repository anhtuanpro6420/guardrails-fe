import React, { FC } from 'react';
import { Button, Form, Input } from 'antd';
import { IRepo } from 'interfaces/repo.interface';
import './RepoForm.scss';

interface Props {
    repo: IRepo | null;
    btnTitle: string;
    onSubmit: (repo: IRepo) => void;
}

const RepoForm: FC<Props> = ({ repo, btnTitle, onSubmit }) => {
    const { name } = repo || {};

    const onFinish = (repoObj: IRepo) => {
        onSubmit({ ...repo, ...repoObj });
        console.log({ ...repo, ...repoObj });
    };

    return (
        <Form
            name='Repo'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ name }}
            onFinish={onFinish}
        >
            <Form.Item
                label='Name'
                name='name'
                rules={[{ required: true, message: 'Please input repo name!' }]}
            >
                <Input data-testid='repo-input' />
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

export default RepoForm;
