import React from 'react';

function DevExperience(){
  return(
    <>
      <div className="container" id="dev-projects"> {/* container */}
        <div className="row">
          <h1>My not professional development experience</h1>
        </div>
        <div className="row color-container" > {/* row */}
          <div className="col-12 col-md-12 col-lg-6 col-xl-6">
            <div className="row md-card" id="data-structures-project">
              <div className="">
                <h5 className="card-title">Data Structures & Algorithmes</h5>
                <p className="card-text">
                  Here you can find the projects that were built during the Udacity Nanodegree in Data Structures & Algorithms. 
                  In this program, I learned the concepts of the main data structures (arrays, linked lists, stacks, queues, recursion, trees, maps, 
                  hashing). Building real-life projects, like for instance, LRU cache, Huffman Coding, Blockchain, and good application for recursions. 
                  Also learned the importance of the Big O time and space complexity. And Algorithms like binary search, tries, heaps, heapify, sorting 
                  (bubble sort, merge sort, quick sort, heap sort) and solved known computer science problems projects like dutch national flag problem 
                  in a single traversal, autocomplete with tries, HTTP router with trie. And got familiar with advanced algorithms concepts, like greedy, 
                  Dijkstra’s Algorithms, Graph, and A*. The language used in this course was python 3.7. 
                </p>
                <a type="button" class="btn btn-outline-secondary " href="https://github.com/PollyannaRibeiro/data-structures-and-algorithms">Projects</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6 col-xl-6">
            <div className="row md-card" id="react-Projects">
              <div className="">
                <h5 className="card-title">React-Projects</h5>
                <p className="card-text">Here you can find some of the projects that were built during the Udacity Nanodegree in Web Development. 
                  I learned Web Foundations (HTML, CSS), JavaScript, Object-Oriented, ES6, Web Accessibility, Javascript Tools and Testing 
                  (Grunt and Gulp), Angular, AJAX, offline Apps with Service Worker, and React Fundaments (React's component model, learning 
                  to write declarative, composable user interfaces to build production-ready apps).
                </p>
                <a type="button" class="btn btn-outline-secondary align-bottom" href="https://github.com/PollyannaRibeiro/neighborhoodMap">Map Api Project</a>
                <a type="button" class="btn btn-outline-secondary align-bottom" href="https://github.com/PollyannaRibeiro/memory-game-react">Memory Game Project</a>
              </div>
            </div>
          </div> 
        </div>  {/* end of row */}
      </div> {/* end of container */}

    </>
  )
}

export default DevExperience