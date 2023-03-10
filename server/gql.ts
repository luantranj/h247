export function discussionGql(ghDiscussionCategoryId: string | undefined) {
  return `{
    repository(name: "h247.tech", owner: "ban-bien-tap") {
      discussions(first: 100, categoryId: "${ghDiscussionCategoryId}") {
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
  }`
}

// Single post
export function discussionDetailGql(postId: number | undefined) {
  return `{
    repository(owner: "ban-bien-tap", name: "h247.tech") {
      discussion(number: ${postId}) {
        title
        bodyHTML
        createdAt
        author {
          login
          url
          avatarUrl
        }
      }
    }
  }`
}
