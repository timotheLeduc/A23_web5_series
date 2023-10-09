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
import Recherche from "./Recherche";
import { useStorage } from "./hooks/useStorage";
import { useEffect } from 'react';

function App() {
 
  const [favoriteSeries, setFavoriteSeries] = useState([]);
  const [username, setUsername] = useState(null);
  const { saveToStorage, getFromStorage } = useStorage("posts-");
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const savedUser = getFromStorage("username");
    console.log("Saved User from localStorage:", savedUser);
    if (savedUser) {
      setUsername(savedUser);
    }
    setLoading(false);
  }, []);
  useEffect(() => {
    const savedLikes = getFromStorage("likes");
    console.log("Saved Likes from localStorage:", savedLikes);
    if (savedLikes) {
      setFavoriteSeries(savedLikes);
    }
    setLoading(false);
  }, []);

  if (loading) {
    // Show loading spinner or component while useEffect is running
    return null;
  }
  

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
      path: "login",
      element: <Login setUsername={setUsername} />
    },
    {
      path: "",
      element: username ? (
        <Layout username={username} favoriteSeries={favoriteSeries} />
      ) : (
        <Navigate to="/login" />
      ),
        children: [
            {
              path: "recherche",
              
            },
            // {
            //     index: true,
            //     element: <Navigate to={"/login"} replace/>
            // },
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