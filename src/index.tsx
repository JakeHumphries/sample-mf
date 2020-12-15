/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { PiletApi } from 'shell';
import { Link } from 'react-router-dom';
import { Data } from './Page';
import Page from './Page'

export function setup(app: PiletApi): void {
  app.registerTile(
    `sample-mf`,
    () => (
      <>
        <div>Welcome to the sample-mf app!</div>
        <Link to="/page">click here to access the app</Link>
      </>
    ),
    {
      initialColumns: 4,
      initialRows: 2,
    },
  );

  app.registerTile(() => (
    <button type="button" onClick={() => app.unregisterTile(`sample-mf`)}>
      Remove sample-mf tile
    </button>
  ));

  const apiUrl = `https://jsonplaceholder.typicode.com/posts`;

  const connect = app.createConnector<Array<Data>>(() =>
    // eslint-disable-next-line prettier/prettier
    fetch(apiUrl).then(res => res.json()));
    // new Promise(resolve => setTimeout(() => resolve([{ id: 5, title: 'foo'}]), 1000)))

  app.registerPage(`/page`, connect(Page));
}
