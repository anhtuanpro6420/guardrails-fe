import React, { FC } from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Typography, List } from 'antd';
import { IRepo } from 'interfaces/repo.interface';
import './RepoItem.scss';

const { Text } = Typography;

interface Props {
    repo: IRepo;
    onItemClick: (repoId: string) => void;
    onEditClick: (event: React.MouseEvent, repo: IRepo) => void;
    onDeleteClick: (event: React.MouseEvent, repo: IRepo) => void;
}

const RepoItem: FC<Props> = ({
    repo,
    onItemClick,
    onEditClick,
    onDeleteClick,
}) => {
    return (
        <List.Item className='repo-item' onClick={() => onItemClick(repo.id)}>
            <Text strong>{repo.name}</Text>
            <div className='action-container'>
                <EditOutlined
                    className='edit-repo-icon'
                    onClick={(event: React.MouseEvent) =>
                        onEditClick(event, repo)
                    }
                />
                <DeleteOutlined
                    key='delete'
                    data-testid='delete-icon'
                    onClick={(event: React.MouseEvent) =>
                        onDeleteClick(event, repo)
                    }
                />
            </div>
        </List.Item>
    );
};

export default RepoItem;
