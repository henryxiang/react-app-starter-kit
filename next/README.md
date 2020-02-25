# React App with Next.js

## Getting Started

```bash
npm install --save next react react-dom

mkdir components pages

cat << EOF > components/App.js
export default ({ name = 'World' }) => (
  <div>{`Hello ${name}`}</div>
)
EOF

cat << EOF > pages/index.js
import App from '../components/App'
export default () => <App name="Mr. Anderson" />
EOF

./node_modules/.bin/next
```
