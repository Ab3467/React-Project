import ProSideBar from "./components/ProSideBar"
// import NewProject from "./components/NewProject"
import NoProSelect from "./components/NoProSelect"
export default function App() {
  return (
    <main className="h-screen my-8 flex gap-8 ">
      <ProSideBar/>
      <NoProSelect/>
    </main>
  )
}