// import * as React from 'react';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org',
    author: 'Jordan Walke',
    num_comments: 0,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org',
    author: 'Dan Abramov',
    num_comments: 2,
    points: 5,
    objectID: 1,
  }
]
function App() {
  return (
          <div>
                  <h1>My Hacker Stories</h1>
                  <label htmlFor="search">Search: </label>
                  <input id="search" type="text" />
            <hr />
                  <ul>
                    {
                      list.map(function (item) {
                        return (
                          
                            <li key={item.objectID}>
                                <span>
                                  <a href={item.url}>{item.title}</a>
                                </span> 
                                <br /><span>Author: {item.author}</span>
                                <br /><span>Comments:{item.num_comments}</span>
                                <br /><span>Points:{item.points}</span>  
                            </li>
                            
                        );
                      })
                    }
                  </ul>
            <h2>Hello This is Another one </h2>
          </div>
  );
}
export default App;