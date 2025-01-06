```markdown
# YoutubeDownloader

A simple class to download YouTube videos as MP3 or other formats using the `notube.net` service. It automatically handles the process of fetching the video data, initializing the download, and retrieving the download link.

## Installation

To install the required dependencies, run:

```bash
npm install axios
```

## Usage

### Example:

```javascript
import YoutubeDownloader from './src/youtubDownloader.js';

(async () => {
  const downloader = new YoutubeDownloader();
  
  const url = 'https://www.youtube.com/watch?v=9bZkp7q19f0';
  
  const data = await downloader.get(url);
  const downloadLink = await downloader.download(data.token);
  
  console.log(downloadLink);
})();
```

### Methods

#### `get(url, format = 'mp3')`

This method fetches the video data and automatically calls the `initialize` method.

- **Parameters:**
  - `url` (string): The YouTube video URL.
  - `format` (string, optional): The desired format of the download. Defaults to `'mp3'`.
  
- **Returns:** A promise that resolves to the data object containing video information.

#### `download(token)`

This method retrieves the download link using the token.

- **Parameters:**
  - `token` (string): The token obtained from the `get()` method.
  
- **Returns:** A promise that resolves to the download URL.

#### `initialize(url, data, subscribed = false, playlist = false, adblock = false)`

This method initializes the download process using the provided video data.

- **Parameters:**
  - `url` (string): The YouTube video URL.
  - `data` (object): The data object containing video information like `format`, `name_mp4`, and `token`.
  - `subscribed` (boolean, optional): Set whether the video is subscribed or not. Defaults to `false`.
  - `playlist` (boolean, optional): Set whether the video is part of a playlist. Defaults to `false`.
  - `adblock` (boolean, optional): Set whether adblock is enabled. Defaults to `false`.

- **Returns:** A promise that resolves to the response data.

## License

MIT License
```
