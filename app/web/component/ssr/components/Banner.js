import React from 'react';
import GitHubButton from 'react-github-button';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Carousel, Button } from 'antd';

export default function Banner(props) {
  return (
    <div className="banner-wrapper">
      {props.isMobile && (
        <TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
          <div className="home-banner-image" style={{ display: 'none' }}>
            <img
              alt="banner"
              src="https://gw.alipayobjects.com/zos/rmsportal/rqKQOpnMxeJKngVvulsF.svg"
              width="100%"
            />
          </div>
        </TweenOne>
      )}
      <QueueAnim
        className="banner-title-wrapper"
        type={props.isMobile ? 'bottom' : 'right'}
      >
        <div key="line" className="title-line-wrapper">
          <div
            className="title-line"
            style={{ transform: 'translateX(-64px)' }}
          />
        </div>
        <h1 key="h1">TomatoBang</h1>
        <p key="content">For your better life and work!</p>
        <div key="button" className="button-wrapper">
          <a
            href="https://github.com/tomatobang/tomato-ionic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button type="primary">>> see at Github</Button>
          </a>
          <div>
            <GitHubButton
              key="github-button"
              type="stargazers"
              namespace="tomatobang"
              repo="tomato-ionic"
            />
          </div>
        </div>
      </QueueAnim>
      {!props.isMobile && (
        <TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
          <BannerSVGAnim />
        </TweenOne>
      )}
      <Carousel horizontal="true" className="tomatobang-carousel" autoplay>
        <div>
          <img alt="banner" src={require('asset/images/banner/tab1.png')} />
        </div>
        <div>
          <img alt="banner" src={require('asset/images/banner/tab2.png')} />
        </div>
        <div>
          <img alt="banner" src={require('asset/images/banner/tab3-1.png')} />
        </div>
        <div>
          <img alt="banner" src={require('asset/images/banner/tab4.png')} />
        </div>
      </Carousel>
    </div>
  );
}
