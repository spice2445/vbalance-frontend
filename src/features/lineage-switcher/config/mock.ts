import { LineageUser } from './type';

const invitedUsers: Record<number, LineageUser[] > = {
  // 1: [
  //   {
  //     id: '4',
  //     avatar: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Dr._Dre_in_2011.jpg',
  //     name: 'Dr Dre',
  //     status: 'Мастер',
  //     statisticInvited: {
  //       all: 9,
  //       direct: 9
  //     },
  //     invitedId: ['7', '10']
  //   },
  //   {
  //     id: '15',
  //     avatar: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Dr._Dre_in_2011.jpg',
  //     name: '50 cent',
  //     status: 'Мастер',
  //     statisticInvited: {
  //       all: 8,
  //       direct: 90
  //     },
  //     invitedId: ['20', '18']
  //   }
  // ],
  // 2: [{
  //   id: '5',
  //   avatar: 'https://img.gazeta.ru/files3/955/15744955/rap-pic_32ratio_900x600-900x600-66988.jpg',
  //   name: 'Дима',
  //   status: 'Мастер',
  //   statisticInvited: {
  //     all: 0,
  //     direct: 0
  //   },
  //   invitedId: ['8', '11']
  // }],
  // 3: [{
  //   id: '6',
  //   avatar: 'https://www.factroom.ru/wp-content/uploads/2019/03/kogo-my-oshibochno-prinimaem-za-cygan.jpg',
  //   name: 'Мики цыган',
  //   status: 'Мастер III',
  //   statisticInvited: {
  //     all: 8,
  //     direct: 0
  //   },
  //   invitedId: ['9']
  // }],

  // 4: [
  //   {
  //     id: '7',
  //     avatar: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Dr._Dre_in_2011.jpg',
  //     name: 'Dr Dre2',
  //     status: 'Мастер',
  //     statisticInvited: {
  //       all: 89,
  //       direct: 907
  //     },
  //     invitedId: []
  //   },
  //   {
  //     id: '10',
  //     avatar: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Dr._Dre_in_2011.jpg',
  //     name: 'Dr Dre3',
  //     status: 'Мастер',
  //     statisticInvited: {
  //       all: 98,
  //       direct: 1
  //     },
  //     invitedId: []
  //   }
  // ],
  // 5: [
  //   {
  //     id: '8',
  //     avatar: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Dr._Dre_in_2011.jpg',
  //     name: 'Дима2',
  //     status: 'Мастер',
  //     statisticInvited: {
  //       all: 82,
  //       direct: 0
  //     },
  //     invitedId: []
  //   },
  //   {
  //     id: '11',
  //     avatar: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Dr._Dre_in_2011.jpg',
  //     name: 'Дима3',
  //     status: 'Мастер',
  //     statisticInvited: {
  //       all: 8,
  //       direct: 90
  //     },
  //     invitedId: []
  //   }
  // ],
  // 6: [{
  //   id: '9',
  //   avatar: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Dr._Dre_in_2011.jpg',
  //   name: 'Тайлер2',
  //   status: 'Мастер',
  //   statisticInvited: {
  //     all: 0,
  //     direct: 0
  //   },
  //   invitedId: []
  // }],

  // 15: [
  //   {
  //     id: '20',
  //     avatar: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Dr._Dre_in_2011.jpg',
  //     name: 'sdfsdf',
  //     status: 'Мастер',
  //     statisticInvited: {
  //       all: 8,
  //       direct: 1
  //     },
  //     invitedId: []
  //   },
  //   {
  //     id: '18',
  //     avatar: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Dr._Dre_in_2011.jpg',
  //     name: 'fdsfsd',
  //     status: 'Мастер',
  //     statisticInvited: {
  //       all: 29,
  //       direct: 21
  //     },
  //     invitedId: []
  //   }
  // ]
};

export const getInvitedUsers = (idUser:number):LineageUser[] => invitedUsers[idUser];

