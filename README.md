<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome file</title>
  <link rel="stylesheet" href="https://stackedit.io/style.css" />
</head>

<body class="stackedit">
  <div class="stackedit__html"><p>**# Product App</p>
<p>A simple React application that allows users to add product names and displays them in a list. This app demonstrates the usage of React with TypeScript, integration with a mock API using MSW,  and unit testing with React Testing Library.</p>
<h2 id="home-page">Home Page</h2>
<p><a target="_blank" href="https://imageupload.io/5xHYdvZUkXfYYsS"><img src="https://imageupload.io/ib/x9IPsdQaLrsx9hV_1697894713.png" alt="Screenshot (651).png"></a></p>
<h2 id="view-page">View Page</h2>
<p><a target="_blank" href="https://imageupload.io/qtQqmOYCRj4qYvM"><img src="https://imageupload.io/ib/5DQ5fcNvhel4X1V_1697894753.png" alt="Screenshot (652).png"></a></p>
<h2 id="prerequisites">Prerequisites</h2>
<ul>
<li>
<p>Node.js installed on your system</p>
</li>
<li>
<p>Git (optional)</p>
</li>
</ul>
<h2 id="installation">Installation</h2>
<ol>
<li>Clone the repository to your local machine (or download the ZIP file and extract it):</li>
</ol>
<pre class=" language-sh"><code class="prism  language-sh">
git clone &lt;repository-url&gt;

</code></pre>
<ol start="2">
<li>Navigate to the project directory:</li>
</ol>
<pre class=" language-sh"><code class="prism  language-sh">
cd product-app

</code></pre>
<ol start="3">
<li>Install dependencies using npm or yarn:</li>
</ol>
<pre class=" language-sh"><code class="prism  language-sh">
npm install

# or

yarn install

</code></pre>
<h2 id="usage">Usage</h2>
<h3 id="running-the-application">Running the Application</h3>
<ol>
<li>Start the development server:</li>
</ol>
<pre class=" language-sh"><code class="prism  language-sh">
npm start

# or

yarn start

</code></pre>
<ol start="2">
<li>Open your browser and go to <code>http://localhost:3000</code> to view the application.</li>
</ol>
<h3 id="project-structure">Project Structure</h3>
<ul>
<li>
<p><strong><code>src/</code></strong>: Contains the source code of the application.</p>
</li>
<li>
<p><strong><code>components/</code></strong>: Reusable UI components.</p>
</li>
<li>
<p><strong><code>App.tsx</code></strong>: Main application component.</p>
</li>
<li>
<p><strong><code>index.tsx</code></strong>: Entry point of the application.</p>
<p><strong><code>public/</code></strong>: Static assets and HTML template.</p>
</li>
<li>
<p><strong><code>mocks/</code></strong>: MSW mock API handlers.</p>
</li>
</ul>
<h3 id="dependencies">Dependencies</h3>
<ul>
<li>
<p><strong><code>@reduxjs/toolkit</code></strong>: Redux toolkit for efficient Redux development (optional).</p>
</li>
<li>
<p><strong><code>axios</code></strong>: HTTP client for making API requests.</p>
</li>
<li>
<p><strong><code>msw</code></strong>: Mock Service Worker for intercepting and mocking API requests in development.</p>
</li>
<li>
<p><strong><code>react-router-dom</code></strong>: React router for managing navigation in the application.</p>
</li>
<li>
<p><strong><code>react-redux</code></strong>: Official React bindings for Redux (optional).</p>
</li>
<li>
<p><strong><code>@testing-library/react</code></strong>: Testing utilities for React applications.</p>
</li>
<li>
<p><strong><code>@types/jest</code></strong>, <strong><code>@types/react</code></strong>, <strong><code>@types/react-dom</code></strong>: Type definitions for Jest and React.</p>
</li>
</ul>
<h3 id="running-unit-tests">Running Unit Tests</h3>
<p>Run unit tests using the following command:</p>
<pre class=" language-sh"><code class="prism  language-sh">
npm  test

# or

yarn  test

</code></pre>
<p>This will execute all the tests and provide feedback on the test coverage and results.</p>
</div>
</body>

</html>
