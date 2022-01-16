import React, { FC } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { IList } from 'interfaces/list.interface';
import './ListItemHeader.scss';

interface Props {
    list: IList;
    onCreateCardClick: (list: IList) => void;
}

const ListItemHeader: FC<Props> = ({ list, onCreateCardClick }) => {
    return (
        <div className='list-item-header'>
            <h3 className='list-title'>{list.title}</h3>
            <PlusOutlined
                onClick={() => onCreateCardClick(list)}
                data-testid='plus-icon'
            />
        </div>
    );
};

export default ListItemHeader;
