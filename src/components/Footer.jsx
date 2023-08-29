import React from 'react'

function Footer() {
  return (
    <footer className='footer w-full'>
      <div className="container mx-auto py-6 flex items-center justify-between">
        <h4 className='text-base text-white'>Build by Emiliano Lopez</h4>
        <div className="links flex items-center justify-center gap-4">
          <a href="#">Github</a>
          <a href="#">Linkedin</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer