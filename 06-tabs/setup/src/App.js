import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [objects, setObjects] = useState([]);
  const [compaines, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let [current, setCurrent] = useState(0);

  async function fetchData(link) {
    try {
      const request = await fetch(link);
      const data = await request.json();
      setObjects(data);
      setCompanies(data.map(c => c["company"]));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, []);

  if (isLoading) {
    return <h2>... Loading</h2>
  } else {
    return (
      <section className="section">
        <div className="title">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>
        <div className="jobs-center">
          <div className="btn-container">
            {compaines.map((c, index) => {
              return <button key={index} className={`job-btn ${current === index ? "active-btn" : ""}`} onClick={() => setCurrent(index)}>{c}</button>
            })}
          </div>
          <article className="job-info">
            <h3>{objects[current].title}</h3>
            <h4>{objects[current].company}</h4>
            <p className="job-date">{objects[current].dates}</p>
            {objects[current].duties.map((duty, index) => {
              return (
                <div key={index} className="job-desc">
                  <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                  <p>{duty}</p>
                </div>
              )
            })}
          </article>
        </div>
        <button className="btn">more info</button>
      </section>
    )
  }

}

export default App
