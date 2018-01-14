import React from 'react';
import logo from "../../images/logo-lg.png";
import classNames from "classnames/bind";
import styles from "./TodoListTemplate.scss";

const cx = classNames.bind(styles);


const TodoListTemplate = ({form, children}) => {
  return (
    <main className={cx("todo-list-template")}>
      <div className={cx("title")}>
        <div className={cx("todo-list-title-logo")}><img src={logo} alt="title-logo"/></div>
        <div className={cx("todo-list-title-text")}>Wabi's Todo List</div>
      </div>
      <section className={cx("form-wrapper")}>
        {form}
      </section>
      <section className={cx("todos-wrapper")}>
        { children }
      </section>
    </main>
  );
};

export default TodoListTemplate;