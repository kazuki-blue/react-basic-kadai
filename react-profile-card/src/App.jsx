import { useState } from 'react'
import './App.css'
import { ProfileCard } from './ProfileCard.jsx';

function App() {

// 進捗率をstateとして管理
const [progress, setProgress] = useState(0); // 初期値は0％

// 社員のプロフィール情報
const profiles = [
  { name: '侍健太', age: 37, bio: 'プロジェクトマネージャー。チームの進捗管理と課題解決が得意です。' },
  { name: '刀沢彩香', age: 32, bio: 'フルスタックエンジニア。新規サービスの設計から運用まで担当しています。' },
  { name: '戦国広志', age: 24, bio: '若手バックエンドエンジニア。Node.jsでAPI開発に挑戦中です。' },
  { name: '武士山美咲', age: 27, bio: 'UI/UXデザイナー。使いやすく美しいデザインを追求しています。' },
  { name: '武者小路勇気', age: 29, bio: 'フロントエンドエンジニア。ReactとTypeScriptを使って開発中です。' }
];

// 章ごとのUUID（起動時に1度だけ生成される）
const profilesKeys = profiles.map(() => crypto.randomUUID());

const handleClick = () => {
  setProgress(progress + 1); // 現在のprogressに1を加算       
  if (progress > 3) {
  setProgress(0); // 現在のprogressに1を加算        
  }
};

  return (
    <>
    <ProfileCard progress={progress} setProgress={setProgress} profilesKeys={profilesKeys} profiles={profiles} />
    <button onClick={handleClick}>次のプロフィール</button>
    </>
  )
}

export default App