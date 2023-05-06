import { StagesProvider } from "./hooks/useTools";
import RouteElement from "./routes";
import { GlobalStyle } from "./styles/global";

import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";                                       
        
function App() {

  return (
    <>
      <StagesProvider>
      <GlobalStyle/>
      <RouteElement/>
      </StagesProvider>
    </>
  )
}

export default App