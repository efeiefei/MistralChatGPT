import { v4 as uuidv4 } from 'uuid';
import { ChatInterface, ConfigInterface, ModelOptions } from '@type/chat';
import useStore from '@store/store';

const date = new Date();
const dateString =
  date.getFullYear() +
  '-' +
  ('0' + (date.getMonth() + 1)).slice(-2) +
  '-' +
  ('0' + date.getDate()).slice(-2);

// default system message obtained using the following method: https://twitter.com/DeminDimin/status/1619935545144279040
export const _defaultSystemMessage =
  import.meta.env.VITE_DEFAULT_SYSTEM_MESSAGE ??
  `You are MistralAI, a large language model trained by Mistral..
Carefully heed the user's instructions. 
Respond using Markdown.`;

export const modelOptions: ModelOptions[] = [
  'open-mistral-7b',
  'open-mixtral-8x7b',
  'mistral-small-latest',
  'mistral-medium-latest',
  'mistral-large-latest'
];

export const defaultModel = 'mistral-small-latest';

export const modelMaxToken = {
  'open-mistral-7b': 16384,
  'open-mixtral-8x7b': 16384,
  'mistral-small-latest': 32768,
  'mistral-medium-latest': 32768,
  'mistral-large-latest': 32768
};

export const modelCost = {
  'open-mistral-7b': {
    prompt: { price: 0.00025, unit: 1000 },
    completion: {price: 0.00025, unit: 1000}
  },
  'open-mixtral-8x7b': {
    prompt: { price: 0.0007, unit: 1000 },
    completion: {price: 0.0007, unit: 1000}
  },
  'mistral-small-latest': {
    prompt: { price: 0.002, unit: 1000 },
    completion: {price: 0.006, unit: 1000}
  },
  'mistral-medium-latest': {
    prompt: { price: 0.0027, unit: 1000 },
    completion: {price: 0.0081, unit: 1000}
  },
  'mistral-large-latest' : {
    prompt: { price: 0.008, unit: 1000 },
    completion: {price: 0.024, unit: 1000}
  },
};

export const defaultUserMaxToken = 8192;

export const _defaultChatConfig: ConfigInterface = {
  model: defaultModel,
  max_tokens: defaultUserMaxToken,
  temperature: 1,
  top_p: 1
};

export const generateDefaultChat = (
  title?: string,
  folder?: string
): ChatInterface => ({
  id: uuidv4(),
  title: title ? title : 'New Chat',
  messages:
    useStore.getState().defaultSystemMessage.length > 0
      ? [{ role: 'system', content: useStore.getState().defaultSystemMessage }]
      : [],
  config: { ...useStore.getState().defaultChatConfig },
  titleSet: false,
  folder,
});

export const codeLanguageSubset = [
  'python',
  'javascript',
  'java',
  'go',
  'bash',
  'c',
  'cpp',
  'csharp',
  'css',
  'diff',
  'graphql',
  'json',
  'kotlin',
  'less',
  'lua',
  'makefile',
  'markdown',
  'objectivec',
  'perl',
  'php',
  'php-template',
  'plaintext',
  'python-repl',
  'r',
  'ruby',
  'rust',
  'scss',
  'shell',
  'sql',
  'swift',
  'typescript',
  'vbnet',
  'wasm',
  'xml',
  'yaml',
];
