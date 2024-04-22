import React from 'react'

interface ChannelPageProps { 
  params : {
    id : string
  }
}

const page = (props : ChannelPageProps) => {

    console.log(props , "props")
    console.log(props.params.id , "props.params.id")

  return (
    // <div>channel/{props.params.id}</div>
    <div>channel/{props.params.id}</div>
  )
}

export default page