import React from 'react';
import ReactDOM from 'react-dom';
import NewsList from './NewsList';
import mockAxios from 'axios';

it("fetches data from hacker news", async () => {
  const response = [
    18874819,
    18873530,
    18876502,
    18873969,
    18877352,
    18874347,
    18876899,
    18876361,
    18869945,
    18872599,
    18876759,
    18877637,
    18874400,
    18875923,
    18875369,
    18874173,
    18873652
  ];

  // setup
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: { results: response }
    })
  );

  // work
  const div = document.createElement('div');
  ReactDOM.render(<NewsList />, div);
  ReactDOM.unmountComponentAtNode(div);

  // expect
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty");
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewsList />, div);
  ReactDOM.unmountComponentAtNode(div);
});


