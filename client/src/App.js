import React, { useRef } from "react";
import Editor from "@monaco-editor/react";
import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';
import { MonacoBinding } from 'y-monaco';
import { FileUploader } from './components/Uppy.js';

function App() {
  const editorRef = useRef(null);
  const ydocument = new Y.Doc();
  const provider = new WebsocketProvider(`ws://localhost:1234`, 'monaco', ydocument);
  const type = ydocument.getText('monaco');

  function handleEditorDidMount(editor, monaco) {
    // here is the editor instance
    // you can store it in `useRef` for further usage
    editorRef.current = editor; 
    const monacoBinding = new MonacoBinding(type, editorRef.current.getModel(), new Set([editorRef.current]), provider.awareness);
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
