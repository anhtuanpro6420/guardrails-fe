import { IList } from './list.interface';

export interface IRepo {
    id: string;
    name: string;
    lists: Array<IList>;
}
