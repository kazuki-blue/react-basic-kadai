import React from 'react';

export function ProfileCard({profiles}) {

    return (
        <main>

            <section>
                <div style={{
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    padding: '16px'
                }}>                    
                    <div>
                        <h2>{profiles.name}</h2>
                        <p>【年齢】{profiles.age}歳</p>
                        <p>【自己紹介】{profiles.bio}</p>
                    </div>                    
                </div>                
            </section>            
            
        </main>
    );
}