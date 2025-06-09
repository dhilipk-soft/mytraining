import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)


// 𝟏.𝐂𝐨𝐦𝐩𝐨𝐧𝐞𝐧𝐭𝐬
// • Functional Components
// • Class Components
// • JSX (JavaScript XML) Syntax
// 𝟐.𝐏𝐫𝐨𝐩𝐬 (𝐏𝐫𝐨𝐩𝐞𝐫𝐭𝐢𝐞𝐬)
// • Passing Props
// • Default Props
// • Prop Types
// 𝟑.𝐒𝐭𝐚𝐭𝐞
// • useState Hook
// • Class Component State
// • Immutable State
// 𝟒.𝐋𝐢𝐟𝐞𝐜𝐲𝐜𝐥𝐞 𝐌𝐞𝐭𝐡𝐨𝐝𝐬 (𝐂𝐥𝐚𝐬𝐬 𝐂𝐨𝐦𝐩𝐨𝐧𝐞𝐧𝐭𝐬)
// • componentDidMount
// • componentDidUpdate
// • componentWillUnmount
// 𝟓.𝐇𝐨𝐨𝐤𝐬 (𝐅𝐮𝐧𝐜𝐭𝐢𝐨𝐧𝐚𝐥 𝐂𝐨𝐦𝐩𝐨𝐧𝐞𝐧𝐭𝐬)
// • useState
// • useEffect
// • useContext
// • useReducer
// • useCallback
// • useMemo
// • useRef
// • useImperativeHandle
// • useLayoutEffect
// 𝟔.𝐄𝐯𝐞𝐧𝐭 𝐇𝐚𝐧𝐝𝐥𝐢𝐧𝐠
// • Handling Events in Functional Components
// • Handling Events in Class Components
// 𝟕.𝐂𝐨𝐧𝐝𝐢𝐭𝐢𝐨𝐧𝐚𝐥 𝐑𝐞𝐧𝐝𝐞𝐫𝐢𝐧𝐠
// • if Statements
// • Ternary Operators
// • Logical && Operator
// 𝟖.𝐋𝐢𝐬𝐭𝐬 𝐚𝐧𝐝 𝐊𝐞𝐲𝐬
// • Rendering Lists
// • Keys in React Lists
// 𝟗.𝐂𝐨𝐦𝐩𝐨𝐧𝐞𝐧𝐭 𝐂𝐨𝐦𝐩𝐨𝐬𝐢𝐭𝐢𝐨𝐧
// • Reusing Components
// • Children Props
// • Composition vs Inheritance
// 𝟏𝟎.𝐇𝐢𝐠𝐡𝐞𝐫-𝐎𝐫𝐝𝐞𝐫 𝐂𝐨𝐦𝐩𝐨𝐧𝐞𝐧𝐭𝐬 (𝐇𝐎𝐂)
// • Creating HOCs
// • Using HOCs for Reusability
// 𝟏𝟏.𝐑𝐞𝐧𝐝𝐞𝐫 𝐏𝐫𝐨𝐩𝐬
// • Using Render Props Pattern
// 𝟏𝟐.𝐑𝐞𝐚𝐜𝐭 𝐑𝐨𝐮𝐭𝐞𝐫
// • <BrowserRouter>
// • <Route>
// • <Link>
// • <Switch>
// • Route Parameters
// 𝟏𝟑.𝐍𝐚𝐯𝐢𝐠𝐚𝐭𝐢𝐨𝐧
// • useHistory Hook
// • useLocation Hook
// 𝐒𝐭𝐚𝐭𝐞 𝐌𝐚𝐧𝐚𝐠𝐞𝐦𝐞𝐧𝐭
// 𝟏𝟒.𝐂𝐨𝐧𝐭𝐞𝐱𝐭 𝐀𝐏𝐈
// • Creating Context
// • useContext Hook
// 𝟏𝟓.𝐑𝐞𝐝𝐮𝐱
// • Actions
// • Reducers
// • Store
// • connect Function (React-Redux)
// 𝟏𝟔.𝐅𝐨𝐫𝐦𝐬
// • Handling Form Data
// • Controlled Components
// • Uncontrolled Components
// 𝟏𝟕.𝐒𝐢𝐝𝐞 𝐄𝐟𝐟𝐞𝐜𝐭𝐬
// • useEffect for Data Fetching
// • useEffect Cleanup
// 𝟏𝟖.𝐀𝐉𝐀𝐗 𝐑𝐞𝐪𝐮𝐞𝐬𝐭𝐬
// • Fetch API
// • Axios Library
// 𝐄𝐫𝐫𝐨𝐫 𝐇𝐚𝐧𝐝𝐥𝐢𝐧𝐠
// 𝟏𝟗.𝐄𝐫𝐫𝐨𝐫 𝐁𝐨𝐮𝐧𝐝𝐚𝐫𝐢𝐞𝐬
// • componentDidCatch (Class Components)
// • ErrorBoundary Component (Functional
// Components)
// 𝟐𝟎.𝐓𝐞𝐬𝐭𝐢𝐧𝐠
// • Jest Testing Framework
// • React Testing Library
// 𝟐𝟏.𝐎𝐩𝐭𝐢𝐦𝐢𝐳𝐚𝐭𝐢𝐨𝐧
// • Memoization
// • Profiling and Performance Monitoring
// 𝟐𝟐. 𝐁𝐮𝐢𝐥𝐝 𝐚𝐧𝐝 𝐃𝐞𝐩𝐥𝐨𝐲𝐦𝐞𝐧𝐭
// • Create React App (CRA)
// • Production Builds
// • Deployment Strategies
// 𝐅𝐫𝐚𝐦𝐞𝐰𝐨𝐫𝐤𝐬 𝐚𝐧𝐝 𝐋𝐢𝐛𝐫𝐚𝐫𝐢𝐞𝐬
// 𝟐𝟑.𝐒𝐭𝐲𝐥𝐢𝐧𝐠 𝐋𝐢𝐛𝐫𝐚𝐫𝐢𝐞𝐬
// • Styled-components
// • CSS Modules
// 𝟐𝟒.𝐒𝐭𝐚𝐭𝐞 𝐌𝐚𝐧𝐚𝐠𝐞𝐦𝐞𝐧𝐭 𝐋𝐢𝐛𝐫𝐚𝐫𝐢𝐞𝐬
// • Redux
// • MobX
// 𝟐𝟔.𝐑𝐨𝐮𝐭𝐢𝐧𝐠 𝐋𝐢𝐛𝐫𝐚𝐫𝐢𝐞𝐬
// • React Router
// • Reach Router