import React from 'react'
export interface ListData {
  id ?: number;
  title ?: string;
  url ?: string;
}

export const LIST_DATA: ListData[] = [
  {
    id: 0,
    title: 'drawing',
    url : "./images/image.jpg" 
  },
  {
    id: 1,
    title: 'total',
    url : "./images/2.jpg" 

  },
  {
    id: 2,
    title: 'method',
    url : "./images/3.jpg" 

  },
  {
    id: 3,
    title: 'material',
    url : "./images/4.jpg" 

  },
];
