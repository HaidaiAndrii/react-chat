import { Chat } from "./components/Chat";
import { LoginPage } from "./components/LoginPage";
import { CHAT_ROUTE, LOGIN_ROUTE } from "./utils/constants";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: LoginPage
  }
]

export const privateRoutes = [
  {
    path: CHAT_ROUTE,
    Component: Chat
  }
]