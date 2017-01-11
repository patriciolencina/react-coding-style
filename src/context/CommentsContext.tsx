import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";
import { IComment, IAnswer } from "../utils/interfaces";

type ContextType = {
  nodeId: string | null;
  setNodeId: React.Dispatch<React.SetStateAction<string | null>>;
  comments: Array<IComment>;
  addComment: (text: string) => void;
  answers: Array<IAnswer>;
  addAnswer: (commentId: string, text: string) => void;
};

const defaultValue = {
  nodeId: null,
  setNodeId: () => {},
  comments: [],
  addComment: () => {},
  answers: [],
  addAnswer: () => {},
};

export const CommentsContext = React.createContext<ContextType>(defaultValue);

export const CommentsProvider: React.FC = ({ children }) => {
  const [nodeId, setNodeId] = useState<string | null>(null);

  const [comments, setComments] = useLocalStorage<IComment[]>("__comments__", []);
  const addComment = (text: string) => {
    if (nodeId) {
      setComments((prevComments) => [
        ...prevComments,
        {
          id: uuid(),
          nodeId,
          text,
          datetime: Date.now().toString(),
        },
      ]);
    }
  };

  const [answers, setAnswers] = useLocalStorage<IAnswer[]>("__answers__", []);
  const addAnswer = (commentId: string, text: string) => {
    if (nodeId) {
      setAnswers((prevComments) => [
        ...prevComments,
        {
          id: uuid(),
          commentId,
          text,
          datetime: Date.now().toString(),
        },
      ]);
    }
  };

  return (
    <CommentsContext.Provider value={{ nodeId, setNodeId, comments, addComment, answers, addAnswer }}>
      {children}
    </CommentsContext.Provider>
  );
};
