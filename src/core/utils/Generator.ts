import { v4 as uuidv4 } from 'uuid';
// Class providing methods for generating UUIDs and random colors
class Generate {
  // Method to generate a UUID
  static generateUUID(): string {
    return uuidv4();
  }

  // Method to generate a random color
  static generateRandomColor(opacity: number = 1): string {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    // Optionally, you can set the opacity of the color
    const rgbaColor = `${randomColor}${Math.round(opacity * 255).toString(16)}`;
    return rgbaColor;
  }
}

export default Generate;
