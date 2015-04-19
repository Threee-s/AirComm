# FlashAir Communication

・準備
- node/npmをインストール
- yeoman(yo, bower, gruntなど)をインストール
- generator-angular-fullstackをインストール
* インストール方法は各HPかgoogleで検索すればいっぱい出てくる。

・ビルド
- git cloneでソースを取得
- bower installで関連lib取得
- grunt buildでデプロイ用一式作成
- dist/pulic/直下をすべてFlashAirの/SD_WLAN直下にコピー
  以下をやらないと上手くいかない(FlashAirの問題かも)
  - index.htmlをList.htmに変更
  - List.htm内のcss/jsのパスの先頭に/SD_WLAN/を追加
  - bower_componentsはコピーしなくても大きい問題ない。多分。
- /SD_WLAN/にPhotoとusersフォルダを作成し、それぞれに検索したユーザーavatar写真と.jsonを置く(lua仕事)
- http://hostname or ip/でWebサービス起動
* macの場合、.localをつける必要がある。
