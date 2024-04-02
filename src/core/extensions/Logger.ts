// Utility function to log objects, only if not in production environment.
export function log(obj: any): void {
    if (process.env.NODE_ENV !== 'production') {
      console.log(obj.toString());
    }
  }
  