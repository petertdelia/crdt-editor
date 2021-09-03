import React, { useRef } from "react";
import Editor from "@monaco-editor/react";
import { MonacoBinding } from 'y-monaco';
import { FileUploader } from './components/Uppy.js';

function App() {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    // here is the editor instance
    // you can store it in `useRef` for further usage
    editorRef.current = editor; 
  }

  return (
    <>
    <Editor
      height="90vh"
      defaultLanguage="javascript"
      defaultValue="// some comment"
      onMount={handleEditorDidMount}
    />
    <FileUploader />
    </>
  );
}

export default App;
