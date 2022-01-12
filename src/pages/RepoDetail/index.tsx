import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { List } from 'antd';
import { getRepoDetail } from 'apis/repo.api';
import { IList } from 'interfaces/list.interface';
import { IRepo } from 'interfaces/repo.interface';
import './RepoDetail.scss';

const RepoDetail: FC = () => {
    const { repoId }: { repoId: string } = useParams();
    const [repo, setRepo] = useState<IRepo | null>(null);

    const fetchRepoDetail = async (id: string) => {
        const repoResponse: IRepo = await getRepoDetail(id);
        setRepo(repoResponse);
    };

    useEffect(() => {
        fetchRepoDetail(repoId);
    }, [repoId]);

    const renderList = () => {
        const { lists = [] }: { lists: Array<IList> } = repo || ({} as IRepo);
        return (
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={lists}
                renderItem={(list: IList) => (
                    <List.Item>{list.title}</List.Item>
                )}
            />
        );
    };

    return (
        <div>
            <h1>{repo?.name}</h1>
            {renderList()}
        </div>
    );
};

export default RepoDetail;
