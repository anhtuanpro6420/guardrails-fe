import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, List } from 'antd';
import { getRepos } from 'apis/repo.api';
import { IRepo } from 'interfaces/repo.interface';
import './Repo.scss';

const { Text } = Typography;

const Repo: FC = () => {
    const history = useHistory();
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
                    <List.Item
                        className='repo-item'
                        onClick={() => history.push(`/repos/${repo.id}`)}
                    >
                        <Text strong>{repo.name}</Text>
                    </List.Item>
                )}
            />
        );
    };

    return <div className='repo-page'>{renderRepos()}</div>;
};

export default Repo;
