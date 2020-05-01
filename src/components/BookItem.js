import React from 'react'
import styled from 'styled-components'
import { checkPropTypes } from 'prop-types'

const BookItemWrapper = styled.section`
  border: 1px solid #ddd;
  background: white;
  padding: 8px;
  margin-bottom: 8px;

  h2 {
    small {
      font-weight: normal;
      padding-left: 8px;
      font-size: 14px;
    }
  }
`

const BookItem = ({authorName, bookTitle, bookSummary, bookCobookCoverver, children}) => {
  return (
    <BookItemWrapper>
    <img src="{bookCover}" alt=""/>
      <h2>
        {bookTitle} <small>{authorName}</small>
      </h2>
      <p>{bookSummary}</p>
      <div>
        {children}
      </div>
    </BookItemWrapper>
  )
}

export default BookItem
