import React from 'react';

export interface MyPageProps {
  data: Array<Data>;
}

export interface Data {
  id: number;
  title: string;
}

const MyPage: React.FC<MyPageProps> = ({ data }): JSX.Element => (
  <div>
    <h1>My cool page</h1>
    <ul>
      {data.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  </div>
);

export default MyPage;