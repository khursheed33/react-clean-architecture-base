import path from 'path';

// Function to get the application directory
export function getAppDir(): string {
  return path.resolve(__dirname);
}