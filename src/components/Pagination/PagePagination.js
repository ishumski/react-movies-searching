import React from 'react'

import './PagePagination.css'

import { Pagination } from '@material-ui/lab'

function PagePagination({ count = 10, setPage }) {

  const handlePageChange = (page) => {

    setPage(page);
    window.scroll(0, 0);

  }

  return (
    <div className='pagePagination' >
      <Pagination
        hideNextButton={true}
        hidePrevButton={true}
        count={count}
        color='primary'
        onChange={(e) => {
          console.log(e.target.textContent);
          handlePageChange(e.target.textContent)
        }}

      />
    </div>
  )
}

export default PagePagination;
