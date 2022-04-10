import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AppService {
  listPathCProject = [];

  getFilesFromDirectory(directoryPath): any[] {
    const filesInDirectory = fs.readdirSync(directoryPath);

    filesInDirectory.map((file) => {
      const filePath = path.join(directoryPath, file);
      const stats = fs.statSync(filePath);

      if (file == '.cproject' || file == '.project') {
        if (!this.listPathCProject.includes(directoryPath)) {
          console.log('se corrije -->', directoryPath);
          this.listPathCProject.push(directoryPath);
        }
      }

      if (stats.isDirectory()) {
        return this.getFilesFromDirectory(filePath);
      } else {
        return filePath;
      }
    });
    return this.listPathCProject;
  }
}
