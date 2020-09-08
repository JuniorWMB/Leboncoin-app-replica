import React from "react";

function Pagination({ count, setPage, limit }) {
  const buttonsCount = count / limit;
  const button = [];

  for (let i = 1; i <= buttonsCount; i++) {
    button.push(
      <button
        className="pagination"
        onClick={() => {
          setPage(i);
        }}
      >
        {i}
      </button>
    );
  }
  return <div className="pagination__style">{button}</div>;
}

export default Pagination;