export const MOCKS:LineageUser[] = [
  {
    'id': 33,
    'login': 'Herzpower',
    'status': 'basic',
    'firstLineCount': 14,
    'organizationCount': 219
  },
  {
    'id': 196,
    'login': 'ONtSFQTUgn',
    'status': 'basic',
    'firstLineCount': 6,
    'organizationCount': 12
  },
  {
    'id': 8140,
    'login': 'Sergey555',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 8475,
    'login': 'Evin',
    'status': 'silver',
    'firstLineCount': 722,
    'organizationCount': 742
  },
  {
    'id': 8499,
    'login': 'tvoyoskar',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 8621,
    'login': 'aleksevsk',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 8644,
    'login': 'Yuliya',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 8658,
    'login': 'nailyaaes',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 8663,
    'login': 'puka',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 8666,
    'login': 'ОксанаБ',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 8667,
    'login': 'Hize',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 8673,
    'login': 'alexchat32',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 8709,
    'login': 'Karaganda61',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 8710,
    'login': 'Karaganda6q',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 8831,
    'login': 'bob83',
    'status': 'basic',
    'firstLineCount': 2,
    'organizationCount': 2
  },
  {
    'id': 8862,
    'login': 'Vitakrd',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 8906,
    'login': 'Nurlanazin',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 8939,
    'login': 'uks11-uks11',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9007,
    'login': 'Nasik',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9008,
    'login': 'Investboyko',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9009,
    'login': 'Alexmakedonsky',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9010,
    'login': 'invest.boyko',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9011,
    'login': 'Domana',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9012,
    'login': 'paraskevovtamik@yandex.ru',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9013,
    'login': 'VolodimirMakuh',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9016,
    'login': 'natallia_b_',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9018,
    'login': 'Ananda',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9021,
    'login': 'nata_borovik',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9024,
    'login': 'Konstantin',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9026,
    'login': 'ellimurtazina',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9050,
    'login': 'Kvanstejn@gmail.com',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9051,
    'login': 'KseniaShamkova',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9085,
    'login': 'Solona',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9086,
    'login': 'TatianaEngel55',
    'status': 'silver',
    'firstLineCount': 14,
    'organizationCount': 21
  },
  {
    'id': 9203,
    'login': 'bhuvyDpm9X',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9204,
    'login': 'uV6yaYcCtt',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9206,
    'login': 'sSVAe6fDAx',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9207,
    'login': 'o4gSzCcKlN',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9294,
    'login': 'f084219b-1d13-4355-b093-a182d4b6dbc5',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9319,
    'login': 'a4e8feab-c090-4dfb-979e-ad31b67aa289',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9320,
    'login': 'a2bb15ae-ea8f-4cd2-8dee-d41e67763ff7',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9322,
    'login': 'd2ee9b2d-6d02-4594-abb6-bf3f5133f5dc',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9323,
    'login': '747da8bd-b68b-4130-afae-b06cde38d5f6',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9326,
    'login': '73007535-d1fd-4ef4-b35c-8d86b16a2112',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9327,
    'login': '1f41b8c8-bdfe-41f1-97f0-a57312eacde9',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9328,
    'login': '3ec1c41e-c8af-4001-b753-7cbde4623a2d',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9333,
    'login': 'b167182b-f6e7-4c6c-9196-a7aac1eff8a9',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9334,
    'login': '4bb9bfcf-622f-43ea-9659-b39d59fd1693',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9337,
    'login': 'ccdb8c62-aa0d-4948-b45e-61f7c3a7f163',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9338,
    'login': 'e243ed80-fc97-493a-aaa4-e5a6ca772136',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9339,
    'login': 'viktorzubkovwork',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9342,
    'login': '5965d7db-d74b-45aa-adda-fad4248e4cae',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9367,
    'login': '3e90cbe7-451b-461c-a787-4712e5e7a15c',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9372,
    'login': 'c365c765-0cca-4109-9228-6e40859dc9fd',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9373,
    'login': '762aa406-eba2-4026-8f96-0a469fef2e7b',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9374,
    'login': '6412be7c-1554-4301-b9aa-49dd98ba1f62',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9375,
    'login': '0f4f852a-5c74-442b-885c-7662eb726412',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9376,
    'login': '979e6d78-d6b3-4c21-8805-544a734f3f40',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9377,
    'login': '6a889061-ad26-47fd-b7c7-f0065bdbb9c0',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9378,
    'login': 'Qu9g7XMVEg',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9388,
    'login': 'bb7bf763-4739-402e-92c6-ccda693d9e6e',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9389,
    'login': 'mary_mary_sun',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9394,
    'login': '7ceea050-a600-4620-b8ce-4593a980ee47',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9396,
    'login': 'mmDRHuQzJp',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9398,
    'login': '166ca085-ecd5-48a6-bc17-2894b28dd692',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9401,
    'login': '61b0f1c0-550f-491a-a55c-7ea46350158c',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9402,
    'login': '526bdcd0-fe97-4bc8-8be0-6316f32c170c',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9403,
    'login': 'e1df75da-89ad-41c1-898c-b8b7ccb3aaed',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9407,
    'login': '1e752686-3b1a-4370-b18e-7b62b6f34cae',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9411,
    'login': '5f462d65-6f52-4662-8eb8-211ea15c4089',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9412,
    'login': '9bd6c26a-ca43-44dd-9a48-64e274cf5eba',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9420,
    'login': 'f0elub1nP8',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9421,
    'login': 'FqN0tg62JI',
    'status': 'osnovatel-2',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9429,
    'login': 'j90fPMGQHW',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9446,
    'login': 'a1NJqSmUai',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9469,
    'login': '37446473-4eea-4f5a-880a-2777443ab5d6',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9470,
    'login': 'a893a43e-6097-4c90-a017-bfa17455df91',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9472,
    'login': '22CNIQXavZ',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9473,
    'login': '0961fb7c-be45-498b-a105-1164d87d9310',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9474,
    'login': '5b9c17c2-7fb8-444c-8f6c-8e9cf2356520',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9475,
    'login': 'XWkbRIYQMH',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9476,
    'login': 'ddec08fc-37c7-41d4-9619-40d501915c57',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9478,
    'login': 'xdhCfTa4Ox',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9479,
    'login': '67860488-295f-412b-a061-bb616cb30202',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9486,
    'login': 'toAGo88rH9',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9487,
    'login': '2ksSyKawBo',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9531,
    'login': '4a6aba24-6ca4-4260-b48c-53220839d70a',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9545,
    'login': 'cdcaad26-6a3e-4b0b-a434-515d3d70f8d6',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9546,
    'login': '8b1dc01c-f8b5-46e7-9e8e-824d681ed2f1',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9547,
    'login': '06569a7d-1129-4e9d-9768-ab83cde89525',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9548,
    'login': '5ea42c60-4f3e-465b-9b3b-828b1c29854e',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9549,
    'login': '85d5e8fb-6507-48a9-b74f-ef7e7aa84df5',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9550,
    'login': '8396c7dc-40fc-4897-a977-40d5f7022e3b',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9551,
    'login': '6c267212-7ea0-417f-a656-0fe98931c21c',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9552,
    'login': '628fb466-930d-4bea-8577-cca88e9caa6d',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9553,
    'login': 'd019ee2f-dea5-4b38-a3f2-635a8fed36f8',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9554,
    'login': 'bb1eebdf-648a-40eb-a559-db6bace4ca70',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9555,
    'login': 'f048ef85-4851-4142-bf4c-5a7f953e4559',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9556,
    'login': 'ae2707b2-4b37-44f5-87c3-e907a29eeea8',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  },
  {
    'id': 9561,
    'login': 'R2BTMq7X4o',
    'status': 'basic',
    'firstLineCount': 0,
    'organizationCount': 0
  }
];
