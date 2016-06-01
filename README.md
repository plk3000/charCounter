# charCounter

Small script to display a list of all characters present in a file with a count of how many times that char is in the file.

#### To run
`node app.js pathToFile [printAsText]`

- **_[ ]_** indicate an optional parameter
- If **_printAsText_** is present the result is listed as *char  count*, if not present the result is an array of JSON objects in the form:
```json
{
  "char": "A",
  "count": 654
}
```
