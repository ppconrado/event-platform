// import { gql, useQuery } from "@apollo/client";
// import { Header } from "./components/Header";
// import { Lesson } from "./components/Lesson";
// import { Sidebar } from "./components/Sidebar";
// import { Video } from "./components/Video";
// import { useEffect } from "react";
// import { client } from "./lib/appolo";

import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { client } from "./lib/appolo";
import { Router } from "./Router";

// const GET_LESSONS_QUERY = gql`
//   query {
//     lessons {
//       id
//       title
//     }
//   }
// `;

// interface Lesson {
//   id: string;
//   title: string;
// }

function App() {
  // const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);
  // useEffect(() => {
  //   client
  //     .query({
  //       query: GET_LESSONS_QUERY,
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //     });
  // });
  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApolloProvider>
    </>
    // <div>
    //   <Header />
    //   <Sidebar />
    //   <Video />
    //   <Lesson />
    // </div>
    // <ul>
    //   {data?.lessons.map((lesson) => {
    //     return <li key={lesson.id}>{lesson.title}</li>;
    //   })}
    // </ul>
  );
}

export default App;
