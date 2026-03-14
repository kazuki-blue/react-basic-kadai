import { useState } from 'react'
import './App.css'
import { ProfileCard } from './ProfileCard.jsx';

function App() {

// 進捗率をstateとして管理
const [progress, setProgress] = useState(0); // 初期値は0％

  return (
    <>
    <ProfileCard progress={progress} setProgress={setProgress} />
    </>
  )
}

export default App