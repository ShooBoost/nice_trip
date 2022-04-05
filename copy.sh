#!/usr/bin/env sh

# 發生錯誤時執行終止指令
set -e

# 打包編譯
npm run build

# 移動到打包資料夾下
cd dist

cp index.html ./404.html

# git init
# git add -A
# git commit -m 'deploy'

# 除此之外，也可以改走 HTTPS 模式
# git push -f https://github.com/ShooBoost/nice_trip master:gh-pages

# cd -
