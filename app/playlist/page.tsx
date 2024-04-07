import React from 'react'

const page = (props : any) => {

  console.log("props" , props)
  console.log("props.searchParams.list" , props.searchParams.list)

  return (
    <div>playlist page : {props.searchParams.list}</div>
  )
}

export default page