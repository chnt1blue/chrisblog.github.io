import React, { useState } from "react";
import { Button, Input, List, Typography } from "antd";
import { useRequestAnswer } from "../../hooks";

const { TextArea } = Input;

const ChatGpt: React.FunctionComponent = () => {
  const [input, setInput] = useState("");
  const [key, setKey] = useState("");
  const [ask, result] = useRequestAnswer("你是一个友好的AI人工智能助手");
  return (
    <div className="chris-page-gpt">
      <div>Key</div>
      <TextArea
        rows={4}
        value={key}
        onChange={(e) => {
          setKey(e.target.value);
        }}
      />
      <div>Question</div>
      <TextArea
        rows={4}
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          ask(input, key).then(
            (v) => {
              console.log(v);
            },
            () => {}
          );
        }}
      >
        Ask
      </Button>
      <List
        bordered
        dataSource={result}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark>{`[${item.role}]`}</Typography.Text>
            {item.content}
          </List.Item>
        )}
      />
    </div>
  );
};

export default ChatGpt;
