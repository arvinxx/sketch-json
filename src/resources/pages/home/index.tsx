import React, { FC, useEffect } from 'react';
import { Descriptions, Typography } from 'antd';

import styles from './style.less';
import { useDispatch, useSelector } from 'dva';
import { ConnectState, GlobalModelState } from '@/models/connect';

const { Title } = Typography;
const { Item } = Descriptions;
const Panel: FC = () => {
  const dispatch = useDispatch();
  const global = useSelector<ConnectState, GlobalModelState>(
    (state) => state.global
  );
  useEffect(() => {}, []);
  const { sketch, plugin, env, platform } = global;

  return (
    <div className={styles.container}>
      <Title level={2} className={styles.title}>
        插件信息
      </Title>
      <Descriptions size={'small'}>
        <Item label={'环境'}>{env === 'prod' ? '正式版' : env}</Item>
        <Item label={'插件版本'}>{plugin}</Item>
        <Item label={'插件平台'}>{platform}</Item>
        <Item label={'Sketch 版本'}>{sketch}</Item>
      </Descriptions>
    </div>
  );
};

export default Panel;
