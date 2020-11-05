import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';

const Sort = () => {
    
    const code1 =
`// Init the package
const ObjectMds = require('object-mds')

// Create the array of objects
const myObject = [
    {name: 'C', job: 'Front End Engineer', number: 3},
    {name: 'A', job: 'Software engineer', number: 1},
    {name: 'H', job: 'Python developer', number: 8},
    {name: 'B', job: 'Back End', number: 2},
    {name: 'E', job: 'Hacker', number: 5},
    {name: 'D', job: 'Full Stack', number: 4},
    {name: 'G', job: 'Team leader', number: 7},
    {name: 'F', job: '', number: 6},
    {name: 'I', job: 'Full Stack', number: 9},
]

// Add the array of objects
const initObjectMds = new ObjectMds(myObject);

// Sort object by number and get the biggest numbers to smallest
initObjectMds.sort('number', -1)

// Get the values
console.log(initObjectMds.values())`

    const output1 = 
`[
  { name: 'I', job: 'Full Stack', number: 9 },
  { name: 'H', job: 'Python developer', number: 8 },
  { name: 'G', job: 'Team leader', number: 7 },
  { name: 'F', job: '', number: 6 },
  { name: 'E', job: 'Hacker', number: 5 },
  { name: 'D', job: 'Full Stack', number: 4 },
  { name: 'C', job: 'Front End Engineer', number: 3 },
  { name: 'B', job: 'Back End', number: 2 },
  { name: 'A', job: 'Software engineer', number: 1 }
]`


    const code2 =
`// Init the package
const ObjectMds = require('object-mds')

// Create the array of objects
const myObject = [
    {name: 'C', job: 'Front End Engineer', number: 3},
    {name: 'A', job: 'Software engineer', number: 1},
    {name: 'H', job: 'Python developer', number: 8},
    {name: 'B', job: 'Back End', number: 2},
    {name: 'E', job: 'Hacker', number: 5},
    {name: 'D', job: 'Full Stack', number: 4},
    {name: 'G', job: 'Team leader', number: 7},
    {name: 'F', job: '', number: 6},
    {name: 'I', job: 'Full Stack', number: 9},
]

// Add the array of objects
const initObjectMds = new ObjectMds(myObject);

// Sort object by number and get the smallest to biggest
initObjectMds.sort('number', 1)

// Get the values
console.log(initObjectMds.values())`

    const output2 = 
`[
  { name: 'A', job: 'Software engineer', number: 1 },
  { name: 'B', job: 'Back End', number: 2 },
  { name: 'C', job: 'Front End Engineer', number: 3 },
  { name: 'D', job: 'Full Stack', number: 4 },
  { name: 'E', job: 'Hacker', number: 5 },
  { name: 'F', job: '', number: 6 },
  { name: 'G', job: 'Team leader', number: 7 },
  { name: 'H', job: 'Python developer', number: 8 },
  { name: 'I', job: 'Full Stack', number: 9 }
]`

  return (
      <main className="px-4 sm:px-6 lg:px-8 mt-5 mb-5">
          <div>
              <h1 className="text-2xl p-4">Sort method</h1>
              <p className="text-gray-700 mt-3 p-4">Sort method use to sort numbers from biggest to smallest or from smallest to biggest</p>
              <div className="mt-5 bg-white border-gray-400 rounded-t-lg rounded-b-lg">
                  <div className="sm:w-7/12 p-4">
                      <p className="text-gray-700 border-l-4 border-gray-400 pl-2">
                          This method take 2 argument the first argument is name of the properties and 
                          second argument is the key, there are 2 key the first key is <span className="text-indigo-700">(1)</span> number one use to sort numbers from smallest to biggest,
                          second key is <span className="text-indigo-700">(-1)</span> and use to sort numbers from biggest to smallest
                      </p>
                      <p className="text-xl mt-5">Example</p>
                      <p className="text-gray-700 mt-1">Sorting from biggest to smallest</p>
                  </div>
                  <div className="">
                        <CodeMirror
                            value={code1}
                            options={{
                                theme: 'monokai',
                                keymap: 'sublim',
                                mode: 'jsx',
                                readOnly: true
                            }}
                        />
                  </div>
                  <div>
                      <p className="text-xl px-4 sm:px-6 lg:px-8 py-3">Output</p>
                      <CodeMirror className=""
                            value={output1}
                            options={{
                                theme: 'monokai',
                                keymap: 'sublim',
                                lineNumbers: false,
                                mode: 'jsx',
                                readOnly: true
                            }}
                        />
                  </div>
                  <p className="text-gray-700 mt-5 py-2 text-xl">Sorting from smallest to biggest</p>
                  <div>
                  <div className="">
                        <CodeMirror
                            value={code2}
                            options={{
                                theme: 'monokai',
                                keymap: 'sublim',
                                mode: 'jsx',
                                readOnly: true
                            }}
                        />
                  </div>
                  <div>
                    <p className="text-xl px-4 sm:px-6 lg:px-8 py-3">Output</p>
                      <CodeMirror className=""
                            value={output2}
                            options={{
                                theme: 'monokai',
                                keymap: 'sublim',
                                lineNumbers: false,
                                mode: 'jsx',
                                readOnly: true
                            }}
                        />
                  </div>
                  </div>
              </div>
          </div>
      </main>
  )
}

export default Sort;