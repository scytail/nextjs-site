export class Logger {
  private isEnabled: boolean;
  private tag: string;

  constructor(tag: string) {
    this.tag = tag;
    this.isEnabled = process.env.LOGGING_ENABLED === 'true';
  }

  log(...args: any[]) {
    if (this.isEnabled) {
      console.log(`[${new Date().toISOString()}] [${this.tag}]`, ...args);
    }
  }
}