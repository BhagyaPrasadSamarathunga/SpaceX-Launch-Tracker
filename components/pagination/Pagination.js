import React from "react";
import styles from "./Pagination.module.css";
import Button from "../button/Button";

function Pagination({currentPage, setCurrentPage, pages, hasNextPage}) {

  function handelNextButtonClick() {
    setCurrentPage(currentPage + 1);
  };
  
  function handelPrevButtonClick() {
    setCurrentPage(currentPage - 1);
  };
  return(
    <div className={styles.pagination}>
      {pages > 0 ?
        <>
          <Button title={'Previous'} onClick={handelPrevButtonClick} isDisable={currentPage <= 1}/>
          { pages - currentPage < 1 && currentPage - 4 > 0 && <Button title={currentPage - 4} onClick={() => setCurrentPage(currentPage - 4)}/>}
          { pages - currentPage < 2 && currentPage - 3 > 0 && <Button title={currentPage - 3} onClick={() => setCurrentPage(currentPage - 3)}/>}
          { pages && currentPage - 2 > 0 && <Button title={currentPage - 2} onClick={() => setCurrentPage(currentPage - 2)}/>}
          { pages && currentPage - 1 > 0 && <Button title={currentPage - 1} onClick={() => setCurrentPage(currentPage - 1)}/>}
          <Button title={currentPage} onClick={() => setCurrentPage(currentPage - 0)} status={'active'}/>
          { currentPage + 1 <= pages && <Button title={currentPage + 1} onClick={() => setCurrentPage(currentPage + 1)}/>}
          { currentPage + 2 <= pages && <Button title={currentPage + 2} onClick={() => setCurrentPage(currentPage + 2)}/>}
          { currentPage + 3 <= pages && currentPage < 3 && <Button title={currentPage + 3} onClick={() => setCurrentPage(currentPage + 3)}/>}
          { currentPage + 4 <= pages && currentPage < 2 && <Button title={currentPage + 4} onClick={() => setCurrentPage(currentPage + 4)}/>}
          <Button title={'Next'} onClick={handelNextButtonClick} isDisable={!hasNextPage}/>
        </> : ''
      }
    </div>
  )
}

export default Pagination;