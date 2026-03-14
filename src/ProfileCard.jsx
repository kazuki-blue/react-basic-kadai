import React from 'react';


export function ProfileCard(props) {



    return (
        <main>

            <section>
                <div style={{
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    padding: '16px'
                }}>                    
                    <div key={props.profilesKeys[props.progress]}>
                        <h2>{props.profiles[props.progress].name}</h2>
                        <p>【年齢】{props.profiles[props.progress].age}歳</p>
                        <p>【自己紹介】{props.profiles[props.progress].bio}</p>
                    </div>                    
                </div>

                
            </section>
        </main>
    );
}