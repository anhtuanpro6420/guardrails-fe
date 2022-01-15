import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, List, Modal, Typography } from 'antd';
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
import { PlusOutlined } from '@ant-design/icons';
import CardForm from 'components/CardForm';
import { createCardAPI, updateCardAPI } from 'apis/card.api';
import { addCardIntoRepoByList } from 'utils/card.util';

const { FALSE_POSITIVE, FIXED, CONFIRMED } = LIST_TITLES;
const FINAL_LIST = [FALSE_POSITIVE, FIXED];
const CONFIRMED_MOVE_LIST = [FIXED];

const { Text } = Typography;

const RepoDetail: FC = () => {
    const { repoId }: { repoId: string } = useParams();
    const [repo, setRepo] = useState<IRepo | null>(null);
    const [selectedList, setSelectedList] = useState<IList | null>(null);
    const [selectedCard, setSelectedCard] = useState<ICard | null>(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

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

    const openCreateModal = (list: IList) => {
        setSelectedList(list);
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setSelectedCard(null);
        setIsModalVisible(false);
    };

    const handleCreate = async (cardObj: ICard) => {
        const { id: listId } = selectedList || {};
        const createdCard: ICard = await createCardAPI(cardObj, listId!);
        const newRepo: IRepo = addCardIntoRepoByList(
            { card: createdCard, listId: listId! },
            repo!
        );
        setRepo(newRepo);
        closeModal();
    };

    const handleUpdate = async (cardObj: ICard) => {
        const updatedCard: ICard = await updateCardAPI(cardObj);
        // const newRepos: Array<ICard> = updateRepo(updatedCard, repos);
        // setRepos(newRepos);
        closeModal();
    };

    const renderListItem = (list: IList) => {
        const { cards = [] } = list || {};
        return cards.map((cardItem: ICard) => {
            const { id, text, note } = cardItem;
            const dragInformation: IDraggedInformation = {
                draggedCard: cardItem,
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
                >
                    {note}
                </Card>
            );
        });
    };

    const renderList = () => {
        const { lists = [] }: { lists: Array<IList> } = repo || ({} as IRepo);
        console.log(`render repo`, repo);
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
                            <div className='list-item-header'>
                                <Text strong className='list-title'>
                                    {list.title}
                                </Text>
                                <PlusOutlined
                                    onClick={() => openCreateModal(list)}
                                />
                            </div>
                            {renderListItem(list)}
                        </List.Item>
                    );
                }}
            />
        );
    };

    const renderTitle = () => {
        return selectedCard ? 'Update card' : 'Create card';
    };

    const renderCardForm = () => {
        return selectedCard ? (
            <CardForm
                card={selectedCard}
                btnTitle='Update'
                onSubmit={handleUpdate}
            />
        ) : (
            <CardForm card={null} btnTitle='Create' onSubmit={handleCreate} />
        );
    };

    return (
        <div className='repo-detail'>
            <h1>{repo?.name}</h1>
            {renderList()}
            <Modal
                title={renderTitle()}
                visible={isModalVisible}
                footer={null}
                onCancel={closeModal}
                destroyOnClose
            >
                {renderCardForm()}
            </Modal>
        </div>
    );
};

export default RepoDetail;
