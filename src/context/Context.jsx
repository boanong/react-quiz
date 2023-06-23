import { createContext } from 'react';

const Questions = createContext();
const QuestionProvider = Questions.Provider;
const QuestionConsumer = Questions.Consumer;

export { QuestionProvider, QuestionConsumer, Questions };
