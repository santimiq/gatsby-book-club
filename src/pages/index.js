import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BookItem from "../components/BookItem"
import styled from "styled-components"

const LinkButton = styled.div`
  text-align: right;
  a {
    padding: 8px;
    background: rebeccapurple;
    border-radius: 8px;
    color: white;
    text-decoration: none;

    &:hover {
      background: indigo;
    }
  }
`

const IndexPage = (props) => {
  console.log(props)
  return (
    <Layout>
      {props.data.allBook.edges.map(edge => (
        <BookItem
          bookCover={edge.node.imageURL}
          bookTitle={edge.node.title}
          bookSummary={edge.node.summary}
          authorName={edge.node.author.name}
          key={edge.node.id}
        >
          <LinkButton>
            <Link to={`/book/${edge.node.id}`}>Joins conversations</Link>
          </LinkButton>
        </BookItem>
      ))}
    </Layout>
  )
}
export const query = graphql`
{
  allBook {
    edges {
      node {
        title
        summary
        imageURL
        id
        author {
          name
        }
      }
    }
  }
}
`

export default IndexPage

