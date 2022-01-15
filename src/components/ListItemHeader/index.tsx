import React, { FC } from 'react';
import { Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { IList } from 'interfaces/list.interface';
import './ListItemHeader.scss';

const { Text } = Typography;

interface Props {
    list: IList;
    onCreateCardClick: (list: IList) => void;
}

const ListItemHeader: FC<Props> = ({ list, onCreateCardClick }) => {
    return (
        <div className='list-item-header'>
            <Text strong className='list-title'>
                {list.title}
            </Text>
            <PlusOutlined onClick={() => onCreateCardClick(list)} />
        </div>
    );
};

export default ListItemHeader;
