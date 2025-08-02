import { customAlphabet } from 'nanoid';
import clipboard from 'clipboardy';

// const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const ALL = LOWERCASE + NUMBERS;

const id = customAlphabet(ALL)(10);

clipboard.writeSync(id);
console.log(id);
