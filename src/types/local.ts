export interface CategoriaLocal {
  id: number;
  titulo: string;
  tipo: string;
  ativo: boolean;
  criado_em: string;
  atualizado_em: string;
}

export interface ImagemLocal {
  id: number;
  imagem_url: string;
  imagem_capa: boolean;
  criado_em: string;
}

export interface Local {
  id: number;
  nome: string;
  descricao: string;
  endereco: string;
  latitude: string;
  longitude: string;
  ativo: boolean;
  valor_entrada: string;
  categorias: CategoriaLocal[];
  imagens: ImagemLocal[];
  criado_em: string;
  atualizado_em: string;
  horario_abertura: string;
  horario_fechamento: string;
}
