import React, { FC } from 'react';
import { Layout } from 'antd';
import './Wrapper.scss';

const { Content } = Layout;

interface Props {
    children: JSX.Element;
}

const Wrapper: FC<Props> = ({ children }) => {
    return (
        <Layout className='layout-container'>
            <Content>{children}</Content>
        </Layout>
    );
};

export default Wrapper;
