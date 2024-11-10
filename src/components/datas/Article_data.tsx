const ARTICLE_DATA = [
  // 新しい記事を書くたびに上から項目を追加
  // 1
  {
    title: "TITLE_sample",
    date: [2024, 11, 10],
    latestUpdate: [2024, 11, 10],
    staff: "すずき",
    main: [
      {
        head: "HEAD1 / 大見出し",
        body: [
          {
            caption: "caption1.1 / 小見出し",
            text: "1.1",
          },
        ],
      },
      {
        head: "HEAD2",
        body: [
          {
            caption: "caption2.1",
            text: "2.1",
          },
          {
            caption: "caption2.2",
            text: "2.2",
          },
          {
            caption: "caption2.3",
            text: "2.3",
          },
        ],
      },
      {
        head: "HEAD3",
        body: [
          {
            caption: "caption3.1",
            text: "3.1",
          },
        ],
      },
    ],
  },

  // 0
  {
    title: "信州Charmの設立理由を紹介します！",
    date: [2024, 11, 9],
    latestUpdate: [2024, 11, 9],
    staff: "ひろむら",
    main: [
      {
        head: "WEBサイト開設！",
        body: [
          {
            caption: "",
            text: "この度、ウェブサイトを開設しました！\nここでは、信州Charmに関する最新情報や長野県をもっと知ることができる情報・コンテンツをお届けしていきます。",
          },
        ],
      },
      {
        head: "設立のきっかけ",
        body: [
          {
            caption: "信州Charmって？",
            text: "信州Charmは「長野県の大学生を信州人に」を目標に活動している団体です！",
          },
          {
            caption: "やりたいこと",
            text: "長野県の大学生の中で、県外出身者は約70％です。\nまた、長野県外で就職を希望している大学生の割合は約68％で、70％に近い状況となっています。\n実際、信州大学の卒業生の約60％が長野県外で就職をされており、長野県内での人材不足が深刻な問題となっています。",
          },
          {
            caption: "",
            text: "そこで、私たちはこの状況を変えたいとの思いから行動を起こすことにしました。長野県の大学の卒業生が長野県に就職や定住をすることを促し、長野県のさらなる発展に寄与したいと考えています。\nそのために長野県に来てよかったな、ここに住もうかな、このフリーペーパーを読んで生活が豊かになったなと思ってもらえるような情報を、長野県が大好きな同世代の私たちが発信しよう！と思い、フリーペーパー団体信州Charmを立ち上げました！",
          },
        ],
      },
      {
        head: "これから",
        body: [
          {
            caption: "",
            text: "ぜひ、定期的に信州Charmのウェブサイトをチェックしていただき、新しい情報を楽しんでください！\n今後とも、どうぞよろしくお願いいたします。",
          },
        ],
      },
    ],
  },
];

export { ARTICLE_DATA /*, Backnumber_list*/ };
