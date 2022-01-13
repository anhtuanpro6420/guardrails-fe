import React, { FC, useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { Typography, List, Button, Modal } from 'antd';
import { createRepoAPI, getReposAPI } from 'apis/repo.api';
import { IRepo } from 'interfaces/repo.interface';
import './Repo.scss';
import RepoForm from 'components/RepoForm';
import { createRepo } from 'utils/repo.util';

const { Text } = Typography;

const Repo: FC = () => {
    const history = useHistory();
    const [repos, setRepos] = useState([] as Array<IRepo>);
    const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);

    const fetchRepos = async () => {
        const repoResponse: Array<IRepo> = await getReposAPI();
        setRepos(repoResponse);
    };

    useEffect(() => {
        fetchRepos();
    }, []);

    const openCreateModal = () => {
        setIsCreateModalVisible(true);
    };

    const closeCreateModal = () => setIsCreateModalVisible(false);

    const handleCreate = async (repoObj: IRepo) => {
        const createdRepo: IRepo = await createRepoAPI(repoObj);
        const updatedRepos: Array<IRepo> = createRepo(createdRepo, repos);
        setRepos(updatedRepos);
        setIsCreateModalVisible(false);
    };

    const renderReposHeader = () => {
        return (
            <div className='repo-header'>
                <h1>Repositories</h1>
                <Button
                    type='primary'
                    icon={<PlusOutlined onClick={openCreateModal} />}
                />
            </div>
        );
    };

    const renderRepos = () => {
        return (
            <List
                header={renderReposHeader()}
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

    return (
        <div className='repo-page'>
            {renderRepos()}
            <Modal
                title='Create repo'
                visible={isCreateModalVisible}
                footer={null}
                onCancel={closeCreateModal}
                destroyOnClose
            >
                <RepoForm
                    repo={null}
                    btnTitle='Create'
                    onSubmit={handleCreate}
                />
            </Modal>
        </div>
    );
};

export default Repo;
