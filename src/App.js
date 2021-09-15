import Album from "./album/Album";

import { Provider } from "./reducer/reducer";
function App() {
  return (
    <Provider>
      <Album />
    </Provider>
  );
}

export default App;
