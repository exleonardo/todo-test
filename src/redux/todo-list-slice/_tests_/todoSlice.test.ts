import { Todolist } from '@/types/todo-list/type'
import { describe, expect, test } from 'vitest'

import { todosActions } from '../todoSlice'

describe('todosActions', () => {
  test('should create an action to add a todolist', () => {
    const todolist: Todolist = { filter: 'all', id: '1', title: 'Todo List' }
    const expectedAction = {
      payload: todolist,
      type: 'todolist/addTodolist',
    }

    expect(todosActions.addTodolist(todolist)).toEqual(expectedAction)
  })

  test('should create an action to change the filter of a todolist', () => {
    const filter = 'completed'
    const id = '1'
    const expectedAction = {
      payload: { filter, id },
      type: 'todolist/changeTodolistFilter',
    }

    expect(
      todosActions.changeTodolistFilter({
        filter,
        id,
      })
    ).toEqual(expectedAction)
  })

  test('should create an action to change the title of a todolist', () => {
    const title = 'Updated Todo List'
    const todolistId = '1'
    const expectedAction = {
      payload: { title, todolistId },
      type: 'todolist/changeTodolistTitle',
    }

    expect(
      todosActions.changeTodolistTitle({
        title,
        todolistId,
      })
    ).toEqual(expectedAction)
  })

  test('should create an action to remove a todolist', () => {
    const id = '1'
    const expectedAction = {
      payload: { id },
      type: 'todolist/removeTodolist',
    }

    expect(todosActions.removeTodolist({ id })).toEqual(expectedAction)
  })
})
