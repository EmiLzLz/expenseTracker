import React from 'react'

function Footer() {
  return (
    <footer className='footer w-full'>
      <div className="container w-full mx-auto py-8 flex items-center justify-between">
        <h4 className='text-base text-white'>Build by Emiliano Lopez</h4>
        <div className="links flex items-center justify-center gap-4">
          <a className='text-white' target='_blank' href="https://www.linkedin.com/in/emiliano-lopez-lopez">Github</a>
          <a className='text-white' target='_blank' href="https://github.com/EmiLzLz">Linkedin</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer