import { createWriteStream, WriteStream } from 'node:fs';
import { FileWriter } from './file-writer.interface.js';

export class TSVFileWriter implements FileWriter {
  private steam: WriteStream;

  constructor(filename: string) {
    this.steam = createWriteStream(filename, {
      flags: 'w',
      encoding: 'utf-8',
      autoClose: true,
    });
  }

  public async write(row: string | string[]): Promise<unknown> {
    const writeSuccess = this.steam.write(`${row}\n`);

    if(!writeSuccess) {
      return new Promise((resolve) => {
        this.steam.once('drain', () => resolve(true));
      });
    }
    return Promise.resolve();
  }
}
