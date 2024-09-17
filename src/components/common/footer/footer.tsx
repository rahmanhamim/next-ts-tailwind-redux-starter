const Footer = () => {
  return (
    <footer className='container mt-8 border-t border-gray-300 py-4'>
      <p className='text-center text-xs text-gray-400'>
        All rights reserved &copy; {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer
