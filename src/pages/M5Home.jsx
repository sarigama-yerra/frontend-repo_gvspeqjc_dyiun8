import { useNavigate } from 'react-router-dom'
import M5Hero from '../components/M5Hero'
import M5Header from '../components/M5Header'

export default function M5Home() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-black text-white">
      <M5Header />
      <M5Hero onExplore={() => navigate('/m5/gallery')} />
    </div>
  )
}
