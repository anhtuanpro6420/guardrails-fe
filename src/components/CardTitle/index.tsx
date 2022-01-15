import React, { FC } from 'react';
import { Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { IList } from 'interfaces/list.interface';
import { ICard } from 'interfaces/card.interface';
import './CardTitle.scss';

const { Text } = Typography;

interface Props {
    card: ICard;
    list: IList;
    onDeleteCardClick: (
        event: React.MouseEvent,
        card: ICard,
        list: IList
    ) => void;
}

const CardTitle: FC<Props> = ({ card, list, onDeleteCardClick }) => {
    return (
        <div className='card-title'>
            <Text strong>{card.text}</Text>
            <DeleteOutlined
                onClick={(event: React.MouseEvent) =>
                    onDeleteCardClick(event, card, list)
                }
            />
        </div>
    );
};

export default CardTitle;
