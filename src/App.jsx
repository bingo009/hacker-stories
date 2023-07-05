//  import * as React from 'react';


const List = props =>
    props.list.map(item => (
  <div key={item.objectID}>
          <span>
          <a href={item.url}>{item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
  </div>
));
const Search = () => {
  return (
        <div>
            <h1>My Hacker Stories</h1>
            <label htmlFor="search">Search: </label>
            <input id="search" type="text" />
        </div>
  )
}

const App = () => {
  const stories = [
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
  
  return (
          <div>
            <Search/>
            <hr />
            <List list={stories}/>
          </div>
          
  );
}
export default App;