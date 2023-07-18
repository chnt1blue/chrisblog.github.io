import axios from "axios";
import _ from "lodash";
import { useState } from "react";

const useRequestAnswer = (
  system: string
): [
  (question: string, key: string) => Promise<{ returnValue: string }>,
  {
    role: string;
    content: string;
  }[]
] => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    [
      {
        role: "system",
        content: system,
      },
    ]
  );
  const ask = async (question: string, apiKey: string) => {
    const newInput = {
      role: "user",
      content: question,
    };
    setMessages((prev) => {
      return [...prev, newInput];
    });
    const { data } = await axios({
      method: "post",
      url: "https://api.openai.com/v1/chat/completions",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      data: {
        model: "gpt-3.5-turbo",
        messages: messages,
      },
    });
    console.log(data);
    const returnValue = _.join(
      _.map(data["choices"], (v, _i) => {
        return _.get(v, ["message", "content"]);
      }),
      ","
    );
    setMessages((prev) => {
      return [
        ...prev,
        {
          role: "assistant",
          content: returnValue,
        },
      ];
    });
    return { returnValue };
  };

  return [ask, messages];
};

export default useRequestAnswer;
