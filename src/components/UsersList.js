import React from 'react';

import ItemUser from './ItemUsers';

export default function UsersList({ users }){

    return (
        <div>
           {users && users.map((e, index) => {
                    return <ItemUser key={index} user={e} />
                })
            }
        </div>
    );
}
