export interface PaginateBarProps {
  page?: number;
  total?: number;
}

export interface CovidNoticeProps {}

export interface ProgressBarProps {
  percentage?: number;
}

export interface BarProps {
  type?: string;
  [x: string]: any;
}
