const Links = ({ name, logo, url, color }) => {
  return (
    <a
      className={`text-xl m-1 p-1 sm:m-2 sm:p-2 ${color} rounded-full hover:text-white transition-colors duration-300`}
      href={url}
      rel='noreferrer'
      target='_blank'
    >
      {logo}
      <span className='sr-only'>{name}</span>
    </a>
  )
}

export default Links
