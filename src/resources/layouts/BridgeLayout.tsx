import React, { FC, useEffect } from 'react';
import onReceiveEndMsg from '../services/onReceiveEndMsg';
import { useDispatch } from 'dva';

declare global {
  interface Window {
    onReceiveEndMsg: any;
  }
}

const BridgeLayout: FC = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('[BridgeLayout]加载完毕');
    window.onReceiveEndMsg = onReceiveEndMsg(dispatch);
  }, []);

  return <>{children}</>;
};

export default BridgeLayout;
