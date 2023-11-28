// <방법2> 매개변수로 props를 받아올 때부터 구조 분해

// function FuncPropsEx({ title, content }) {
//   return (
//     <>
//       <div>함수형 컴포넌트를 이용하여 ( Props )</div>
//       <div>
//         제목은 {title}, 내용은 {content} ( Props )
//       </div>
//     </>
//   );
// }

// <방법3>

// function FuncPropsEx(props) {
//   const { title, content } = props;
//   return (
//     <>
//       <div>함수형 컴포넌트를 이용하여 ( Props )</div>
//       <div>
//         제목은 {title}, 내용은 {content}
//       </div>
//     </>
//   );
// }

// <방법1>

// function FuncPropsEx(props) {
//     props = {
//       title: 'SeSAC',
//       content: 'hello world',
//     };
//     return (
//       <>
//         <div>함수형 컴포넌트를 이용하여 ( Props )</div>
//         <div>
//           제목은 {props.title}, 내용은 {props.content} ( Props )
//         </div>
//       </>
//     );
//   }

// <방법4> prototype을 이용해서 어떤 props가 넘어올지 명시 방법
// 유연한 js의 특징으로 인해 예기치 못한 오류가 발생
import PropTypes from 'prop-types';

function FuncPropsEx({ title, content, number }) {
  return (
    <>
      <div>함수형 컴포넌트를 이용하여 ( Props )</div>
      <div>
        제목은 {title}, 내용은 {content}, 숫자는:{number}
      </div>
    </>
  );
}

FuncPropsEx.defaultProps = {
  title: '코딩온',
};

FuncPropsEx.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string.isRequired,
  number: PropTypes.number,
};

export default FuncPropsEx;
