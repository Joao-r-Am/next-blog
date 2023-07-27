import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import {getSortedPostsData} from '../lib/posts'
import Link from 'next/link';
import Date from '../components/date'

export async function getServerSideProps() {
  const allPostsData = getSortedPostsData();
  return{
    props:{
      allPostsData
    }
  }
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Olá! Me chamo João Ricardo de Amorim, estudo programação e computação desde os 15 anos,
          possuo formação em análise e desenvolvimento de sistemas pela Universidade Tuiuti do Paraná.
          Já atuei como desenvolvedor fullstack Node.js. Sou um enstusiasta nas áreas de projetos
          open-source, InfoSec, e desenvolvimento de jogos.
        </p>

      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projetos</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
