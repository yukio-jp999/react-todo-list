import React from "react";
import { useState } from "react";
import "./styles.css";

export const App = () => {
  // 未完了のTODOを格納する配列
  const [incompleteTodos, setIncompleteTodos] = useState([
    "あああああ",
    "いいいいいい"
  ]);

  const [completeTodos, setCompleteTodos] = useState(["ううううう"]);

  const [todoText, setTodoText] = useState("");

  const onChangeTodoText = (event) => {






  }

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" value={todoText} onChange=()/>
        <button>追加</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了済のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
