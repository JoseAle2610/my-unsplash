import styles from './container.module.css'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode;
};

export default function Container (props: Props) {
  const { children } = props
  return <div className={styles.container}>
    {children}
  </div>
}
