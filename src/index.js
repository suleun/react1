import React from 'react';
import ReactDOM from 'react-dom';


const page = (
  <div>
    <h1>리액트로 만든 나의 멋진 웹사이트 </h1>
    <h3>이유는 내가 리액트를 좋아 하니까</h3>
    <ol>
      <li>composable</li>
      <li>declarative</li>
      <li>hireable skill</li>
      <li>actively</li>
    </ol>
  </div>
)

ReactDOM.render(page, document.getElementById("root"))