module.exports = (video, title) => {
  const reIsLink = /^https:\/\/.*$/;

  if (video && reIsLink.test(video)) {
    const videoLink = `<a href="${video}"><em>"${title}"</em></a>`;
    const videoMatch = video.match(/https:\/\/(.*?)\/(.+)$/);

    if (videoMatch) {
      const videoId = videoMatch[2];
      let videoPlayer;
      let videoSrc;

      if (videoMatch[1] === 'vimeo.com') {
        videoPlayer = `<iframe class="has-ratio" width="640" height="380" src="https://player.vimeo.com/video/${videoId}" frameborder="0" title="{{ title }}" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
        videoSrc = ' on Vimeo';
      } else if (videoMatch[1] === 'youtu.be') {
        videoPlayer = `<iframe class="has-ratio" width="640" height="380" src="https://www.youtube.com/embed/${videoId}" frameborder="0" title="{{ title }}" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        videoSrc = ' on YouTube';
      } else if (videoMatch[1] === 'www.youtube.com') {
        const videoVId = videoId.replace(/.*v=([a-z0-9]+).*/i, '$1');

        videoPlayer = `<iframe class="has-ratio" width="640" height="380" src="https://www.youtube.com/embed/${videoVId}" frameborder="0" title="{{ title }}" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        videoSrc = ' on YouTube';
      } else {
        return `<div class="message flex-item is-info">
          <h3 class="message-header">Meetup video</h3>
          <div class="message-body has-text-centered">
            <p>
              ${videoLink}
            </p>
          </div>
          </div>`;
      }

      return `<div class="message flex-item is-info">
        <h3 class="message-header">Meetup video</h3>
        <div class="message-body has-text-centered">
          <figure class="image is-16by9">
            ${videoPlayer}
          </figure>
          <figcaption class="has-margin-top">
            ${videoLink.replace('</a>', `${videoSrc}</a>`)}
          </figcaption>
        </div>
        </div>`;
    }
  }

  return '';
};
