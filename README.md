## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## H247 README SECTIONS

1. Format All Files in Project with Prettier: `npm run format`
2. Learn more about Github GraphQL API: https://docs.github.com/en/graphql/overview/explorer
3. Retrieve Data from Github GraphQL API:

```javascript
{
  repository(name: "", owner: "") {
    discussions(first: 100, categoryId: "") {
      nodes {
        url
        title
        bodyHTML
        bodyText
        createdAt
        lastEditedAt
        number
        author {
          login
          avatarUrl
          url
        }
        labels(first: 100) {
          nodes {
            name
          }
        }
      }
    }
  }
}
```

4. Install HTML React Parser:
   1. https://www.npmjs.com/package/html-react-parser
   2. `npm i html-react-parser -- save`
5. GitHub dark syntax theme:
   1. https://github.com/primer/github-syntax-darkx
   2. `npm install --save github-syntax-dark`

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

1. `npm run dev`
2. Push the repo to Github