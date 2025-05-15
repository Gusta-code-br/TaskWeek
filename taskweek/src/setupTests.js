
// Polyfill para TextEncoder/TextDecoder
import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Mock para o componente de teste de API
jest.mock('supertest', () => jest.fn());

// Mock para o servidor Express
jest.mock('../server', () => ({}), { virtual: true });