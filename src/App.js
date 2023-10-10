import { Rute } from "./Rute";
import "./app.scss";
import { loadIcons } from "./utils/IconLoader";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import axios from "axios";

// :: load icon untuk font awesome.
loadIcons();
const queryClient = new QueryClient();
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    if (error.response.status === 401) {
      console.log(error.response);
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    // Do something with response error
    return Promise.reject(error);
  }
);

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Rute />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </div>
  );
}

export default App;
