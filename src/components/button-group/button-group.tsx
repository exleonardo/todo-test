import { useButtonGroup } from '@/components/button-group/hook/useButtonGroup'
import { Button } from '@/components/ui/button/button'
import clsx from 'clsx'

import styles from './button-group.module.scss'

type Props = {
  id: string
}

export const ButtonGroup = ({ id }: Props) => {
  const { activeButton, taskFilter } = useButtonGroup({ id })

  const all = clsx(activeButton?.filter === 'all' ? styles.active : styles.buttonAll)
  const active = clsx(activeButton?.filter === 'active' ? styles.active : styles.buttonActive)

  const completed = clsx(
    activeButton?.filter === 'completed' ? styles.active : styles.buttonComplete
  )

  return (
    <div className={styles.buttonGroup}>
      <Button className={all} onClick={() => taskFilter('all')} title={'All'} />
      <Button className={active} onClick={() => taskFilter('active')} title={'Active'} />
      <Button className={completed} onClick={() => taskFilter('completed')} title={'Completed'} />
    </div>
  )
}
