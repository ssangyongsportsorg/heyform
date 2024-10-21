import { useTranslation } from 'react-i18next'

import { RedirectUriLink } from '@/components'
import { Form, Input } from '@/components/ui'
import {
  APP_DISABLE_REGISTRATION,
  DISABLE_LOGIN_WITH_APPLE,
  DISABLE_LOGIN_WITH_GOOGLE
} from '@/consts'
import { AuthService } from '@/service'
import { useQueryURL, useRouter } from '@/utils'

import { ThirdPartyLogin } from './views/ThirdPartyLogin'

const Login = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const nextURL = useQueryURL('/')

  async function handleFinish(values: any) {
    await AuthService.login(values.email, values.password)
    router.redirect(nextURL)
  }

  return (
    <div>
      <div>
        
      </div>
    </div>
  )
}

export default Login
