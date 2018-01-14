import React, { Component } from 'react';
import classNames from "classnames/bind";
import styles from  './TodoItem.scss';
const cx = classNames.bind(styles);

class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }

  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;
    console.log(id);
    return (
      <div className={cx("todo-item")} onClick={() => onToggle(id)}>
        <div
          className={cx("remove")}
          onClick={e => {
            e.stopPropagation();
            onRemove(id);
          }}
        >
          &times;
        </div>
        <div className={cx(["todo-text", { checked: checked }])}>
          <div>{text}</div>
        </div>
        {checked && <div className={cx("check-mark")}>✓</div>}
      </div>
    );
  }
}

export default TodoItem;