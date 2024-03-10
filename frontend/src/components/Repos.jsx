import React from 'react'
import Repo from './Repo'
const Repos = ({repo}) => {
  return (
    <div className={`lg:w-2/3 w-full bg-glass rounded-lg px-8 py-6`}>
    <ol className='relative border-s border-gray-200'>
      {
        repo?.map((repo)=>(
          <Repo key={repo.id} repo={repo} />
        ))
      }
       
    </ol>
</div>
  )
}

export default Repos
