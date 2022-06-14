import "../styles/globals.css";
/*

  컴포넌트 마다 페이지 렌더는 여기서 발생..
  _app은 서버로 요청이 들어왔을 때 가장 먼저 실행되는 컴포넌트로, 페이지에 적용할 공통 레이아웃의 역할을 합니다.

  주요 사용 목적
  모든 컴포넌트에 공통으로 적용할 속성 관리 

  _document는 언제나 서버에서 실행되므로 브라우저 api 또는 이벤트 핸들러가 포함된 코드는 실행되지 않습니다.
*/

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
