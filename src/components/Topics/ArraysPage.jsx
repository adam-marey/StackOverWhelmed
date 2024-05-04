import React from 'react';
import CodeSnippet from '../CodeSnippet';

const ArrayPage = () => {
  const javascriptCode = `const greeting = "Hello, world!";`;
  const pythonCode = `print("Hello, world!")`;
  const CCode = `#include <stdio.h>\n\nint main() {\n    printf("%s", "Hello, world!");\n    return 0;\n}`;

  return (
    <div>
      <h2>JavaScript Code</h2>
      <CodeSnippet code={javascriptCode} language="javascript" />

      <h2>Python Code</h2>
      <CodeSnippet code={pythonCode} language="python" />

      <h2>C# code</h2>
      <CodeSnippet code={CCode} language="C++" />
    </div>
  );
};

export default ArrayPage;
