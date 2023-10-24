export type Pizza  = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    types: number[];
    sizes: number[];
    count: number;
  }
  
  export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
  }
  export type SearchPizzaParams = {
    sortBy: string;
    order: string;
    category: string;
    search: string;
    currentPage: string;
  };
  