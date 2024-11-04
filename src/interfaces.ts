import { ModeType } from "@scom/scom-chart-data-source-setup"

export interface IAreaChartOptions {
  xColumn?: {
    key: string,
    type: 'time' | 'category',
    timeFormat?: string
  },
  yColumns?: string[],
  groupBy?: string,
  seriesOptions?: {
    key: string,
    title?: string,
    color?: string
  }[],
  stacking?: boolean,
  xAxis?: {
    title?: string,
    fontColor?: string,
    tickFormat?: string
    reverseValues?: boolean
  },
  yAxis?: {
    title?: string,
    fontColor?: string,
    tickFormat?: string,
    labelFormat?: string,
    position?: 'left' | 'right'
  },
  mergeDuplicateData?: boolean,
  smooth?: boolean,
  legend?: {
    show?: boolean,
    fontColor?: string,
    scroll?: boolean,
    position?: 'top' | 'bottom' | 'left' | 'right'
  },
  padding?: {
    top?: number,
    bottom?: number,
    left?: number,
    right?: number
  },
  showSymbol?: boolean,
  showDataLabels?: boolean,
  percentage?: boolean
}

export interface IAreaChartConfig {
  dataSource: string;
  queryId?: string;
  apiEndpoint?: string;
  title: string,
  description?: string,
  options: IAreaChartOptions,
  file?: {
    cid: string,
    name: string
  },
  mode: ModeType
}

