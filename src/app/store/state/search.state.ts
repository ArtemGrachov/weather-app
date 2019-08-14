export interface ISearchState {
    loading: boolean;
    location: string;
}

export const initialSearchState: ISearchState = {
    loading: false,
    location: null
}
