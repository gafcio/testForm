import { Coordinator } from './coordinator';

export interface Form {
  title: string;
  description: string;
  category_id: number;
  paid_event: boolean;
  event_fee: number;
  reward: number;
  date: string;
  duration: number;
  coordinator: Coordinator;
}

