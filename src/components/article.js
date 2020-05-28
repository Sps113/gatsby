import React from "react"

const Article = ({
  content: {
    title,
    text: { content },
    banner: {
      file: { url },
    },
    publishedAt,
  },
}) => (
  <div>
    <h2>{title}</h2>
    <img src={url} alt={title} />
    <p>{content[0].content[0].value}</p>
    <h5>{publishedAt}</h5>
  </div>
)

export default Article
