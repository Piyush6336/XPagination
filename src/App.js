import { useEffect, useState } from "react";
import Table from "./component/table";

function App() {

  // const[data,setData]=useState([]);
  const [ids, setIds] = useState([]);
  const [names, setNames] = useState([]);
  const [emails, setEmails] = useState([]);
  const [roles, setRoles] = useState([]);
  let API_ENDPOINT='https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json';
  const fetchData=async()=>{
    try {
      const response=await fetch(API_ENDPOINT);
      if(response.ok){
        const result=await response.json();
        // setData(result);
        const ids = result.map(item => item.id);
        const names = result.map(item => item.name);
        const emails = result.map(item => item.email);
        const roles = result.map(item => item.role);
        
        setIds(ids);
        setNames(names);
        setEmails(emails);
        setRoles(roles);
      }else{
        alert("failed to fetch data");
      }
    } catch (error) {
      alert("failed to fetch data",error);
    }
  }
  useEffect(()=>{
    fetchData();
  },[]);
  return (
    <>
    <Table ids={ids} names={names} emails={emails} roles={roles}/>
    </>
  );
}

export default App;
