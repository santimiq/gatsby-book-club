import React from "react";
import Layout from "../components/layout";
import BookItem from "../components/BookItem"
import { graphql } from "gatsby"

const BookTemplate = (props) => {
  console.log(props.data);
  return(
    <Layout>
      <BookItem
      bookCover={props.data.book.localImage.childImageSharp.fixed}
      bookTitle={props.data.book.title}
      bookSummary={props.data.book.summary}
      authorName={props.data.book.author.name} />
    </Layout>
  )
}

export const query = graphql`
  query BookQuery($bookId: String!) {
    book(id: {eq: $bookId}){
        title
        summary
        localImage {
          childImageSharp {
            fixed(width: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        id
        author {
          name
        }
    }
  }
`;



export default BookTemplate;
