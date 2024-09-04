import React from "react"
import AuthForm from "../_component/AuthForm"

export const metadata: any = {
  title: "Wind AI | Sign in",
}
const LoginPage = () => {
  return (
    <div>
      <AuthForm formType="signin" />
    </div>
  )
}

export default LoginPage
