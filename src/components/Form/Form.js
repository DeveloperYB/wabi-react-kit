import React from "react";
import classNames from "classnames/bind";
import styles from "./Form.scss";
const cx = classNames.bind(styles);


const Form = ({ value, onChange, onCreate, onKeyPress }) => {
  return (
    <div className={cx("form")}>
      <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
      <div className={cx("create-button")} onClick={onCreate}>
        추가
      </div>
    </div>
  );
};

export default Form;
