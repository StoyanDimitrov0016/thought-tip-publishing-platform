import { IAuthorDetail, IAuthorPreview } from "../types/IAuthor";

export const MockAuthorsPreview: IAuthorPreview[] = [
  {
    id: "abc0001",
    firstName: "Patrick",
    lastName: "Collins",
    profilePicture: "https://via.assets.so/img.jpg?w=30&h=30&tc=white&bg=#000",
    rank: "Expert",
    username: "@patrickcollinsweb3",
  },
  {
    id: "abc0002",
    firstName: "John",
    lastName: "Smith",
    profilePicture: "https://via.assets.so/img.jpg?w=30&h=30&tc=white&bg=#000",
    rank: "Professional",
    username: "@johnsm_99",
  },
  {
    id: "abc0003",
    firstName: "Alice",
    lastName: "Johnson",
    profilePicture: "https://via.assets.so/img.jpg?w=30&h=30&tc=white&bg=#000",
    rank: "Intermediate",
    username: "@_alicejohn_son",
  },
];

export const MockAuthorsExtended: IAuthorDetail[] = [
  {
    ...MockAuthorsPreview[0],
    avatarPicture: "https://via.assets.so/img.jpg?w=30&h=30&tc=white&bg=#000",
    bio: "Jane is a seasoned developer with a wealth of experience in TypeScript and JavaScript.",
    accountCreationDate: new Date(2024, 9, 1),
    articles: [],
    followersCount: 1200,
    followingCount: 150,
  },
  {
    ...MockAuthorsPreview[1],
    avatarPicture: "https://via.assets.so/img.jpg?w=30&h=30&tc=white&bg=#000",
    bio: "John specializes in React and has been contributing to open-source projects for over a decade.",
    articles: [],
    accountCreationDate: new Date(2024, 6, 9),
    followersCount: 900,
    followingCount: 200,
  },
  {
    ...MockAuthorsPreview[2],
    avatarPicture: "https://via.assets.so/img.jpg?w=30&h=30&tc=white&bg=#000",
    bio: "Alice is an intermediate front-end developer focusing on mastering CSS and design principles.",
    articles: [],
    accountCreationDate: new Date(2024, 10, 10),
    followersCount: 500,
    followingCount: 100,
  },
];
