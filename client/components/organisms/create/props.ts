export interface GetStartedCreateProps {}

export interface KindCreateProps {
  data?: any;
  setData?: (params: any) => void;
}

export interface CreateProps {
  type?: string;
  [x: string]: any;
}
