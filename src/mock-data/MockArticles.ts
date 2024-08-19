// src/mock/mockArticlePreviews.ts
import { IArticlePreview, IArticleDetail } from "../types/IArticlePreview";
import { MockAuthorsPreview } from "./MockAuthors";

export const MockArticlePreviews: IArticlePreview[] = [
  {
    title: "Understanding TypeScript",
    thumbnail: "https://via.assets.so/img.jpg?w=200&h=100&tc=white&bg=#000",
    previewText: "A concise guide to getting started with TypeScript...",
    tags: ["TypeScript", "JavaScript"],
    id: "0",
    averageReadingTime: "5",
    publishedDate: new Date("2024-08-16"),
    likesCount: 7,
    author: MockAuthorsPreview[0],
  },
  {
    title: "Advanced React Patterns",
    thumbnail: "https://via.assets.so/img.jpg?w=200&h=100&tc=white&bg=#000",
    previewText: "Learn advanced patterns in React for building scalable applications...",
    tags: ["React", "JavaScript"],
    id: "1",
    averageReadingTime: "8",
    publishedDate: new Date("2024-07-20"),
    likesCount: 15,
    author: MockAuthorsPreview[1],
  },
  {
    title: "Mastering CSS Grid",
    thumbnail: "https://via.assets.so/img.jpg?w=200&h=100&tc=white&bg=#000",
    previewText: "An in-depth look at CSS Grid and how to use it effectively...",
    tags: ["CSS", "Design"],
    id: "2",
    averageReadingTime: "6",
    publishedDate: new Date("2024-06-10"),
    likesCount: 134,
    author: MockAuthorsPreview[2],
  },
  {
    title: "Starting WEB 3 journey",
    thumbnail: "https://via.assets.so/img.jpg?w=200&h=100&tc=white&bg=#000",
    previewText: "My roadmap for becoming junior WEB3 dev...",
    tags: ["Solidity", "Ethereum"],
    id: "3",
    averageReadingTime: "5",
    publishedDate: new Date("2024-08-10"),
    likesCount: 373,
    author: MockAuthorsPreview[0],
  },
  {
    title: "Bulletproof fitness program",
    thumbnail: "https://via.assets.so/img.jpg?w=200&h=100&tc=white&bg=#000",
    previewText: "Don't skip training because you don't want to go the gym...",
    tags: ["Fitness"],
    averageReadingTime: "8",
    id: "4",
    publishedDate: new Date("2024-07-20"),
    likesCount: 90,
    author: MockAuthorsPreview[1],
  },
  {
    title: "Mastering CSS Grid",
    thumbnail: "https://via.assets.so/img.jpg?w=200&h=100&tc=white&bg=#000",
    previewText: "An in-depth look at CSS Grid and how to use it effectively...",
    tags: ["CSS", "Design"],
    averageReadingTime: "6",
    id: "5",
    publishedDate: new Date("2024-06-10"),
    likesCount: 6,
    author: MockAuthorsPreview[2],
  },
];

export const MockArticleDetailed: IArticleDetail[] = [
  {
    ...MockArticlePreviews[0],
    content:
      "What is TypeScript? TypeScript is a syntactic superset of JavaScript which adds static typing. This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types. TypeScript being a Syntactic Superset means that it shares the same base syntax as JavaScript, but adds something to it Why should I use TypeScript? JavaScript is a loosely typed language. It can be difficult to understand what types of data are being passed around in JavaScript. In JavaScript, function parameters and variables don't have any information! So developers need to look at documentation, or guess based on the implementation. TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match. For example, TypeScript will report an error when passing a string into a function that expects a number. JavaScript will not. TypeScript uses compile time type checking. Which means it checks if the specified types match before running the code, not while running the code. How do I use TypeScript? A common way to use TypeScript is to use the official TypeScript compiler, which transpiles TypeScript code into JavaScript. The next section shows how to get the compiler setup for a local project. Some popular code editors, such as Visual Studio Code, have built-in TypeScript support and can show errors as you write code!",
  },
  {
    ...MockArticlePreviews[1],
    content:
      "React has become one of the most popular front-end libraries in recent years due to its simplicity and flexibility. Yet, when applications expand in complexity, it can become tough to manage state, handle asynchronous input, and maintain a scalable architecture. We'll look at four advanced React patterns in this article that will assist you in overcoming these difficulties and how to compose them: Backend for Frontend Pattern (BFF) Hooks Pattern Higher-Order Component Pattern Observer Pattern Bringing it all together Backend for Frontend Pattern (BFF) The backend for frontend (BFF) pattern allows you to develop a React application with a separate backend that manages all of your API queries and data processing. This aids in maintaining the simplicity and cleanness of your front-end code and can enhance application performance. Implementing this is even easier when using a framework like Next.js, which has an integrated API route system that enables you to quickly construct an API service for your frontend application. This is only one possibility, and using it to implement the BFF pattern in your application is not required. When may it be advantageous to use the BFF pattern in your React application, then? One example is having a frontend application that is both large and sophisticated, with several API calls, data processing and aggregation responsibilities, such as a dashboard. By separating your heavy processing logic from your frontend, you create a more scalable and maintainable architecture. Using the BFF pattern may also help you avoid duplicating code and promote code reuse across your apps if you have many frontend applications that share comparable data and API queries.",
  },
  {
    ...MockArticlePreviews[2],
    content:
      "This is the full content of the CSS Grid article. How it work With Bootstrap 5, we've added the option to enable a separate grid system that's built on CSS Grid, but with a Bootstrap twist. You still get classes you can apply on a whim to build responsive layouts, but with a different approach under the hood. CSS Grid is opt-in. Disable the default grid system by setting $enable-grid-classes: false and enable the CSS Grid by setting $enable-cssgrid: true. Then, recompile your Sass. Replace instances of .row with .grid. The .grid class sets display: grid and creates a grid-template that you build on with your HTML. Replace .col-* classes with .g-col-* classes. This is because our CSS Grid columns use the grid-column property instead of width. Columns and gutter sizes are set via CSS variables. Set these on the parent .grid and customize however you want, inline or in a stylesheet, with --bs-columns and --bs-gap In the future, Bootstrap will likely shift to a hybrid solution as the gap property has achieved nearly full browser support for flexbo Key difference Compared to the default grid system: Flex utilities don't affect the CSS Grid columns in the same way. Gaps replaces gutters. The gap property replaces the horizontal padding from our default grid system and functions more like margin. As such, unlike .rows, .grids have no negative margins and margin utilities cannot be used to change the grid gutters. Grid gaps are applied horizontally and vertically by default. See the customizing section for more details. Inline and custom styles should be viewed as replacements for modifier classes (e.g., style=--bs-columns: 3; vs class=row-cols-3). Nesting works similarly, but may require you to reset your column counts on each instance of a nested .grid. See the nesting section for detail ",
  },
  {
    ...MockArticlePreviews[3],
    content: "This is the full content of the TypeScript article...",
  },
  {
    ...MockArticlePreviews[4],
    content: "This is the full content of the React patterns article...",
  },
  {
    ...MockArticlePreviews[5],
    content: "This is the full content of the CSS Grid article...",
  },
];
