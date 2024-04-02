// Function to create a text input formatter allowing text and numbers
function textAndNumberOnly(event: InputEvent): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9a-zA-Z]/g, '');
  }
  
  // Function to create a text input formatter allowing numbers only
  function numbersOnly(event: InputEvent): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '');
  }
  
  // Function to create a text input formatter allowing text only
  function textOnly(event: InputEvent): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^a-zA-Z]/g, '');
  }
  
  export { textAndNumberOnly, numbersOnly, textOnly };
  