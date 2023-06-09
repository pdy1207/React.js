// 컴포넌트 페이지는 첫글자가 대문자로...

import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, increase } from "../store/userSlice.js";
import { increase2 } from "../store.js";
import { memo, useMemo, useState } from "react";

let Child = memo(function () {
  console.log("재랜더링");
  return <div>자식임</div>;
});

function Cart() {
  let a = useSelector((state) => state.user);
  let dispatch = useDispatch();
  let [count, setCount] = useState(0);
  console.log(a);

  let cark = useSelector((state) => state.cark);

  return (
    <div>
      <Child></Child>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      {a.name}의 장바구니
      {a.age}나이
      <button
        onClick={() => {
          dispatch(increase(10000));
        }}
      >
        버튼
      </button>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>COUNT</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {cark.map((a, i) => {
            return (
              <tr key={i}>
                <td>{cark[i].id} </td>
                <td>{cark[i].name}</td>
                <td>{cark[i].count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(increase2(i));
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;

/* 
<thead> 제목 뭐 등... 
*/
/* 
<tbody> 본문
*/
{
  /* 하도 햇갈리니 tr : 가로칸  */
}
{
  /* th / td 넣으면 열이 생긴다! */
}
