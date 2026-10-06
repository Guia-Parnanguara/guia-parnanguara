import { request } from './api';
import { Local } from '../types/local';

export type { Local };

export async function listarLocais(): Promise<Local[]> {
  const locais = await request<Local[] | null>('/v1/locais/');
  return locais ?? [];
}
