import styles from '../styles/Home.module.css';
import { Card, Space, Avatar, PageHeader, Col, Row, Statistic, Affix, Button, Tag, Divider } from 'antd';
import { WeiboOutlined, ZhihuOutlined, EllipsisOutlined } from '@ant-design/icons';
import Head from 'next/head';
import React, { useState } from 'react';

const { Meta } = Card;

export default function more() {
    const [size, setSize] = useState(8);
    return (
        <div className={styles.morecard}>
            <PageHeader
                className="site-page-header"
                onBack={() => window.history.back()}
                title="More"
                subTitle="For more information"
            />
            <div className={styles.container}>
                <Head>
                    <title>More</title>
                    <link rel="icon" href="/faviocn_mistyle.png" />
                    <script async defer data-website-id="4484cb12-046e-4ecc-b137-e6ba84bba274" src="https://analyse.vince.pub/umami.js"></script>
                </Head>
                <main className={styles.main}>
                    <div className={styles.PCPage}>
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
                                        <a href="https://www.zhihu.com/people/vince-best" target="_blank"><ZhihuOutlined key="zhihu" /></a>, ,
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
                                        <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
                                            <Button>🚧 Focusing</Button>
                                        </Affix><br />
                                        <Space direction="vertical" size="small">
                                            <Space size={size}>
                                                <img src="https://img.shields.io/badge/dynamic/json?label=Zhihu&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dzhihu%26queryKey%3Dvince-best&style=for-the-badge" alt="zhihu" />
                                                <img src="https://img.shields.io/badge/dynamic/json?color=4682B4&label=GitHub&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dgithub%26queryKey%3Dvinceying&style=for-the-badge" alt="github" />
                                            </Space>
                                            <img src="https://img.shields.io/badge/dynamic/json?color=da282a&label=Weibo&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dweibo%26queryKey%3D2422015477&style=for-the-badge" alt="weibo" />
                                        </Space>
                                    </Card>
                                </Space>
                            </Col>
                        </Row>
                    </div>

                    <div className={styles.MobilePage}>
                        <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]} justify="center">
                            <Col>
                                <Card
                                    style={{ width: 300 }}
                                    cover={
                                        <img
                                            alt="blog"
                                            src="https://file.vince.pub/photo/site-0410/index.jpg"
                                        />
                                    }
                                    actions={[
                                        <a href="https://weibo.com/u/2422015477" target="_blank"><WeiboOutlined key="weibo" /></a>,
                                        <a href="https://www.zhihu.com/people/vince-best" target="_blank"><ZhihuOutlined key="zhihu" /></a>, ,
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
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src="https://file.vince.pub/photo/site-0410/background-AL.jpg" />}
                                    >
                                        <Meta title="前端在线编辑博客，使用 Codespaces 搭建 Hexo 博客" description="LATEST POST" />
                                    </Card>
                                </a>
                            </Col>

                            <Col>
                                <Space direction="vertical" size="lager">
                                    <Card style={{ width: 300 }}>
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
                                        <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
                                            <Button>🚧 Focusing</Button>
                                        </Affix><br />
                                        <Space direction="vertical" size="small">
                                            <Space size={size}>
                                                <img src="https://img.shields.io/badge/dynamic/json?label=Zhihu&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dzhihu%26queryKey%3Dvince-best&style=for-the-badge" alt="zhihu" />
                                                <img src="https://img.shields.io/badge/dynamic/json?color=4682B4&label=GitHub&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dgithub%26queryKey%3Dvinceying&style=for-the-badge" alt="github" />
                                            </Space>
                                            <img src="https://img.shields.io/badge/dynamic/json?color=da282a&label=Weibo&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dweibo%26queryKey%3D2422015477&style=for-the-badge" alt="weibo" />
                                        </Space>
                                    </Card>
                                </Space>
                            </Col>
                        </Row>
                    </div>
                </main>

            </div >

            <footer className={styles.footer}>
                <p>Vince Ying © 2020-2021</p>
            </footer>

        </div>
    )
}