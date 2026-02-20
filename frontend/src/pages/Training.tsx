import Collapse from "../components/Collapse"
import Navbar from "../layout/Navbar"

const Training = () => {
  return (
    <>
    <Navbar></Navbar>
    <Collapse summary="This is some training" bgColor="bg-secondary"><div>Some content</div></Collapse>
    </>
  )
}

export default Training