import Link from "next/link"
import styles from '../styles/Header.module.css'
import Image from "next/image"
import { useRouter} from 'next/router'

const Header = ({guitarra}) => {
  const router = useRouter();
  return (
    <header className={styles.header}>
        <div className="contenedor">
           <div className={styles.barra}>
                <Link href="/">
                  <a>
                    <Image 
                        src="/img/logo.svg" 
                        width={400}
                        height={100}
                        alt="Imagen Logo"
                    />
                  </a>
                </Link>

                <nav className={styles.navegacion}>
                    <Link href="/">Inicio</Link>
                    <Link href="/nosotros">Nosotros</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/tienda">Tienda</Link>
                    <Link href="/carrito">
                      <a>
                        <Image 
                          layout="fixed" 
                          width={30} 
                          height={25} 
                          src="/img/carrito.png"
                          alt="Imagen carrito" />
                      </a>
                    </Link>
                </nav>
           </div>

           {guitarra && (
              <div className={styles.modelo}>
                <h2>Modelo {guitarra.nombre}</h2> 
                <p>{guitarra.descripcion}</p>
                <p className={styles.precio}>${guitarra.precio}</p>
                <Link href={`/guitarras/${guitarra.url}`}>
                  <a className={styles.enlace}>
                    Ver Producto
                  </a>
                </Link>
              </div>
           )}
        </div>

        {router.pathname === '/' && (
            <img className={styles.guitarra} src='/img/header_guitarra.png' alt="imagen header guitarra"/>
        )}
    </header>
  )
}

export default Header
