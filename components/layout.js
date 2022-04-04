import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import Hero from '../components/hero'


export default function Layout({ menuItems, preview, children }) {
  return (
    <>
      <Meta />
      <Hero menuItems={menuItems}/>
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
