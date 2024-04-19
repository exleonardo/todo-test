import { selectTodolist } from '@/common/selectors/todoSelector'
import { TodoList } from '@/features/todo-list'
import { useAppSelector } from '@/utils/useAppSelector'

import styles from './container.module.scss'

export const Container = () => {
  const todoLists = useAppSelector(selectTodolist)

  return (
    <div className={styles.container}>
      {todoLists.map(el => {
        return <TodoList key={el.id} todolist={el} />
      })}
    </div>
  )
}
