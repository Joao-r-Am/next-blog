import Layuot from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import Head from 'next/head';
import utilsStyles from '../../styles/utils.module.css'

export default function Post({postData}){
    return(
        <Layuot>
            <Head>
                {/* <title>{postData.title}</title> */}
            </Head>

            <article>
                <h1 className={utilsStyles.headingX1}>{postData.title}</h1>
                <div className={utilsStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
            </article>
        </Layuot>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return{
        paths,
        fallback: false,
    };
};

export async function getStaticProps({params}){
    const postData = await getPostData(params.id);
    return {
        props: {
            postData
        }
    }
}