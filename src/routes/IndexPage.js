import React from 'react';
import GitHup from './GitHup';
import Block from 'dxc-flex';
import Main from './Main/Main';
import Donation from './Donation/Donation';
import qqShare from 'qq-share';
qqShare({
  title: '身份证盗用所造成的损失，你想象不到！',
  desc: '这是一款最安全，最快速的纯前端图片加水印，拒绝上传保证个人信息安全。',
  imgUrl: 'https://oss.tuobacco.com/wop2/2018-06-01/5b10dde28a12d.jpg',
});
export default class IndexPage extends React.Component {
  render() {
    return (
      <div style={{ padding: '30px 15px' }}>
        <div style={{ textAlign: 'center', fontSize: 18, fontWeight: 700, marginBottom: 15 }}>
          无上传，纯前端图片加水印，拒绝上传保证个人信息安全。
        </div>
        <Main />
        <Block
          vertical='center'
          horizontal='center'
          style={{
            padding: '20px 0 0',
          }}>
          Developed by&nbsp;
          <a
            target='_blank'
            href='https://github.com/dxcweb/watermark'
            style={{ color: '#1890ff' }}>
            DXCWeb
          </a>
          , published by&nbsp;
          <a target='_blank' href='https://github.com/funnyzak/watermark' style={{ color: '#1890ff' }}>
            FunnyZak
          </a>
        </Block>
      </div>
    );
  }
}
