import { Chapter } from '../models/chapter';

export async function getChapter(titleId: string, chapterNumber: number): Promise<Chapter | null> {
  // TODO: Implement DB logic
  
  // Note that the blob from the file server is a json of data including a reader, which will probably have to be leveraged, either here or on the client:
  // https://vercel.com/docs/vercel-blob/using-blob-sdk#get
  const document: Chapter | null = fakeData.find((c) => c.chapterNumber === chapterNumber && c.titleId === titleId) || null;

  return document;
}

export async function getChapterList(titleId: string): Promise<Chapter[]> {
  // TODO: Implement DB logic
  return fakeData.filter((c) => c.titleId === titleId).sort((a, b) => a.chapterNumber - b.chapterNumber);
}

const fakeData: Chapter[] = [
  {
    id: "1",
    titleId: "1",
    chapterNumber: 1,
    blob: `# header 1
## header 2
### header 3
#### header 4

normal *italic* **bold**

This is an unordered list:

- bullet one
- bullet two
- bullet three

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

This is an ordered list:

1. numbered one
2. numbered two
3. numbered three`,
    addedOn: new Date(),
    updatedOn: new Date(),
  },
  {
    id: "5",
    titleId: "1",
    chapterNumber: 3,
    blob: 'content goes here',
    addedOn: new Date(),
    updatedOn: new Date(),
  },
  {
    id: "2",
    titleId: "1",
    chapterNumber: 2,
    blob: 'content goes here',
    addedOn: new Date(),
    updatedOn: new Date(),
  },
  {
    id: "3",
    titleId: "2",
    chapterNumber: 1,
    blob: `# header 1
## header 2
### header 3
#### header 4

normal *italic* **bold**

This is an unordered list:

- bullet one
- bullet two
- bullet three

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

This is an ordered list:

1. numbered one
2. numbered two
3. numbered three`,
    addedOn: new Date(),
    updatedOn: new Date(),
  },
  {
    id: "4",
    titleId: "3",
    chapterNumber: 1,
    blob: 'content goes here',
    addedOn: new Date(),
    updatedOn: new Date(),
  },
];