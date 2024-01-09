import { useSession, signIn, signOut } from "next-auth/react"
import NavBar from "@/components/nav"

export default function Layout({children}) {
  const { data: session } = useSession()
  if(!session) {
    return (
    <div className="bg-blue-900 w-screen h-screen flex items-center">
      <div className="text-center w-full">
        <button className="bg-white p-2 px-4 rounded-lg" onClick={() => signIn('google')}>Login with Google</button>
      </div>
    </div>  
    )
  } else {
    return (
      <div className="bg-blue-900 min-h-screen flex">
        <NavBar/>
        <div className="bg-white flex-grow mt-1 mr-2 rounded-lg p-4" style={{width: '100%'}}>
            {children}
        </div>
      </div>
      
    )
  }
}
