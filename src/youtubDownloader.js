import axios from 'axios';

export default class YoutubeDownloader {
  constructor() {
    this.session = axios.create();
  }

  async get(url, format = 'mp3') {
    const response = await this.session.post(
      'https://s47.notube.net/recover_weight.php',
      new URLSearchParams({
        url: url,
        format: format,
        lang: 'en',
        subscribed: 'false',
      }).toString(),
      {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Referer': 'https://notube.net/',
        },
      }
    );

    const data = response.data;
    const urlParam = url;
    await this.initialize(urlParam, 'mp3', data.name_mp4, data.token);

    return data;
  }

  async download(token) {
    const response = await this.session.get(
      `https://notube.net/en/download?token=${token}`,
      {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
          'Referer': 'https://notube.net/en/youtube-app-51',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
        },
      }
    );
    
    return response.data.split('id="downloadButton" class="btn btn-success btn-lg" href="').pop().split('"')[0];
  }

  async initialize(url, format, name_mp4, token, subscribed = false, playlist = false, adblock = false) {
    const response = await this.session.post(
      'https://s47.notube.net/recover_file.php?lang=en',
      new URLSearchParams({
        url,
        format,
        lang: 'en',
        name_mp4,
        token,
        subscribed,
        playlist,
        adblock
      }).toString(),
      {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Referer': 'https://notube.net/',
        },
      }
    );
    return response.data;
  }
}
