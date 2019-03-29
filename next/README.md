# React App with Next.js

## Getting Started

```bash
npm install --save next react react-dom
mkdir pages
cat << EOF > pages/index.js
export default (props) => (
  <div>Hello World!</div>
)
EOF
./node_modules/.bin/next
```
