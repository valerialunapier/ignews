import Head from 'next/head';
import Image from 'next/image';
import { SubscribeButton } from '../components/SubscribeButton';
import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles['content-container']}>
        <section className={styles['hero']}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for $9.90 month</span>
          </p>
          <SubscribeButton />
        </section>
        <Image src="/images/avatar.svg" width={300} height={520} alt="Garota codando" />
      </main>
    </>
  )
}
