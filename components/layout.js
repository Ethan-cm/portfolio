import link from 'next/link'



export default function Layout({ children }) {
    return (

      <div>

      <Header />
      
      {children}

      </div>
    )
  }