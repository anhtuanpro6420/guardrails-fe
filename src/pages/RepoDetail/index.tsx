import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, List, Typography } from 'antd';
import { getRepoDetailAPI, updateRepoAPI } from 'apis/repo.api';
import { IList } from 'interfaces/list.interface';
import { IRepo } from 'interfaces/repo.interface';
import { ICard } from 'interfaces/card.interface';
import './RepoDetail.scss';
import { IDraggedInformation } from 'interfaces/common.interface';
import {
    addCardIntoList,
    removeCardFromList,
    updateListForRepo,
} from 'utils/list.util';
import { LIST_TITLES } from 'constants/list.constant';

const { FALSE_POSITIVE, FIXED, CONFIRMED } = LIST_TITLES;
const FINAL_LIST = [FALSE_POSITIVE, FIXED];
const CONFIRMED_MOVE_LIST = [FIXED];

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

    const onDragCardStart = (
        event: React.DragEvent<HTMLDivElement>,
        dragInformation: IDraggedInformation
    ) => {
        event.dataTransfer.setData(
            'dragInformation',
            JSON.stringify(dragInformation)
        );
    };

    const onDropIntoList = async (
        event: React.DragEvent<HTMLDivElement>,
        list: IList
    ) => {
        const dragInformationStr: string =
            event.dataTransfer.getData('dragInformation');
        const dragInformation: IDraggedInformation =
            JSON.parse(dragInformationStr);
        const { draggedCard, draggedList } = dragInformation || {};
        const canNotMoveCard: boolean =
            list.id === draggedList.id ||
            FINAL_LIST.includes(draggedList.title) ||
            (draggedList.title === CONFIRMED &&
                !CONFIRMED_MOVE_LIST.includes(list.title));
        if (canNotMoveCard) {
            return;
        }
        const addedList: IList = addCardIntoList(draggedCard, list);
        const addedRepo: IRepo | null = updateListForRepo(addedList, repo);
        const removedList: IList = removeCardFromList(draggedCard, draggedList);
        const removedRepo: IRepo | null = updateListForRepo(
            removedList,
            addedRepo
        );
        const updatedRepo: IRepo = await updateRepoAPI(removedRepo!);
        setRepo(updatedRepo);
    };

    const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const renderListItem = (list: IList) => {
        const { cards = [] } = list || {};
        return cards.map((card: ICard) => {
            const { id, text } = card;
            const dragInformation: IDraggedInformation = {
                draggedCard: card,
                draggedList: list,
            };
            return (
                <Card
                    className='card'
                    key={id}
                    title={text}
                    draggable
                    onDragStart={e => onDragCardStart(e, dragInformation)}
                    onDragOver={e => onDragOver(e)}
                />
            );
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
                    return (
                        <List.Item
                            className='list-item'
                            onDrop={(event: React.DragEvent<HTMLDivElement>) =>
                                onDropIntoList(event, list)
                            }
                            onDragOver={(
                                event: React.DragEvent<HTMLDivElement>
                            ) => onDragOver(event)}
                        >
                            <Text strong className='list-title'>
                                {list.title}
                            </Text>
                            {renderListItem(list)}
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
