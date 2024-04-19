export type Todolist = {
  filter: FilterValues
  id: string
  title: string
}

export type FilterValues = 'active' | 'all' | 'completed'
