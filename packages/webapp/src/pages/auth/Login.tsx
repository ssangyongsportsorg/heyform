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
<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <svg
          className="mx-auto h-24 w-24 text-gray-400 mb-4"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="45" />
          <path d="M30 30 L70 70" />
          <path d="M30 70 L70 30" />
        </svg>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">目前沒有任何內容</h1>
        <p className="text-gray-600">看起來這裡還是空的。稍後再來看看吧!</p>
      </div>
    </div>
  )
}

export default Login
