
import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
      <Layout
        pagina = 'nosotros'
      >
        <main className='contenedor'>
          <h2 className='heading'>Nosotros</h2>
          
          <div className={styles.contenido}>
            <Image 
              layout='responsive'
              width={600}
              height={450}
              src="/img/nosotros.jpg"
              alt="Imagen sobre nosotros"
            />
            <div>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis vel massa a gravida. Sed nibh quam, laoreet sed ex vel, euismod mattis ligula. Ut imperdiet consequat ipsum, ut varius tortor convallis id. Fusce finibus nisl quis felis posuere gravida. Vestibulum pretium, eros ac auctor ornare, felis libero varius nibh, vitae porta enim tortor vitae lacus. Sed cursus ipsum consequat ante maximus, et dapibus nunc facilisis. Suspendisse dictum mollis elit et ornare. Integer bibendum mollis interdum. Suspendisse lacinia dignissim egestas. Nam accumsan sem elit, nec malesuada nisi viverra eu. Morbi volutpat tincidunt faucibus. Nullam magna elit, malesuada sit amet odio eget, luctus porta turpis.
              </p>
              <p>
              Pellentesque non efficitur nibh. Pellentesque eget consectetur dolor, in dapibus lectus. Proin tincidunt massa non tincidunt eleifend. Praesent et urna id lorem euismod dapibus. Donec scelerisque vulputate arcu, eu elementum justo semper ac. Praesent at consectetur velit. Integer ullamcorper ullamcorper mauris vel ultrices. Phasellus dolor augue, condimentum id rutrum vel, congue rhoncus elit. Aenean ac convallis lacus.
              </p>
            </div>
          </div>
        </main>
      </Layout>
      
  )
}

export default Nosotros


