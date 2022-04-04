import Head from 'next/head'
import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getMenu } from '../lib/api'
import { CMS_NAME } from '../lib/constants'

export default function Index({menuItems}) {
menuItems.map((item) => (
  console.log(item)
))
  return (
    <>
      <Layout menuItems={menuItems}>
        <Head>
          <title>Diglita.lt</title>
        </Head>

        <Container>

        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const menuItems = await getMenu();

  return {
    props: { menuItems },
  }
}



// {navigation.map((item) => (
//   <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
//     {item.name}
//   </a>
// ))}