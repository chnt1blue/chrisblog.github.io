import axios from "axios";
import _ from "lodash";
import { useState } from "react";

export const useRequestAnswer = (): [
  (question: string, key: string) => Promise<{ returnValue: string }>,
  {
    role: string;
    content: string;
  }[]
] => {
  const question = "Good morning, your highness.";
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    [
      {
        role: "system",
        content:
          "You will act a princess from the Middle Age called Mirana .The user is your handmaid, the user will serve you, so you should act as a princess",
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
      _.map(data["choices"], (v, i) => {
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
