
export interface IResponseData<T> {
    errCode: number;
    errMsg?: string;
    data: T;
  }
  
  export type RSBoolean = IResponseData<boolean>;
  
  export type RSString = IResponseData<string>;