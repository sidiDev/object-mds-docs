import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';

const Skip = () => {
    
    const code =
`// Init the package
const ObjectMds = require('object-mds')

// Create the array of objects
const myObject = [
    {name: 'A', job: 'Software engineer', number: 1},
    {name: 'B', job: 'Back End', number: 2},
    {name: 'C', job: 'Front End Engineer', number: 3},
    {name: 'D', job: 'Full Stack', number: 4},
    {name: 'E', job: 'Hacker', number: 5},
    {name: 'F', job: '', number: 6},
    {name: 'G', job: 'Team leader', number: 7},
    {name: 'H', job: 'Python developer', number: 8},
    {name: 'I', job: 'Full Stack', number: 9}
]

// Add the array of objects
const initObjectMds = new ObjectMds(myObject)

// Skip 6 objects
initObjectMds.skip(6)

// Get the values
console.log(initObjectMds.values())`

    const output = 
`[
  { name: 'G', job: 'Team leader', number: 7 },
  { name: 'H', job: 'Python developer', number: 8 },
  { name: 'I', job: 'Full Stack', number: 9 }
]`

  return (
      <main className="px-4 sm:px-6 lg:px-8 mt-5 mb-5">
          <div>
              <h1 className="text-2xl p-4">Skip method</h1>
              <p className="text-gray-700 mt-3 p-4">Skip method use to skip specific number of objects</p>
              <div className="mt-5 bg-white border-gray-400 rounded-t-lg rounded-b-lg">
                  <div className="sm:w-7/12 p-4">
                      <p className="text-gray-700 border-l-4 border-gray-400 pl-2">
                          This method it's very simple and dosn't need explain
                      </p>
                      <p className="text-xl mt-5">Example</p>
                  </div>
                  <div className="">
                        <CodeMirror
                            value={code}
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
                            value={output}
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
      </main>
  )
}

export default Skip;