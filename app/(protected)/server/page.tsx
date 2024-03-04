import {UserInfo} from '@/components/misc/user-info'
import {currentUser} from '@/lib/auth'

const ServerPage = async () => {
  const user = await currentUser()
  return <UserInfo user={user} label='🖥️Server Component' />
}

export default ServerPage
