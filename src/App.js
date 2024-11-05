import './App.css';
import {useState} from "react";

function App() {
  let arr=
    [
    
        { date: "2022-09-01", views: 100, article: "Article 1" },
    
        { date: "2023-09-01", views: 100, article: "Article 1" },
    
        { date: "2023-09-02", views: 150, article: "Article 2" },
    
        { date: "2023-09-02", views: 120, article: "Article 3" },
    
        { date: "2020-09-03", views: 200, article: "Article 4" }
    
    
    
    ]

    const [intialArr,setInitialarr]=useState(arr);

    const sortDate=()=>{
        
        const sortedArr = [...intialArr].sort((a, b) => {
          if(new Date(a.date)==new Date(b.date))
          {
            return b.views-a.views
          }
          else
            return new Date(b.date) - new Date(a.date)
        });
        setInitialarr(sortedArr);
    }

    const sortview=()=>{
        
      const sortedArr = [...intialArr].sort((a, b) => {
        if( b.views==a.views)
        {
         
          return new Date(b.date) - new Date(a.date)
        }
        else
          return b.views-a.views
      });
      setInitialarr(sortedArr);
  }
  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <div>
      <button onClick={sortDate}>Sort by Date</button>
      <button onClick={sortview}>Sort by Views</button>
      </div>
      <div>
      <table>
        <thead>
        <tr>
          <th>
            Date
          </th>
          <th>
            Views
          </th>
          <th>
            Article
          </th>

        </tr>
        </thead>

        <tbody>
          {intialArr.map((item,index)=>(
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>

      </table>
      </div>
    </div>
  );
}

export default App;
