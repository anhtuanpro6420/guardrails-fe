import React, { FC, useEffect, useState } from 'react';
import { Typography, Space, List } from 'antd';
import { getRepos } from 'apis/repo.api';
import { IRepo } from 'interfaces/repo.interface';
import './Repo.scss';

const { Text } = Typography;

const Repo: FC = () => {
    const [repos, setRepos] = useState([] as Array<IRepo>);

    const fetchRepos = async () => {
        const repoResponse: Array<IRepo> = await getRepos();
        setRepos(repoResponse);
    };

    useEffect(() => {
        fetchRepos();
    }, []);

    const renderRepos = () => {
        return (
            <List
                header={<div>Repositories</div>}
                bordered
                dataSource={repos}
                renderItem={(repo: IRepo) => (
                    <List.Item className='repo-item'>
                        <Text strong>{repo.name}</Text>
                    </List.Item>
                )}
            />
        );
    };

    return <div className='repo-page'>{renderRepos()}</div>;
};

export default Repo;
