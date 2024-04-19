import { selectorTodolists } from '@/components/button-group/selectors/todo-active-filter-selector'
import { todosActions } from '@/redux/todo-list-slice/todoSlice'
import { FilterValues } from '@/types/todo-list/type'
import { useAppDispatch } from '@/utils/useAppDispatch'
import { useAppSelector } from '@/utils/useAppSelector'

type Props = {
  id: string
}

export const useButtonGroup = ({ id }: Props) => {
  const dispatch = useAppDispatch()
  const activeFilter = useAppSelector(selectorTodolists)
  const activeButton = activeFilter.find(el => el.id === id)
  const taskFilter = (filter: FilterValues) => {
    dispatch(todosActions.changeTodolistFilter({ filter, id }))
  }

  return { activeButton, taskFilter }
}
