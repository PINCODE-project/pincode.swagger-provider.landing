declare global {
  interface Window {
    ym(counter: number, type: string, event: string, opts?: unknown): void;
  }
}

export {};
