'use client'

import {UserInfo} from '@/components/misc/user-info'
import {useCurrentUser} from '@/hooks/use-current-user'

const ClientPage = () => {
  const user = useCurrentUser()

  return <UserInfo user={user} label='💻Client Component' />
}

export default ClientPage