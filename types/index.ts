export interface Issue {
  number: number;
  name: string;
  releaseDate: string;       // Próximo número
  lastReleaseDate?: string;  // Último número lanzado (opcional)
  authors?: string[];
  synopsis?: string;
}

export interface EventData {
  id: number;
  title: string;
  coverImage: string;
  issues: Issue[];
  
}
