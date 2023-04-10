import React, { useEffect, useState } from "react";
// import { apiFetch } from "../Sevice/Service";
import { data } from "../components/Data";
import Thumbnail from "../components/Thumbnail";

const getlocalvalues = () => {
  const getvalue = localStorage.getItem("getdata");
  const getresult = JSON.parse(getvalue);
  return getresult;
};

const Home = () => {
  const [value, setValue] = useState(getlocalvalues());
  console.log(value)
  const [item, setItem] = useState();
  useEffect(() => {
    const localvaluedata=localStorage.setItem("getdata",JSON.stringify(data.cardData))
  }, [data]);

  return (
    <div className="container1">
      {
       value &&  value[0].buckets[0].items.slice(0, 10).map((item) => {
          
          return (
            <Thumbnail
              item={item}/>
          )
        })
      }
    </div>
  )
}
export default Home;

