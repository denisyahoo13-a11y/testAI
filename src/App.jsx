import { useState } from 'react'
import NavBar from './components/NavBar'
import Landing from './screens/Landing'
import Diagnostic from './screens/Diagnostic'
import Results from './screens/Results'
import DirectionDetail from './screens/DirectionDetail'
import UniversitySearch from './screens/UniversitySearch'

export default function App() {
  const [screen, setScreen] = useState('landing')

  const navigate = (target) => setScreen(target)

  const back = () => {
    if (screen === 'direction') return setScreen('results')
    setScreen('landing')
  }

  const navKey =
    screen === 'diagnostic-full' || screen === 'diagnostic-light' ? 'diagnostic' : screen

  return (
    <div className="min-h-screen bg-bg">
      <NavBar screen={navKey} onBack={back} />
      <div key={screen} className="animate-fadeIn">
        {screen === 'landing' && <Landing onNavigate={navigate} />}
        {screen === 'diagnostic-full' && (
          <Diagnostic mode="full" onComplete={() => navigate('results')} />
        )}
        {screen === 'diagnostic-light' && (
          <Diagnostic mode="light" onComplete={() => navigate('results')} />
        )}
        {screen === 'results' && <Results onNavigate={navigate} />}
        {screen === 'direction' && <DirectionDetail />}
        {screen === 'university' && <UniversitySearch />}
      </div>
    </div>
  )
}
