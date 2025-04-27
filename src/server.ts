import express from 'express'

// アプリケーションオブジェクトの起動
const app = express()
const PORT = 3000

// リソースの読み込み
app.use(express.static('public'))

// サーバ起動
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
