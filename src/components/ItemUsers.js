import React from 'react';

export default function ItemUser({user}){
  console.log(user);
    return (
            <div>
              <p>{user.name}</p>
            </div>
    );
}
