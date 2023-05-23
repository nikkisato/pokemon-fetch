# pokemon-fetch

## Topics

- Production quality fetching
- Error status codes overview
- Aborting promises
- REST APIs and the meaning of REST

## Challenge

Using this free REST api: https://pokeapi.co/

- Fetch json data (any data from that api) and display that data on a web page. You can use vanilla js or React if you want - your choice.
- Add error handling
- Be sure to add the following (the focus is on functionality here, not styling, so do not feel like you need to style a spinner or anything like that)
  - loading state (you can simulate this better by throttling to say 3G in your network dev tools tab)
  - error state (so error feedback) if the response errors
- Ensure you check the returned Response object with the ok method. What is this method doing?

## TODO

- Add AbortController functionality and pass in a signal to the fetch request - in what scenarios might this be useful?
- Add an automatic fetch retry mechanism - why might this be useful?
- Read this article: https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design

## In Call

- Review the code and take questions
- Review the linked article about REST meaning/standards/conventions
