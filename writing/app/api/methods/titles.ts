import type { Title } from '../models/title';

export async function getTitles(): Promise<Title[]> {
  // TODO: Implement DB logic
  const documents: Title[] = fakeData;

  return documents;
}

export async function getTitle(titleId: string): Promise<Title | null> {
  // TODO: Implement DB logic
  const title: Title | null = fakeData.find((t) => t.id === titleId) || null;

  return title;
}

export async function getTitleByURL(url: string): Promise<Title | null> {
  // TODO: Implement DB logic
  const title: Title | null = fakeData.find((t) => t.urlTitle === url) || null;

  return title;
}

const fakeData: Title[] = [
  {
  id: "1",
  urlTitle: 'novel-title-1',
  title: 'Novel Title 1',
  summary: 'This is an example summary for the title.',
  chapterCount: 2,
  addedOn: new Date(),
  updatedOn: new Date(),
  },
  {
  id: "2",
  urlTitle: 'short-story-title-2',
  title: 'Short Story Title 2',
  summary: 'This is an example summary for the title.',
  chapterCount: 1,
  addedOn: new Date(),
  updatedOn: new Date(),
  },
  {
  id: "3",
  urlTitle: 'short-story-title-3',
  title: 'Short Story Title 3',
  summary: 'This is an example summary for the title.',
  chapterCount: 1,
  addedOn: new Date(),
  updatedOn: new Date(),
  },
];