import styles from '../styles/Home.module.css';
import { Card, Space, Avatar, PageHeader, Col, Row, Statistic, Affix, Button, Tag, Divider, Badge} from 'antd';
import { WeiboOutlined, ZhihuOutlined, EllipsisOutlined } from '@ant-design/icons';
import Head from 'next/head';

const { Meta } = Card;

export default function more() {
    return (
        <div className={styles.morecard}>
            <PageHeader
                className="site-page-header"
                onBack={() => window.history.back()}
                title="More"
                subTitle="For more informations"
            />
            <div className={styles.container}>
            <Head>
        <title>Vince</title>
        <link rel="icon" href="/faviocn_mistyle.png" />
      </Head>
                <main className={styles.main}>
                    <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]} justify="center">
                        <Col>
                            <Card
                                style={{ width: 250 }}
                                cover={
                                    <img
                                        alt="blog"
                                        src="https://file.vince.pub/photo/site-0410/index.jpg"
                                    />
                                }
                                actions={[
                                    <a href="https://weibo.com/u/2422015477" target="_blank"><WeiboOutlined key="weibo" /></a>,
                                    <a href="https://www.zhihu.com/people/vince-best" target="_blank"><ZhihuOutlined key="zhihu" /></a>,,
                                    <a href="https://i.vince.pub/about/" target="_blank"><EllipsisOutlined key="ellipsis" /></a>,
                                ]}
                            >
                                <Meta
                                    avatar={<Avatar src="https://file.vince.pub/photo/i.jpg" />}
                                    title="Vince Ying"
                                    description="life(×),linux(×),love(×)"
                                />
                            </Card>
                        </Col>

                        <Col>
                            <a href="https://i.vince.pub/p/hexo-codespaces/" target="_blank">
                                <Card
                                    hoverable
                                    style={{ width: 320 }}
                                    cover={<img alt="example" src="https://file.vince.pub/photo/site-0410/background-AL.jpg" />}
                                >
                                    <Meta title="前端在线编辑博客，使用 Codespaces 搭建 Hexo 博客" description="LATEST POST" />
                                </Card>
                            </a>
                        </Col>

                        <Col>
                            <Space direction="vertical" size="lager">
                                <Card style={{ height: 140 }}>
                                    <Row gutter={16}>
                                        <Col span={12}>
                                            <Statistic title="FRIENDS" value={8} />
                                        </Col>
                                        <Col span={12}>
                                            <Statistic title="POST" value={14} />
                                        </Col>
                                    </Row>
                                    <h1>∞</h1>
                                </Card>

                                <Card style={{ height: 170 }}>
                                    <Divider>Status</Divider>
                                    <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
                                        <Button>🚧 Focusing</Button>
                                    </Affix><br></br>
                                    <Tag color="blue">Apple</Tag>
                                    <Tag color="volcano">Mi</Tag>
                                    <Tag color="purple">MicroSoft</Tag>
                                </Card>
                            </Space>
                        </Col>
                    </Row>
                </main>

            </div >

            <footer className={styles.footer}>
                <p>Vince Ying © 2020-2021</p>
            </footer>

        </div>
    )
}