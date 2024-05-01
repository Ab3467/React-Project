import ProSideBar from "./components/ProSideBar"
import NewProject from "./components/NewProject"
export default function App() {
  return (
    <main className="h-screen my-8">
      <ProSideBar/>
      <NewProject/>
    </main>
  )
}