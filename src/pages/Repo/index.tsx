import { getRepos } from 'apis/repo.api';
import { IRepo } from 'interfaces/repo.interface';
import React, { FC, useEffect, useState } from 'react';
import './Repo.scss';

const Repo: FC = () => {
    const [repos, setRepos] = useState([] as Array<IRepo>);

    const fetchRepos = async () => {
        const repoResponse: Array<IRepo> = await getRepos();
        setRepos(repoResponse);
    };

    useEffect(() => {
        fetchRepos();
    }, []);

    return <div className='repo-page'>Repo page</div>;
};

export default Repo;
