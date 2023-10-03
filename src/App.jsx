import React, { Children, useState } from 'react';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navigation from './Navigation';
import './App.css';
import Trending from './Trending';
import Favorites from './Favorites';
import Login from './Login';
import seriesDetailsData from './series_etape2_details.json';
import seriesListData from './series_etape2_list.json';
import DetailsSerie from './DetailsSerie';
import Layout from './Layout'; 

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [favoriteSeries, setFavoriteSeries] = useState([]);
  const [username, setUsername] = useState(null);

  const addToFavorites = (serie) => {
    if (!favoriteSeries.find((favorite) => favorite.id === serie.id)) {
      setFavoriteSeries((prevFavorites) => {
        const newFavorites = [...prevFavorites, serie];
        console.log(prevFavorites);
        favoriteSeries
        return newFavorites;
      });
    }
    console.log(favoriteSeries.length);
  };

  const removeFromFavorites = (serie) => {
    setFavoriteSeries((prevFavorites) => {
      const newFavorites = prevFavorites.filter((favorite) => favorite.id !== serie.id);
      console.log(newFavorites);
      return newFavorites;
    });
  };
  const routes = [
    {
        path: "",
        element: <Layout username={username} favoriteSeries={favoriteSeries}/>,
        children: [
            {
                index: true,
                element: <Navigate to={"/login"} replace/>
            },
            {
                path: "login",
                element: <Login setUsername={setUsername} />
            },
            {
                path: "series-trending",
                element: <Trending
                seriesData={seriesListData}
                seriesDetailsData={seriesDetailsData}
                addToFavorites={addToFavorites}
                removeFromFavorites={removeFromFavorites}
                favoriteSeries={favoriteSeries}
                // isFavorite={false}
                sectionType = "trending"
              />,
              children: [
                {
                  path:":id",
                  element:<DetailsSerie
                  seriesData={seriesDetailsData} 
                  addToFavorites={addToFavorites}
                  removeFromFavorites={removeFromFavorites}
                  favoriteSeries={favoriteSeries}

                />
                }
              ]
            },
            {
                path: "series-favorites",
                element: <Favorites
                seriesData={favoriteSeries}
                seriesDetailsData={seriesDetailsData}
                addToFavorites={addToFavorites}
                removeFromFavorites={removeFromFavorites}
                favoriteSeries={favoriteSeries}
                isFavorite={true}
                sectionType = "favorite"
              />,
              children: [
                {
                  path: ":id",
                  element: (
                    <DetailsSerie
                      seriesData={seriesDetailsData}
                      addToFavorites={addToFavorites}
                      removeFromFavorites={removeFromFavorites}
                      favoriteSeries={favoriteSeries} // Make sure favoriteSeries is passed here
                    />
                  )
                }
                
              ]
            }
        ]
    }
];

return (
  <RouterProvider router={createBrowserRouter(routes)} />
);
}

export default App;
{/* <Router>
        <div className="App">
          <Layout  children = {Children} favoriteSeries={favoriteSeries} username={username}> 
          <Routes>

          <Route>
            <Route/>
          </Route>

            <Route path="" element={<Login setUsername={setUsername} />} />
            <Route
              path="series-trending"
              element={
                <Trending
                  seriesData={seriesListData}
                  seriesDetailsData={seriesDetailsData}
                  addToFavorites={addToFavorites}
                  removeFromFavorites={removeFromFavorites}
                  favoriteSeries={favoriteSeries}
                  isFavorite={false}
                />
              }
            />
  
            <Route
              path=":id"
              element={
                <DetailsSerie
                  seriesData={seriesDetailsData} 
                  addToFavorites={addToFavorites}
                  removeFromFavorites={removeFromFavorites}
                />
              }
            />
            <Route
              path="series-favorites"
              element={
                <Favorites
                  seriesData={favoriteSeries}
                  seriesDetailsData={seriesDetailsData}
                  addToFavorites={addToFavorites}
                  removeFromFavorites={removeFromFavorites}
                  favoriteSeries={favoriteSeries}
                  isFavorite={true}
                />
              }
            />
            
            <Route
              path="series-favorites/:id"
              element={
                <DetailsSerie
                  seriesData={seriesDetailsData}
                  addToFavorites={addToFavorites}
                  removeFromFavorites={removeFromFavorites}
                />
              }
            />
          </Routes>
        </Layout>
        </div>
      </Router> */}