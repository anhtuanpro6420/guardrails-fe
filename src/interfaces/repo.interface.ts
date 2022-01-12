import { IList } from './list.interface';

export interface IRepo {
    id: number;
    name: string;
    lists: Array<IList>;
}
