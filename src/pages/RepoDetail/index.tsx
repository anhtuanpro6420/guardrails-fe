import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, List, Typography } from 'antd';
import { getRepoDetailAPI } from 'apis/repo.api';
import { IList } from 'interfaces/list.interface';
import { IRepo } from 'interfaces/repo.interface';
import { ICard } from 'interfaces/card.interface';
import './RepoDetail.scss';

const { Text } = Typography;

const RepoDetail: FC = () => {
    const { repoId }: { repoId: string } = useParams();
    const [repo, setRepo] = useState<IRepo | null>(null);

    const fetchRepoDetail = async (id: string) => {
        const repoResponse: IRepo = await getRepoDetailAPI(id);
        setRepo(repoResponse);
    };

    useEffect(() => {
        fetchRepoDetail(repoId);
    }, [repoId]);

    const renderListItem = (cards: Array<ICard> = []) => {
        return cards.map((card: ICard) => {
            const { id, text } = card;
            return <Card className='card' key={id} title={text} />;
        });
    };

    const renderList = () => {
        const { lists = [] }: { lists: Array<IList> } = repo || ({} as IRepo);
        return (
            <List
                className='list-container'
                grid={{ gutter: 16, column: 4 }}
                dataSource={lists}
                renderItem={(list: IList) => {
                    const { cards = [] } = list || {};
                    return (
                        <List.Item className='list-item'>
                            <Text strong className='list-title'>
                                {list.title}
                            </Text>
                            {renderListItem(cards)}
                        </List.Item>
                    );
                }}
            />
        );
    };

    return (
        <div className='repo-detail'>
            <h1>{repo?.name}</h1>
            {renderList()}
        </div>
    );
};

export default RepoDetail;
