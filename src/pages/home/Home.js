import React from 'react';

import UsersList from '../../components/UsersList';

export default function Home({users, onChange, value}){
    return (
        <div>

            <div>
              <UsersList users={users} />
            </div>
        </div>
    );
}
