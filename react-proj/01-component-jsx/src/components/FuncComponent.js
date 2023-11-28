import React from 'react';

function FunctionComponent() {
  const text = 'hello?';
  const name = 'richard';

  const ifRenderTest = () => {
    if (name === 'lily') {
      return '안녕하세요!';
    } else if (name === 'richard') {
      return '안녕하세요...';
    } else {
      return '누구세요';
    }
  };

  return (
    <>
      {/* 1. 하나의 태그로 감싸서 return */}
      <div>함수형 컴포넌트입니다.</div>
      <div>함수형 컴포넌트입니다.</div>
      {/* 2. JS 문법 사용 가능 */}
      <h3>코딩온 {text}</h3>
      {/* 3. js문법 사용 가능(삼항 연산자를 조건에 따른 렌더링(간단) */}
      <h4>{name === 'lily' ? '안녕하셈!' : '누구세요?'}</h4>
      {/* 3-1. 복잡한 조건을 사용하고 싶다면 -> 위에서 함수로 만들어 사용 */}
      <h4>{ifRenderTest()}</h4>
      {/* 3-2. 조건에 따른 렌더링 ( && ) */}
      <h5>{name === 'richard' && '안녕하세요!'}</h5>
      {/* 4. inline style 적용 방법 -> style 속성값으로 객체 전달 */}
      <div style={{ fontSize: '20px', color: 'red' }}>hello</div>
      {/* 4. class와 onclick을 jsx에서 사용하기 */}
      {/* <div class에서 onclick함수 원래 html에서 하던 방식 */}
      <div className="test-css">JSX에서 CSS 사용하기 (className)</div>
      {/* html에서는 함수를 "호출", jsx에는 함수를 "선언" */}
      <button
        onClick={() => {
          console.log('hello');
        }}
      >
        버튼
      </button>

      {/* 5. 종료 태그 필수! */}
      <br />
      {/* / 경로가 public폴더 안이다. */}
      <img src="/logo192.png" />
      {/* src 내부의 이미지 사용할 경우 -> 위에서 이미지를 import 해오기
    <img src={image}/> */}
    </>
  );
}

export default FunctionComponent;
