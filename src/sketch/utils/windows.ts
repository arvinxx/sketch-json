/**
 * 根据开发环境生成加载路径
 * @param win 窗口名称
*/
export const getWinURL = (win: string) => {
  const isDev = process.env.NODE_ENV === 'development';

  console.log(process.env.NODE_ENV);

  const devUrl = `http://localhost:8110/#/${win}.html`;
  const prodUrl = `../Resources/${win}.html`;

  return isDev ? devUrl : prodUrl;
};
