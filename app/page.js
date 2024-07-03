'use client'
import Navbar from "@/components/Navbar";
import { supabase } from "@/components/Supabase";
import { useEffect, useState } from "react";

function page() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [mydata, setmydata] = useState([])


  async function getalldata() {
    let { data, error } = await supabase
      .from('database1')
      .select('*')

    setmydata(data)
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getalldata()
    console.log('cascsac')

  }, [
  ])




  return (
    <div>
      <span>
        <h1>Home</h1>


        {
          mydata.map((data) => {
            return (
              <>
                <div>
                  <h1>{data.posts}</h1>
                </div>

              </>
            )
          })}

      </span>
    </div>
  );
}

export default page;