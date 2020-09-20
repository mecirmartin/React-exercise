import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const AppPreview = ({ code }) => (
  <LiveProvider code={code}>
    <LiveEditor />
    <LiveError />
    <LivePreview />
  </LiveProvider>
);

export default AppPreview;
