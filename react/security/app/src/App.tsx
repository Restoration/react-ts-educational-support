import React, { useState } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { FileEdit } from 'lucide-react';

function App(): React.ReactNode {
  const [markdown, setMarkdown] = useState<string>('# Hello World\n\nTry writing some markdown here!\n\n- List item 1\n- List item 2\n\n```js\nconsole.log("Hello!");\n```');

  const rawHtml = marked(markdown, { breaks: true });
  const sanitizedHtml = DOMPurify.sanitize(rawHtml as string);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <FileEdit className="w-6 h-6 text-indigo-600" />
          <h1 className="text-3xl font-bold text-gray-900">Markdown Editor</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Editor */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Editor</h2>
            <textarea
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              className="w-full h-[500px] p-4 border rounded-md font-mono text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Write your markdown here..."
            />
          </div>

          {/* Preview Section */}
          <div>
            {/* Sanitized Preview */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-lg font-semibold mb-4">Sanitized Preview (Safe)</h2>
              <div 
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
              />
            </div>

            {/* Raw Preview */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <span>Raw Preview (Unsafe)</span>
                <span className="ml-2 text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Not recommended for production</span>
              </h2>
              <div 
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: rawHtml as string }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;