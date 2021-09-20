import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Row, Col, Button, notification, Divider } from 'antd';
import { UsergroupAddOutlined } from '@ant-design/icons'

const openNotification = () => {
  notification.open({
    message: '🤲 Follow Me',
    description:
      'I am Vince Ying with the ID vinceying. You may know me from GitHub & Zhihu or other places. Yes, those are also me. If you like to know more about me, please search it.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vince</title>
        <link rel="icon" href="/faviocn_mistyle.png" />
        <script async defer data-website-id="4484cb12-046e-4ecc-b137-e6ba84bba274" src="https://analyse.vince.pub/umami.js"></script>
      </Head>
      <Row>
        <Col span={24}>&nbsp;</Col>
      </Row>
      <img
        src="/faviocn_mistyle.png"
        alt="Picture of the author"
        width={150}
        height={150}
      />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi there! I'm Vince Ying 👋
        </h1>
        <br></br>
        <p className={styles.description}>
          🍻 Fun fact: five and fat{' '}
          <code className={styles.code}></code>
        </p>
        <Button shape="round" value="large" icon={<UsergroupAddOutlined />} onClick={openNotification}>
          Follow me
        </Button>
        <div className={styles.grid}>
          <a href="https://i.vince.pub" className={styles.card}>
            <h3>✏ Blog &rarr;</h3>
            <p>My thoughts on books, Learn about me in my blog. </p>
          </a>

          <a href="https://github.com/vinceying" className={styles.card}>
            <h3>👩‍💻 GitHub &rarr;</h3>
            <p>My GitHub,  A Programmer during the study.</p>
          </a>

          <a
            href="https://i.vince.pub/comment/"
            className={styles.card}
          >
            <h3>🍉 Contact &rarr;</h3>
            <p>How to reach me: @vince, Greet a friend from afar.</p>
          </a>

          <a
            href="/more"
            className={styles.card}
          >
            <h3>⚡ More &rarr;</h3>
            <p>Discover more information about me, Coming soon.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Vince Ying © 2020-2021</p>
      </footer>
    </div >

  )
}