import React, { FC } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import './ReposHeader.scss';

interface Props {
    onCreateClick: () => void;
}

const ReposHeader: FC<Props> = ({ onCreateClick }) => {
    return (
        <div className='repo-header'>
            <h1>Repositories</h1>
            <Button
                type='primary'
                icon={<PlusOutlined onClick={onCreateClick} />}
                data-testid='create-repo-button'
            />
        </div>
    );
};

export default ReposHeader;
