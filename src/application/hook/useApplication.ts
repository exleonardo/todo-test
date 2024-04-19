import { useDispatch } from 'react-redux'

import { todosActions } from '@/redux/todo-list-slice/todoSlice'
import { AppDispatch } from '@/types/app/type'
import { v1 } from 'uuid'

export const useApplication = () => {
  const dispatch = useDispatch<AppDispatch>()

  const addTodosHandler = (title: string) => {
    dispatch(todosActions.addTodolist({ filter: 'all', id: v1(), title }))
  }

  return {
    addTodosHandler,
  }
}
