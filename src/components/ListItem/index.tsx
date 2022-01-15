import React, { FC } from 'react';
import { Card, List } from 'antd';
import { IList } from 'interfaces/list.interface';
import { ICard } from 'interfaces/card.interface';
import { IDraggedInformation } from 'interfaces/common.interface';
import CardTitle from 'components/CardTitle';
import ListItemHeader from 'components/ListItemHeader';
import './ListItem.scss';

interface Props {
    list: IList;
    onDropIntoList: (
        event: React.DragEvent<HTMLDivElement>,
        list: IList
    ) => void;
    onCreateCardClick: (list: IList) => void;
    onDragCardStart: (
        event: React.DragEvent<HTMLDivElement>,
        dragInformation: IDraggedInformation
    ) => void;
    onCardClick: (card: ICard, list: IList) => void;
    onDeleteCardClick: (
        event: React.MouseEvent,
        card: ICard,
        list: IList
    ) => void;
}

const ListItem: FC<Props> = ({
    list,
    onDropIntoList,
    onCreateCardClick,
    onDragCardStart,
    onCardClick,
    onDeleteCardClick,
}) => {
    const renderListItem = (listItem: IList) => {
        const { cards = [] } = listItem || {};
        return cards.map((cardItem: ICard) => {
            const { id, note } = cardItem;
            const dragInformation: IDraggedInformation = {
                draggedCard: cardItem,
                draggedList: listItem,
            };
            return (
                <Card
                    className='card'
                    key={id}
                    title={
                        <CardTitle
                            card={cardItem}
                            list={listItem}
                            onDeleteCardClick={onDeleteCardClick}
                        />
                    }
                    draggable
                    onDragStart={(event: React.DragEvent<HTMLDivElement>) =>
                        onDragCardStart(event, dragInformation)
                    }
                    onDragOver={(event: React.DragEvent<HTMLDivElement>) =>
                        event.preventDefault()
                    }
                    onClick={() => onCardClick(cardItem, listItem)}
                >
                    {note}
                </Card>
            );
        });
    };

    return (
        <List.Item
            className='list-item'
            onDrop={(event: React.DragEvent<HTMLDivElement>) =>
                onDropIntoList(event, list)
            }
            onDragOver={(event: React.DragEvent<HTMLDivElement>) =>
                event.preventDefault()
            }
        >
            <ListItemHeader list={list} onCreateCardClick={onCreateCardClick} />
            {renderListItem(list)}
        </List.Item>
    );
};

export default ListItem;
