import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import Image from 'next/image'
import { formatearFecha } from '../../helpers'
import styles from '../../styles/Entrada.module.css'

const EntradaBlog = ({entrada}) => {
    console.log(entrada)
    const router = useRouter()

    const {contenido, imagen, published_at, titulo} = entrada

  return (
      <Layout pagina={titulo}>
            <main className='contenedor'>
                <h1 className='heading'>{titulo}</h1>

                <article className={styles.entrada}>
                    <Image layout='responsive' width={800} height={600} 
                    src={`http://localhost:1337${imagen.url}`} alt={`Imagen entrada ${titulo}`} />

                    <div className={styles.contenido}>
                        <p className={styles.fecha}>{formatearFecha(published_at)}</p>

                        <p className={styles.texto}>{contenido}</p>
                    </div>
                </article>
            </main>
      </Layout>
  )
}

export async function getServerSideProps({query : {url}}){
    const link = `${process.env.API_URL}/blogs?url=${url}`
    const respuesta = await(fetch(link))
    const entrada = await respuesta.json()

    return {
        props: {
            entrada: entrada[0]
        }
    }
}

export default EntradaBlog
