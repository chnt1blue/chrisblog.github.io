import React, { useState } from "react";
import { Button, Input, List, Typography } from "antd";
import { useRequestAnswer } from "../components/chatgpt/requestAnswer";

const { TextArea } = Input;

const Gpt: React.FunctionComponent = () => {
  const [input, setInput] = useState("");
  const [key, setKey] = useState("");
  const [requestAnswer, result] = useRequestAnswer();
  return (
    <div>
      <nav>
        <ul>
          <li>Home1</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="content">
        Key
        <TextArea
          rows={4}
          value={key}
          onChange={(e) => {
            setKey(e.target.value);
          }}
        />
        Question
        <TextArea
          rows={4}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            requestAnswer(input, key).then(
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
    </div>
  );
};

export default Gpt;
