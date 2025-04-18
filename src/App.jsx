import Display from './Display'
import "tailwindcss";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen border-red mx-2.5 px-3">
      <h1 className="text-4xl font-bold mb-4">Calculator</h1> <br />
      <Display />
    </div>
  )
}

export default App
