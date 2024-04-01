import React, { useEffect, useState } from 'react';

const ChatGPT = ({ request, content, setAnswer, sendRequest }) => {
  const [responses, setResponses] = useState([]);
  const [waiting, setWaiting] = useState(false);
  useEffect(() => {
    // const inputText = JSON.stringify(content);
    console.log(content);
    if (content && sendRequest) {
      Promise.all(
        content.map((inputText) => {
          // Chắc chắn trả về promise từ mỗi lần lặp
          return sendMessage(JSON.stringify(inputText)).then((response) => {
            return response;
          });
        })
      ).then((responses) => {
        setAnswer(responses);
      });
    }
  }, [request, content, sendRequest]);

  const sendMessage = async (inputText) => {
    if (!inputText.trim()) return;

    try {
      const response = await fetch(
        'https://api.chatanywhere.cn/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer sk-ASMcBs6iBFaFfCxCizltjPPGTLCkB9tyESkmxxsQb9Tie4Fx'
            // 'Bearer sk-idLv1WJ8H0Xec0FjTujkzGClFhuOLvUcVw7FJBA0ERBhN8Y2' //free
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo', // Chọn mô hình ChatGPT bạn muốn sử dụng
            messages: [
              {
                role: 'system',
                content: request
              },
              { role: 'user', content: inputText }
            ],
            // max_tokens: 100,'
            temperature: 0,
            top_p: 0,
            presence_penalty: 1,
            frequency_penalty: 0.7
            // stream: true
          })
        }
      );

      const data = await response.json();
      console.log('data', data);
      return data?.choices?.[0]?.message?.content;
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setWaiting(false);
    }
  };

  // Trả về null hoặc không trả về gì cả vì không có phần tử DOM nào cần thiết
  return null;
};

export default ChatGPT;
