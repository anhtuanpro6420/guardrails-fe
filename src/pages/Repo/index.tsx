import React, { FC, useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { List, Button, Modal } from 'antd';
import {
    createRepoAPI,
    deleteRepoAPI,
    getReposAPI,
    updateRepoAPI,
} from 'apis/repo.api';
import { IRepo } from 'interfaces/repo.interface';
import './Repo.scss';
import RepoForm from 'components/RepoForm';
import { createRepo, deleteRepo, updateRepo } from 'utils/repo.util';
import RepoItem from 'components/RepoItem';

const Repo: FC = () => {
    const history = useHistory();
    const [repos, setRepos] = useState([] as Array<IRepo>);
    const [repo, setRepo] = useState<IRepo | null>(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const fetchRepos = async () => {
        const repoResponse: Array<IRepo> = await getReposAPI();
        setRepos(repoResponse);
    };

    useEffect(() => {
        fetchRepos();
    }, []);

    const openCreateModal = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setRepo(null);
        setIsModalVisible(false);
    };

    const handleCreate = async (repoObj: IRepo) => {
        const createdRepo: IRepo = await createRepoAPI(repoObj);
        const newRepos: Array<IRepo> = createRepo(createdRepo, repos);
        setRepos(newRepos);
        closeModal();
    };

    const openUpdateModal = (event: React.MouseEvent, repoItem: IRepo) => {
        event.stopPropagation();
        setRepo(repoItem);
        setIsModalVisible(true);
    };

    const handleUpdate = async (repoObj: IRepo) => {
        const updatedRepo: IRepo = await updateRepoAPI(repoObj);
        const newRepos: Array<IRepo> = updateRepo(updatedRepo, repos);
        setRepos(newRepos);
        closeModal();
    };

    const handleDelete = async (event: React.MouseEvent, repoObj: IRepo) => {
        event.stopPropagation();
        const { id } = repoObj;
        const deletedRepo: IRepo = await deleteRepoAPI(id);
        const newRepos: Array<IRepo> = deleteRepo(deletedRepo, repos);
        setRepos(newRepos);
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
                renderItem={(repoItem: IRepo) => (
                    <RepoItem
                        repo={repoItem}
                        onItemClick={() =>
                            history.push(`/repos/${repoItem.id}`)
                        }
                        onEditClick={openUpdateModal}
                        onDeleteClick={handleDelete}
                    />
                )}
            />
        );
    };

    const renderTitle = () => {
        return repo ? 'Update repo' : 'Create repo';
    };

    const renderRepoForm = () => {
        return repo ? (
            <RepoForm repo={repo} btnTitle='Update' onSubmit={handleUpdate} />
        ) : (
            <RepoForm repo={null} btnTitle='Create' onSubmit={handleCreate} />
        );
    };

    return (
        <div className='repo-page'>
            {renderRepos()}
            <Modal
                title={renderTitle()}
                visible={isModalVisible}
                footer={null}
                onCancel={closeModal}
                destroyOnClose
            >
                {renderRepoForm()}
            </Modal>
        </div>
    );
};

export default Repo;
