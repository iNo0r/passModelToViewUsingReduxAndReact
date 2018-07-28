import React from 'react';
import {connect} from 'react-redux'

import books from '../reducers/reducer_books'

class BookList extends React.Component{
  
  renderList(){
    return (
      this.props.books.map((book,key) => {
            return(
            <li key={key} className='list-group-item'>
              {book.title}
            </li>
            )
          })
    )
  }
  
  render(){
    return(
    <div>
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
        
    </div>
    )
  }
}

function mapStateToProps(state){
  return {

  books: state.books
  }
}


export default connect(mapStateToProps)(BookList)