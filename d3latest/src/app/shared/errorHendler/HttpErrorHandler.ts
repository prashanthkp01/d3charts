import { ErrorHandler, Injectable} from '@angular/core';
@Injectable()
export class HttpErrorHandler implements ErrorHandler {
  constructor() { }
  handleError(error:any) {
     console.log('error',error)
     throw error;
  }
  
}