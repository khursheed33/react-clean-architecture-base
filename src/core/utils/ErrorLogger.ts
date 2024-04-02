import fs from 'fs';
import { promisify } from 'util';
import { getAppDir } from './AppDirectory';

// Promisify fs.writeFile to use async/await syntax
const writeFileAsync = promisify(fs.writeFile);

// Function to log an error message and stack trace to a file
async function logError(error: any, stackTrace: Error): Promise<void> {
  try {
    const errorMessage = `Error: ${error}\nStack trace:\n${stackTrace.stack}`;
    const appDocDir =  getAppDir(); // Assuming you have a function getAppDir() to get the directory
    console.log(`Dir:: ${appDocDir}`); // Log the directory to console

    const logFilePath = `${appDocDir}/error.log`;
    await writeFileAsync(logFilePath, errorMessage, { flag: 'a' }); // Append to the log file
  } catch (err) {
    console.error(`Logger: ${err}`); // Log any errors during logging
  }
}

export default logError;
