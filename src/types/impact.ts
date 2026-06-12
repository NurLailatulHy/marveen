export interface ImpactStatistic {
  id: number;
  impact_id: number;
  statistic: string;
  label: string;
  image: string;
  sort_order: number;
}

export interface Impact {
  id: number;
  tittle: string;
  description: string;
  button: string;
  impact_statistic: ImpactStatistic[];
}