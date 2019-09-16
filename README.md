# aws-study-group
aws-study-group
## 勉強会資料

### Day0. 事前準備

#### AWS

[AWS アカウント作成の流れ | AWS](https://aws.amazon.com/jp/register-flow/)


[AWSアカウントを取得したら速攻でやっておくべき初期設定まとめ](https://qiita.com/tmknom/items/303db2d1d928db720888)

#### Webについて

- [今更聞けない！Webサーバーの仕組みと構築方法](https://eng-entrance.com/web-server-mechanism)

- [HTTPとPOSTとGET](https://qiita.com/Sekky0905/items/dff3d0da059d6f5bfabf)

- [Web APIとは何なのか](https://qiita.com/NagaokaKenichi/items/df4c8455ab527aeacf02)

- [JSONについて調べてみた](https://qiita.com/chihiro/items/dd1912c1406dbfe16b72)

<BR>

### Day1. APIを使ってみよう
以下の資料参照

https://github.com/polythenepan/aws-study-group/tree/master/day1

<BR>

### Day2. APIを作ってみよう
- [講義資料:Day2: APIを作成しよう](https://qiita.com/polythenepan/private/0c9749adae67b2f04909)

- [Day2 演習問題回答例](https://qiita.com/polythenepan/private/a587a9524184720a8cc5)

- [Day2 参考1 ステータスコードとエラーハンドリング](https://qiita.com/polythenepan/private/e6009dcebd74edc158a8)

- [Day2 参考2 便利なライブラリの活用 Flask-RESTful](https://qiita.com/polythenepan/private/ae2d3958b4aedf19cc60)

- [Day2 参考3 DBの使用 Cloud9 - MySQLの基本操作](https://qiita.com/polythenepan/private/e2787bbb77b81c870bae)
<BR>

##### TBD

- Day2 参考3 DBの使用 Cloud9 - PythonでMySQLを使う

- Day2 参考3 DBの使用 Cloud9 - ORM(SQLAlchemy)の活用

- Day2 参考3 DBの使用 Cloud9・EC2 - RDSとの接続 

<BR>

### Day3. サーバを作ってみよう
- [AWSで基盤お試し構築~VPC~](https://qiita.com/akhkyamada/private/a2fc86cc293120ed0071)

- [AWSで基盤お試し構築~サブネットとインターネットゲートウェイ~](https://qiita.com/akhkyamada/private/46ca032700427474a780)

- [AWSで基盤お試し構築~セキュリティグループ&EC2~](https://qiita.com/akhkyamada/private/67b582e49fa1def99bb8)

- [AWSで基盤お試し構築~サーバでコマンドを叩ける環境を作る~](https://qiita.com/akhkyamada/private/d19eb20014d1b4529625)

- [AWSで基盤お試し構築~nginxで遊ぶ~](https://qiita.com/akhkyamada/private/dd2486330316a499ff9f)

- [AWSで基盤お試し構築~RDS~](https://qiita.com/akhkyamada/private/f2cca17e88b492887e39)

- [EC2 python3 install & alias](https://qiita.com/akhkyamada/private/513aa19c23563cbea573)

<BR>

### Day4. サーバにAPIをリリースしよう
- [Day4 Gitの活用](https://qiita.com/polythenepan/private/9d9bbb83517534c86dd0)

- [Day4 リリースの実行](https://qiita.com/polythenepan/private/84b15c52c80d5f7698eb)

- [Day4 pipのインストール](https://qiita.com/polythenepan/private/9d38433b669fab54552e)

##### TBD

- Day2 参考1 デプロイ用にリポジトリを整理する

- Day2 参考2 AWSのサービスを活用した自動デプロイ

<BR>

## 参考書籍

### Webについて

- [イラスト図解式 この一冊で全部わかるWeb技術の基本(Amazon)](https://www.amazon.co.jp/%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%E5%9B%B3%E8%A7%A3%E5%BC%8F-%E3%81%93%E3%81%AE%E4%B8%80%E5%86%8A%E3%81%A7%E5%85%A8%E9%83%A8%E3%82%8F%E3%81%8B%E3%82%8BWeb%E6%8A%80%E8%A1%93%E3%81%AE%E5%9F%BA%E6%9C%AC-%E5%B0%8F%E6%9E%97-%E6%81%AD%E5%B9%B3-ebook/dp/B06XNMMC9S)  
Web関連の技術について簡潔にまとめられた書籍。

### Python

- [書籍]独学プログラマー Python言語の基本から仕事のやり方まで    
Pythonの基本文法からBash、リポジトリ管理の仕方まで幅広いトピックについて学べる１冊  
[Amazon](https://www.amazon.co.jp/%E7%8B%AC%E5%AD%A6%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC-Python%E8%A8%80%E8%AA%9E%E3%81%AE%E5%9F%BA%E6%9C%AC%E3%81%8B%E3%82%89%E4%BB%95%E4%BA%8B%E3%81%AE%E3%82%84%E3%82%8A%E6%96%B9%E3%81%BE%E3%81%A7-%E3%82%B3%E3%83%BC%E3%83%AA%E3%83%BC%E3%83%BB%E3%82%A2%E3%83%AB%E3%82%BD%E3%83%95/dp/4822292274)

- [書籍]入門 Python 3  
Pythonの文法についてかなり包括的に触れられている本。  
タイトルに入門と書いてあるが実際には入門者向けではないと思われるので、注意。  
ページ数もかなり多いので、リファレンス的に使ったほうがいいかもしれない。  
[Oreilly](https://www.oreilly.co.jp/books/9784873117386/)

- [オンライン講座]Intro to Computer Science  
Pythonを使ってWebクローラーを作りながらComputer Scienceの基本概念について学ぶことができる  
[Udacity](https://www.udacity.com/course/intro-to-computer-science--cs101)

### Python Scraping

- [書籍]Pythonクローリング&スクレイピング[増補改訂版] -データ収集・解析のための実践開発ガイド  
スクレイピングについて一通りのこと(簡単なスクレイピングから本格的なクローラーの運用まで)が学べる本。
若干小難しい記述もあるが、日本語の情報を取り扱う場合にはエンコーディングの問題もあるので、  
一冊は日本語で書かれた本を読むことをオススメする。  
[Amazon](https://www.amazon.co.jp/Python%E3%82%AF%E3%83%AD%E3%83%BC%E3%83%AA%E3%83%B3%E3%82%B0-%E3%82%B9%E3%82%AF%E3%83%AC%E3%82%A4%E3%83%94%E3%83%B3%E3%82%B0-%E5%A2%97%E8%A3%9C%E6%94%B9%E8%A8%82%E7%89%88-%E3%83%87%E3%83%BC%E3%82%BF%E5%8F%8E%E9%9B%86%E3%83%BB%E8%A7%A3%E6%9E%90%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE%E5%AE%9F%E8%B7%B5%E9%96%8B%E7%99%BA%E3%82%AC%E3%82%A4%E3%83%89-%E5%8A%A0%E8%97%A4/dp/4297107384/ref=pd_sbs_14_6/358-0627238-6954057?_encoding=UTF8&pd_rd_i=4297107384&pd_rd_r=740e2ed0-9911-474c-b5a9-5968b4061201&pd_rd_w=iV9jf&pd_rd_wg=FbjM5&pf_rd_p=ad2ea29d-ea11-483c-9db2-6b5875bb9b73&pf_rd_r=CMYY6PYSVE0K66GP9P77&psc=1&refRID=CMYY6PYSVE0K66GP9P77)

- [書籍]Web Scraping with Python: Collecting More Data from the Modern Web - 2nd Edition  
英語(日本語版もあるが、翻訳がいまいちっぽい)。  
取り扱っている情報は上記の本 +α ぐらいだが、説明が簡潔で話の進め方もよく、個人的にはこちらの方がわかりやすかった。  
[Amazon](https://www.amazon.co.jp/Web-Scraping-Python-Collecting-Modern/dp/1491985577/ref=sr_1_2?qid=1564578793&refinements=p_27%3ARyan+Mitchell&s=books&sr=1-2)



### API
- [書籍]Web API: The Good Parts
Web APIの設計や運用について書かれた本。  
エンドポイント、レスポンスデータ、セキュリティ等、実際にAPIを作る時に必ず必要になる要素をどう設計すればいいか
ベストプラクティスが学べる。  
[Oreilly](https://www.oreilly.co.jp/books/9784873116860/)

### Flask
Flaskは日本語の書籍等でよさそうなのが見つかっていないので良いのを見つけたら教えてほしいです..

- [オンライン講座]REST APIs with Flask and Python  
Pythonの基本からFlaskでのREST APIの作り方、DBの使い方、認証の仕方等順を追って教えてくれる。  
英語字幕あり。  
[Udemy](https://www.udemy.com/course/rest-api-flask-and-python/)

- [書籍]Flask Web Development: Developing Web Applications with Python  
取り扱っている内容は上記のオンライン講座より幅広く深いので、先にFlaskの概要をつかんでから読むことを推奨。  
日本語訳はなさそう？  
[Amazon](https://www.amazon.co.jp/Flask-Web-Development-Developing-Applications/dp/1491991739/ref=dp_ob_title_bk)


### マイクロサービス

[マイクロサービスを一言で表すと何なのか](https://qiita.com/qsona/items/d879f5e1f12cb6499987)

[マイクロサービスアーキテクチャと技術選定](http://tech.f-scratch.co.jp/entry/2018/01/05/%E3%83%9E%E3%82%A4%E3%82%AF%E3%83%AD%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%82%A2%E3%83%BC%E3%82%AD%E3%83%86%E3%82%AF%E3%83%81%E3%83%A3%E3%81%A8%E6%8A%80%E8%A1%93%E9%81%B8%E5%AE%9A)
