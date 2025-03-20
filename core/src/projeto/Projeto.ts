import type { Tecnologia } from '../tecnologias/Tecnologia'
import type { Nivel } from './Nivel'
import type { Tipo } from './Tipo'

export interface Projeto {
  id: number
  nome: string
  descricao: string
  imagens: string
  tipo: Tipo
  nivel: Nivel
  repositorio: string
  destaque: boolean
  tecnologias: Tecnologia[]
}
