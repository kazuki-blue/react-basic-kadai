import React from 'react';
import { useState } from 'react'

export function ProfileCard(props) {

  // 進捗率をstateとして管理
  const [progress, setProgress] = useState(0); // 初期値は0％

// 章ごとのUUID（起動時に1度だけ生成される）
const profilesKeys = props.profiles.map(() => crypto.randomUUID());

const handleClick = () => {
    setProgress(prev => prev >= 4 ? 0 : prev + 1)
  };
  
    return (
        <main>

            <section>
                <div style={{
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    padding: '16px'
                }}>                    
                    <div key={profilesKeys[progress]}>
                        <h2>{props.profiles[progress].name}</h2>
                        <p>【年齢】{props.profiles[progress].age}歳</p>
                        <p>【自己紹介】{props.profiles[progress].bio}</p>
                    </div>                    
                </div>                
            </section>
            <button onClick={handleClick}>次のプロフィール</button> 
            
        </main>
    );
}