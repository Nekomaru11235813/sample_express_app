import express from 'express'

// アプリケーションオブジェクトの起動
const app = express()
const PORT = 3000

// ルートエンドポイントの定義
app.get('/', (req, res) => {
  res.send('Hello, Express & TypeScript!')
})

// サーバ起動
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
