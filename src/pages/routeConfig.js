import React from 'react';
import {BiAlignLeft} from 'react-icons/bi';

const routesConfig = [
  {
    id: 'app',
    title: 'Sample',
    messageId: 'sidebar.sample',
    type: 'group',
    children: [
      {
        id: 'page-1',
        title: 'Page 1',
        messageId: 'sidebar.sample.page1',
        type: 'item',
        icon: <BiAlignLeft />,
        path: '/sample/page-1',
      },
      {
        id: 'page-2',
        title: 'Page 2',
        messageId: 'sidebar.sample.page2',
        type: 'item',
        icon: <BiAlignLeft />,
        path: '/sample/page-2',
      },
    ],
  },
  {
    id: 'google-map',
    title: 'Google Map',
    messageId: 'sidebar.googleMap',
    path: 'google-map',
    type: 'collapse',
    children: [
      {
        id: 'simple',
        title: 'Simple',
        type: 'item',
        messageId: 'sidebar.googleMap',
        path: '/third-party/google-map/simple',
      },
      {
        id: 'simple-1',
        title: 'Simple',
        type: 'item',
        messageId: 'sidebar.googleMap',
        path: '/third-party/google-map/simple-1',
      },
      {
        id: 'simple-2',
        title: 'Simple',
        type: 'item',
        messageId: 'sidebar.googleMap',
        path: '/third-party/google-map/simple-2',
      },
    ],
  },
];
export default routesConfig;
