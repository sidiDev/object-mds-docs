import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';

const Installation = () => {

    const code = `
// Init the package
const ObjectMds = require('object-mds')

const initObjectMds = new ObjectMds()`
    return (
        <section className="mt-16 mb-5" id="installation">
            <div className="px-4 sm:px-6 lg:px-8">
                <h3 className="text-2xl inline-block border-indigo-600 text-gray-800">Installation</h3>
                <p className="text-gray-700">Quick start guide for installing object-mds package.</p>
                <div className="mt-5">
                    <div className="mt-10">
                        <div className="flex items-center">
                            <span className="bg-gray-300 block w-8 h-8 rounded-full flex justify-center items-center">1</span>
                            <p className="text-gray-800 ml-3 font-mono">Install object-mds via npm</p>
                        </div>
                        <div className="bg-gray-800 p-3 text-white mt-4 rounded font-mono">
                            npm install object-mds
                        </div>
                    </div>
                    <div className="flex items-center mt-4">
                        <span className="bg-gray-300 block w-8 h-8 rounded-full flex justify-center items-center">2</span>
                        <p className="text-gray-800 ml-3 font-mono">Install object-mds via github</p>
                    </div>
                </div>
                <div className="mt-5">
                    <h3 className="text-2xl inline-block border-indigo-600 text-gray-800">Initialize the project</h3>
                    <div className="mt-3">
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

                </div>
            </div>
        </section>
    )
}

export default Installation