import React, { FC } from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { List } from 'antd';
import { IRepo } from 'interfaces/repo.interface';
import './RepoItem.scss';

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
            <h3 className='repo-name'>{repo.name}</h3>
            <div className='action-container'>
                <EditOutlined
                    className='edit-repo-icon'
                    data-testid='edit-repo-icon'
                    onClick={(event: React.MouseEvent) =>
                        onEditClick(event, repo)
                    }
                />
                <DeleteOutlined
                    key='delete'
                    data-testid='delete-repo-icon'
                    onClick={(event: React.MouseEvent) =>
                        onDeleteClick(event, repo)
                    }
                />
            </div>
        </List.Item>
    );
};

export default RepoItem;
