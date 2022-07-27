import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import styles from '../styles/NoEncontrado.module.css'

const NoEncontrado = () => {
  return (
    <Layout>
        <div className={styles.no_encontrado}>
            <h1 className='heading'>Pagina no Encontrada</h1>
            <Link href="/">Volver a Inicio</Link>

        </div>
    </Layout>
  )
}

export default NoEncontrado
