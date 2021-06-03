import React from 'react';
import styled from 'styled-components';
// import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function DevExperience(){
  return(
    <>
      <div id="projects-row"> {/* container */}

        <div className="row">
          <h1>My not professional development experience</h1>
        </div>
        <div className="row color-container" > {/* row */}
          <div className="col-6">
            <div className="row md-card" id="data-structures-project">
              <div className="">
                <h5 className="card-title">Data Structures & Algorithmes</h5>
                <p className="card-text">Here you can find the projects that was built during the Udacity Nanodegree in Data Structures & Algorithms.
                  In this program, I learned the concepts of the main data structures (arrays, linked lists, stacks, queues, recursion, trees, maps, 
                  hashing). Building real-life projects, like for instance, LRU cache, Huffman Coding, Blockchain and good application for recursions.
                  Also learned the importance of the Big O time and space complexity. And Algorithms like binary search, tries, heaps, heapify, 
                  sorting (bubble sort, merge sort, quick sort, heap sort) and solved known computer science problems projects like dutch national 
                  flag problem in a single traversal, autocomplete with tries, HTTP router with trie.
                  And got familiar with advanced algorithms concepts, like greedy, Dijkstra’s Algorithms, Graph and A*.
                  The language used in this course was python 3.7.  
                </p>
                <a href="https://github.com/PollyannaRibeiro/data-structures-and-algorithms">Link</a>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row md-card" id="react-Projects">
              <div className="">
                <h5 className="card-title">React-Projects</h5>
                <p className="card-text">This is an asynchronous request App made using AJAX with fetch. The two 
                  APIs used were The NY Times and Unsplash</p>
                <a href="https://github.com/PollyannaRibeiro/data-structures-and-algorithms">Link</a>
              </div>
            </div>
          </div> 
        </div>  {/* end of row */}

        <div className="row color-container" id="projects-row" > {/* row */}
          <div className="col-6">
            <div className="row md-card" id="data-structures-project">
              <div className="">
                <h5 className="card-title">Data Structures & Algorithmes</h5>
                <p className="card-text">Here you can find the projects that was built during the Udacity Nanodegree in Data Structures & Algorithms.
                  In this program, I learned the concepts of the main data structures (arrays, linked lists, stacks, queues, recursion, trees, maps, 
                  hashing). Building real-life projects, like for instance, LRU cache, Huffman Coding, Blockchain and good application for recursions.
                  Also learned the importance of the Big O time and space complexity. And Algorithms like binary search, tries, heaps, heapify, 
                  sorting (bubble sort, merge sort, quick sort, heap sort) and solved known computer science problems projects like dutch national 
                  flag problem in a single traversal, autocomplete with tries, HTTP router with trie.
                  And got familiar with advanced algorithms concepts, like greedy, Dijkstra’s Algorithms, Graph and A*.
                  The language used in this course was python 3.7.  
                </p>
                <a href="https://github.com/PollyannaRibeiro/data-structures-and-algorithms">Link</a>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row md-card" id="react-Projects">
              <div className="">
                <h5 className="card-title">React-Projects</h5>
                <p className="card-text">This is an asynchronous request App made using AJAX with fetch. The two 
                  APIs used were The NY Times and Unsplash</p>
                <a href="https://github.com/PollyannaRibeiro/data-structures-and-algorithms">Link</a>
              </div>
            </div>
          </div> 
        </div>  {/* end of row */}
         
      </div> {/* end of container */}

    </>
  )
}

export default DevExperience