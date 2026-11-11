import './App.css'
import { Toaster } from 'sonner';

function App() {
  return (
    <>
      <Toaster
          position="bottom-right"
          richColors
          toastOptions={{
            style: { background: '#1f2937', border: '1px solid #374151', color: '#fff' },
          }}
      />
    </>
  )
}

export default App
