import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: <a href="./docs/mycareer/contents#mycareer-mbd-window" target="_blank" rel="noopener noreferrer">윈도우 모델기반설계<br/>[☜ click for more]</a>,
    Svg: require('../../static/img/second_motor_control_wiper_window.svg').default,
    description: (
      <>
        제어로직 SW MBD개발<br />
        RCP를 통한 SW검증<br />
        <code><a href="https://www.mathworks.com/content/dam/mathworks/mathworks-dot-com/company/events/conferences/matlab-conference-australia/2016/proceedings/design-with-simulation-in-simulink.pdf" target="_blank" rel="noopener noreferrer">MBD?</a></code>&emsp;
        <code><a href="https://kr.mathworks.com/videos/run-models-interactively-on-arduino-and-raspberry-pi-1549462466264.html" target="_blank" rel="noopener noreferrer">RCP?</a></code>
      </>
    ),
  },
  {
    title: <a href="./docs/mycareer/contents#process-dev" target="_blank" rel="noopener noreferrer">GitHub 개발프로세스<br/>[☜ click for more]</a>,
    Svg: require('../../static/img/firstpage_DevProcess_black.svg').default,
    description: (
      <>
        MBD 프로젝트 관리<br />
        Agile-GitHub 프로젝트 관리<br />
        <code><a href="https://hackersstudy.tistory.com/35" target="_blank" rel="noopener noreferrer">Redmine?</a></code>&emsp;
        <code><a href="https://gmlwjd9405.github.io/2018/05/26/what-is-agile.html" target="_blank" rel="noopener noreferrer">Agile?</a></code>&emsp;
        <code><a href="https://www.itworld.co.kr/news/232234" target="_blank" rel="noopener noreferrer">Why Agile?</a></code>
      </>
    ),
  },
  {
    title: <a href="./docs/mycareer/contents#mycareer-embed-train" target="_blank" rel="noopener noreferrer">열차출입문제어기 개발<br/>[☜ click for more]</a>,
    Svg: require('../../static/img/third_train_door_controller.svg').default,
    description: (
      <>
        RTOS 소프트웨어 개발<br />
        이중화 제어기 설계<br />
        <code><a href="https://www.freertos.org/" target="_blank" rel="noopener noreferrer">RTOS?</a></code>&emsp;
        <code><a href="https://patentimages.storage.googleapis.com/77/7c/a5/d4f9b351104eff/KR101490022B1.pdf" target="_blank" rel="noopener noreferrer">이중화설계?</a></code>
      </>
    ),
  },
  {
    title: <a href="./docs/mycareer/contents#mycareer-embed-fota" target="_blank" rel="noopener noreferrer">임베디드 웹서버 OTA<br/>[☜ click for more]</a>,
    Svg: require('../../static/img/fourth-wifi-ota.svg').default,
    description: (
      <>
        Embedded WebServer 개발<br />
        OTA 펌웨어 업데이트<br />
        <code><a href="https://realtimelogic.com/articles/Embedded-Web-Server-Tutorials" target="_blank" rel="noopener noreferrer">WebServer?</a></code>&emsp;
        <code><a href="https://www.elec4.co.kr/article/articleView.asp?idx=18469" target="_blank" rel="noopener noreferrer">OTA?</a></code>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
