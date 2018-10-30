module.exports = {
  up: queryInterface => queryInterface.bulkInsert('post', [
    {
      id: 1,
      title: 'Title 1',
      prev: 'The hard truth of the matter is that 98% of blogs have pretty ordinary and recycled information.',
      body: 'Do you know what blogs are? If you don’t, then you’ve come to the right place. In the beginning, a blog was more of a personal diary that people shared online, and it goes back to 1994. In this online journal, you could talk about your daily life or share things you do. But, people saw an opportunity to communicate any information in a new way. So began the beautiful world of blogging.',
    },
    {
      id: 2,
      title: 'Title 2',
      prev: 'The hard truth of the matter is that 98% of blogs have pretty ordinary and recycled information.',
      body: 'Do you know what blogs are? If you don’t, then you’ve come to the right place. In the beginning, a blog was more of a personal diary that people shared online, and it goes back to 1994. In this online journal, you could talk about your daily life or share things you do. But, people saw an opportunity to communicate any information in a new way. So began the beautiful world of blogging.',
    },
    {
      id: 3,
      title: 'Title 3',
      prev: 'The hard truth of the matter is that 98% of blogs have pretty ordinary and recycled information.',
      body: 'Do you know what blogs are? If you don’t, then you’ve come to the right place. In the beginning, a blog was more of a personal diary that people shared online, and it goes back to 1994. In this online journal, you could talk about your daily life or share things you do. But, people saw an opportunity to communicate any information in a new way. So began the beautiful world of blogging.',
    },
    {
      id: 4,
      title: 'Title 4',
      prev: 'The hard truth of the matter is that 98% of blogs have pretty ordinary and recycled information.',
      body: 'Do you know what blogs are? If you don’t, then you’ve come to the right place. In the beginning, a blog was more of a personal diary that people shared online, and it goes back to 1994. In this online journal, you could talk about your daily life or share things you do. But, people saw an opportunity to communicate any information in a new way. So began the beautiful world of blogging.',
    },
    {
      id: 5,
      title: 'Title 5',
      prev: 'The hard truth of the matter is that 98% of blogs have pretty ordinary and recycled information.',
      body: 'Do you know what blogs are? If you don’t, then you’ve come to the right place. In the beginning, a blog was more of a personal diary that people shared online, and it goes back to 1994. In this online journal, you could talk about your daily life or share things you do. But, people saw an opportunity to communicate any information in a new way. So began the beautiful world of blogging.',
    },
    {
      id: 6,
      title: 'Title 6',
      prev: 'The hard truth of the matter is that 98% of blogs have pretty ordinary and recycled information.',
      body: 'Do you know what blogs are? If you don’t, then you’ve come to the right place. In the beginning, a blog was more of a personal diary that people shared online, and it goes back to 1994. In this online journal, you could talk about your daily life or share things you do. But, people saw an opportunity to communicate any information in a new way. So began the beautiful world of blogging.',
    },
    {
      id: 7,
      title: 'Title 7',
      prev: 'The hard truth of the matter is that 98% of blogs have pretty ordinary and recycled information.',
      body: 'Do you know what blogs are? If you don’t, then you’ve come to the right place. In the beginning, a blog was more of a personal diary that people shared online, and it goes back to 1994. In this online journal, you could talk about your daily life or share things you do. But, people saw an opportunity to communicate any information in a new way. So began the beautiful world of blogging.',
    },
    {
      id: 8,
      title: 'Title 8',
      prev: 'The hard truth of the matter is that 98% of blogs have pretty ordinary and recycled information.',
      body: 'Do you know what blogs are? If you don’t, then you’ve come to the right place. In the beginning, a blog was more of a personal diary that people shared online, and it goes back to 1994. In this online journal, you could talk about your daily life or share things you do. But, people saw an opportunity to communicate any information in a new way. So began the beautiful world of blogging.',
    },
    {
      id: 9,
      title: 'Title 9',
      prev: 'The hard truth of the matter is that 98% of blogs have pretty ordinary and recycled information.',
      body: 'Do you know what blogs are? If you don’t, then you’ve come to the right place. In the beginning, a blog was more of a personal diary that people shared online, and it goes back to 1994. In this online journal, you could talk about your daily life or share things you do. But, people saw an opportunity to communicate any information in a new way. So began the beautiful world of blogging.',
    },
    {
      id: 10,
      title: 'Title 10',
      prev: 'The hard truth of the matter is that 98% of blogs have pretty ordinary and recycled information.',
      body: 'Do you know what blogs are? If you don’t, then you’ve come to the right place. In the beginning, a blog was more of a personal diary that people shared online, and it goes back to 1994. In this online journal, you could talk about your daily life or share things you do. But, people saw an opportunity to communicate any information in a new way. So began the beautiful world of blogging.',
    },
    {
      id: 11,
      title: 'Title 11',
      prev: 'The hard truth of the matter is that 98% of blogs have pretty ordinary and recycled information.',
      body: 'Do you know what blogs are? If you don’t, then you’ve come to the right place. In the beginning, a blog was more of a personal diary that people shared online, and it goes back to 1994. In this online journal, you could talk about your daily life or share things you do. But, people saw an opportunity to communicate any information in a new way. So began the beautiful world of blogging.',
    },
    {
      id: 12,
      title: 'Title 12',
      prev: 'The hard truth of the matter is that 98% of blogs have pretty ordinary and recycled information.',
      body: 'Do you know what blogs are? If you don’t, then you’ve come to the right place. In the beginning, a blog was more of a personal diary that people shared online, and it goes back to 1994. In this online journal, you could talk about your daily life or share things you do. But, people saw an opportunity to communicate any information in a new way. So began the beautiful world of blogging.',
    },
  ]),

  down: queryInterface => queryInterface.bulkDelete('post', [
    {
      title: 'Title 1',
    },
    {
      title: 'Title 2',
    },
    {
      title: 'Title 3',
    },
    {
      title: 'Title 4',
    },
    {
      title: 'Title 5',
    },
    {
      title: 'Title 6',
    },
    {
      title: 'Title 7',
    },
    {
      title: 'Title 8',
    },
    {
      title: 'Title 9',
    },
    {
      title: 'Title 10',
    },
    {
      title: 'Title 11',
    },
    {
      title: 'Title 12',
    },
  ]),
};
