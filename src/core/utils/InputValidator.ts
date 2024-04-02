// Define the AppValidator class
class AppValidator {
    // Method to validate a username
    static username(val: string | undefined): string | null {
      if (!val || val.trim() === '') {
        return 'Username cannot be empty!';
      }
      // You can add additional validation rules for the username here
      return null;
    }
  
    // Method to validate a password
    static password(val: string | undefined): string | null {
      if (!val || val.trim() === '') {
        return 'Password cannot be empty!';
      }
      // You can add additional validation rules for the password here
      return null;
    }
  
    // Method to validate an email
    static email(val: string | undefined): string | null {
      if (!val || val.trim() === '') {
        return 'Email cannot be empty!';
      }
      // You can add additional validation rules for the email here
      return null;
    }
  }
  
  export default AppValidator;
  