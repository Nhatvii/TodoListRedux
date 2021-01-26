import React, { useState } from "react";
import { Input, Switch } from "antd";
import { EditOutlined, CloseCircleOutlined } from "@ant-design/icons";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./List.css";

export default function List(props) {
  const { text, id, isDone, onUpdate, onDelete, setIsDone } = props;
  const [title, settitle] = useState("");
  const handlekeyDown = (event) => {
    if (event.key === "Enter" || event.keyCode === 13) {
      onUpdate(id, title);
    }
  };

  return (
    <div class="list-info">
      <Input
        value={text}
      ></Input>
      <Switch
        onChange={(checked) => setIsDone(checked, id)} checked={isDone}
      />
      <CloseCircleOutlined
        type="danger"
        shape="circle"
        onClick={() => onDelete(id)}
      >
        X
      </CloseCircleOutlined>
      <Popup
        trigger={<EditOutlined></EditOutlined>}
        position="right center"
      >
        <input
          value={title}
          onChange={(event) => settitle(event.target.value)}
          onKeyDown={handlekeyDown}
          style={{width:'100%', outline:'none', border:'none'}}
        />
      </Popup>
    </div>
  );
}
