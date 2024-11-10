import { useState } from "react";

function Table({ ids, names, emails, roles }) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  // Calculate total pages
  const totalPages = Math.ceil(ids.length / itemsPerPage);

  // Get current page data
  const currentIds = ids.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
  const currentNames = names.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
  const currentEmails = emails.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
  const currentRoles = roles.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  // Handle Next and Previous buttons
  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
    return(
        <>
        <table style={{width:"100%"}}>
            <thead>
      <tr style={{backgroundColor:'green',color:'white'}}>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
      </tr>
      </thead>
      <tbody>
        {currentIds.map((id, index) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{currentNames[index]}</td>
            <td>{currentEmails[index]}</td>
            <td>{currentRoles[index]}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <div style={{display:'flex',justifyContent:'center',gap:'10px'}}>
    <button onClick={handlePreviousPage}>Previous</button>
    <button>{currentPage+1}</button>
    <button onClick={handleNextPage}>Next</button>
    </div>
        </>
    )
};
export default Table;