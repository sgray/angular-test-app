import { ErrorHandler } from '@angular/core';
import { Notifier } from '@airbrake/browser';

export class AirbrakeErrorHandler implements ErrorHandler {
  airbrake: Notifier;

  constructor() {
    this.airbrake = new Notifier({
      projectId: 1,
      projectKey: 'FIXME',
      environment: 'production'
    });
  }

  handleError(error: any): void {
    this.airbrake.notify(error);
  }
}
