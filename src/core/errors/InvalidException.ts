// Custom exception class for representing invalid exceptions.
class InvalidException extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'InvalidException';
    }
  }
  
  export default InvalidException;
  