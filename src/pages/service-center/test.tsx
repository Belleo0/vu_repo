const data = [
  { no: 9, title: 'Silent Sonata', reg_dtm: '2021.03.10' },
  { no: 18, title: 'Sgt. Kabukiman N.Y.P.D.', reg_dtm: '2021.09.04' },
  { no: 31, title: 'Stroszek', reg_dtm: '2021.15.10' },
  { no: 14, title: 'My Blue Heaven', reg_dtm: '2020.16.10' },
  { no: 31, title: 'Escape From Tomorrow', reg_dtm: '2022.09.06' },
  { no: 22, title: 'Distant (Uzak)', reg_dtm: '2020.26.09' },
  { no: 6, title: 'My Favorite Season', reg_dtm: '2021.04.06' },
  { no: 6, title: 'Science and Islam', reg_dtm: '2020.16.09' },
  { no: 27, title: 'Coven', reg_dtm: '2021.18.11' },
  { no: 32, title: 'Urban Menace', reg_dtm: '2020.01.09' },
  { no: 16, title: 'Searching for Bobby Fischer', reg_dtm: '2021.23.10' },
  { no: 16, title: 'Bye Bye, Love', reg_dtm: '2020.04.09' },
  { no: 18, title: 'Mein Kampf', reg_dtm: '2020.04.09' },
  { no: 4, title: "White Men Can't Jump", reg_dtm: '2021.15.01' },
  { no: 7, title: 'Prince Avalanche', reg_dtm: '2020.20.12' },
  { no: 18, title: "Mr. Holland's Opus", reg_dtm: '2020.20.08' },
  { no: 12, title: 'Dirty Love', reg_dtm: '2022.29.05' },
  { no: 29, title: 'Girls Gone Dead', reg_dtm: '2021.16.03' },
  {
    no: 35,
    title: 'Ebola Syndrome, The (Yi boh laai beng duk)',
    reg_dtm: '2020.17.08',
  },
  { no: 15, title: 'Candyman 3: Day of the Dead', reg_dtm: '2021.04.02' },
  { no: 5, title: 'Grace of Monaco', reg_dtm: '2021.11.04' },
  { no: 21, title: 'Expecting a Miracle', reg_dtm: '2021.28.04' },
  { no: 12, title: 'Fitzcarraldo', reg_dtm: '2021.17.07' },
  { no: 30, title: 'Father Takes a Wife', reg_dtm: '2020.20.11' },
  { no: 16, title: 'David and Lisa', reg_dtm: '2022.12.03' },
  { no: 13, title: 'Liberty Heights', reg_dtm: '2021.10.03' },
  { no: 6, title: 'Envy', reg_dtm: '2021.14.09' },
  { no: 25, title: 'Raisin in the Sun, A', reg_dtm: '2021.16.08' },
  { no: 7, title: 'Moonlight Serenade', reg_dtm: '2020.09.11' },
  { no: 15, title: 'Candyman 3: Day of the Dead', reg_dtm: '2021.04.02' },
  { no: 5, title: 'Grace of Monaco', reg_dtm: '2021.11.04' },
  { no: 21, title: 'Expecting a Miracle', reg_dtm: '2021.28.04' },
  { no: 12, title: 'Fitzcarraldo', reg_dtm: '2021.17.07' },
  { no: 30, title: 'Father Takes a Wife', reg_dtm: '2020.20.11' },
  { no: 16, title: 'David and Lisa', reg_dtm: '2022.12.03' },
  { no: 13, title: 'Liberty Heights', reg_dtm: '2021.10.03' },
  { no: 6, title: 'Envy', reg_dtm: '2021.14.09' },
  { no: 25, title: 'Raisin in the Sun, A', reg_dtm: '2021.16.08' },
  { no: 7, title: 'Moonlight Serenade', reg_dtm: '2020.09.11' },
  { no: 15, title: 'Candyman 3: Day of the Dead', reg_dtm: '2021.04.02' },
  { no: 5, title: 'Grace of Monaco', reg_dtm: '2021.11.04' },
  { no: 21, title: 'Expecting a Miracle', reg_dtm: '2021.28.04' },
  { no: 12, title: 'Fitzcarraldo', reg_dtm: '2021.17.07' },
  { no: 30, title: 'Father Takes a Wife', reg_dtm: '2020.20.11' },
  { no: 16, title: 'David and Lisa', reg_dtm: '2022.12.03' },
  { no: 13, title: 'Liberty Heights', reg_dtm: '2021.10.03' },
  { no: 6, title: 'Envy', reg_dtm: '2021.14.09' },
  { no: 25, title: 'Raisin in the Sun, A', reg_dtm: '2021.16.08' },
  { no: 7, title: 'Moonlight Serenade', reg_dtm: '2020.09.11' },
  { no: 15, title: 'Candyman 3: Day of the Dead', reg_dtm: '2021.04.02' },
  { no: 5, title: 'Grace of Monaco', reg_dtm: '2021.11.04' },
  { no: 21, title: 'Expecting a Miracle', reg_dtm: '2021.28.04' },
  { no: 12, title: 'Fitzcarraldo', reg_dtm: '2021.17.07' },
  { no: 30, title: 'Father Takes a Wife', reg_dtm: '2020.20.11' },
  { no: 16, title: 'David and Lisa', reg_dtm: '2022.12.03' },
  { no: 13, title: 'Liberty Heights', reg_dtm: '2021.10.03' },
  { no: 6, title: 'Envy', reg_dtm: '2021.14.09' },
  { no: 25, title: 'Raisin in the Sun, A', reg_dtm: '2021.16.08' },
  { no: 7, title: 'Moonlight Serenade', reg_dtm: '2020.09.11' },
  { no: 15, title: 'Candyman 3: Day of the Dead', reg_dtm: '2021.04.02' },
  { no: 5, title: 'Grace of Monaco', reg_dtm: '2021.11.04' },
  { no: 21, title: 'Expecting a Miracle', reg_dtm: '2021.28.04' },
  { no: 12, title: 'Fitzcarraldo', reg_dtm: '2021.17.07' },
  { no: 30, title: 'Father Takes a Wife', reg_dtm: '2020.20.11' },
  { no: 16, title: 'David and Lisa', reg_dtm: '2022.12.03' },
  { no: 13, title: 'Liberty Heights', reg_dtm: '2021.10.03' },
  { no: 6, title: 'Envy', reg_dtm: '2021.14.09' },
  { no: 25, title: 'Raisin in the Sun, A', reg_dtm: '2021.16.08' },
  { no: 7, title: 'Moonlight Serenade', reg_dtm: '2020.09.11' },
  { no: 36, title: 'Inbetween Worlds', reg_dtm: '2021.31.03' },
  { no: 9, title: 'Just Cause', reg_dtm: '2022.12.01' },
  {
    no: 23,
    title: 'Only Son, The (Hitori musuko)',
    reg_dtm: '2022.05.04',
  },
  { no: 12, title: 'Ghostbusters II', reg_dtm: '2021.14.04' },
  {
    no: 10,
    title: 'Crows Zero II (Kur??zu Zero II)',
    reg_dtm: '2022.03.04',
  },
  {
    no: 29,
    title: 'Cost of Living, The (Le co??t de la vie)',
    reg_dtm: '2021.14.09',
  },
  {
    no: 33,
    title: 'Secret Adventures of Gustave Klopp, The (Narco)',
    reg_dtm: '2021.30.04',
  },
];
export const temp_data = data.sort(function (a, b) {
  return a.no < b.no ? 1 : -1;
});
