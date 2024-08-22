import React from 'react'
import styles from './styles.module.css'

const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const Examples = {
  EC: ExampleComponent
}
