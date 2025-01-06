import YoutubeDownloader from './src/youtubDownloader.js';

(async () => {
  const downloader = new YoutubeDownloader();
  
  const url = 'https://www.youtube.com/watch?v=p6HbrlSwong';
  
  const data = await downloader.get(url, 'mp3');
  const downloadLink = await downloader.download(data.token);
  
  console.log({downloadLink});
})();
